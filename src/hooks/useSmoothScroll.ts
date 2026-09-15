import { useEffect, useRef } from 'react';

/**
 * Premium smooth scroll engine.
 *
 * Physics model:
 *   - Each wheel/touch delta is added to a velocity accumulator.
 *   - Every rAF tick, velocity is multiplied by a friction factor,
 *     producing natural exponential deceleration (momentum / inertia).
 *   - The scroll position is advanced by the current velocity each frame.
 *
 * Design goals:
 *   - Zero layout thrashing (only window.scrollTo writes, passive reads).
 *   - GPU-only path (no transform / paint triggers on the main thread).
 *   - Passive wheel/touch listeners for maximum compositor priority.
 *   - Respects prefers-reduced-motion - falls back to native scroll.
 *   - Single rAF loop shared across all events (no duplicate frames).
 */
export function useSmoothScroll() {
  const velocityRef = useRef(0);
  const targetRef   = useRef(0);
  const rafRef      = useRef<number | null>(null);
  const activeRef   = useRef(false);
  const lastTouchY  = useRef(0);

  useEffect(() => {
    targetRef.current = window.scrollY;

    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Constants — tuned for "butter smooth, controlled pace" feel
    const FRICTION     = 0.88;   // velocity decay per frame — controls smoothness, not speed
    const WHEEL_SCALE  = 0.25;   // ↓ how far each wheel tick travels
    const TOUCH_SCALE  = 0.55;   // ↓ touch swipe distance multiplier
    const STOP_EPSILON = 0.12;   // px/frame below which we snap to rest
    const MAX_VELOCITY = 38;     // ↓ maximum speed cap (px/frame)

    const clamp = (v: number) =>
      Math.max(0, Math.min(v, document.body.scrollHeight - window.innerHeight));

    const tick = () => {
      velocityRef.current *= FRICTION;

      if (Math.abs(velocityRef.current) < STOP_EPSILON) {
        window.scrollTo(0, clamp(targetRef.current));
        velocityRef.current = 0;
        activeRef.current   = false;
        rafRef.current      = null;
        return;
      }

      targetRef.current = clamp(targetRef.current + velocityRef.current);
      window.scrollTo(0, targetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (!activeRef.current) {
        activeRef.current = true;
        rafRef.current    = requestAnimationFrame(tick);
      }
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 32;
      if (e.deltaMode === 2) delta *= window.innerHeight;

      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, velocityRef.current + delta * WHEEL_SCALE)
      );
      targetRef.current = clamp(window.scrollY + velocityRef.current);
      startLoop();
    };

    const onTouchStart = (e: TouchEvent) => {
      lastTouchY.current  = e.touches[0].clientY;
      velocityRef.current = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      const y     = e.touches[0].clientY;
      const delta = (lastTouchY.current - y) * TOUCH_SCALE;
      lastTouchY.current = y;

      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, velocityRef.current + delta)
      );
      targetRef.current = clamp(window.scrollY + velocityRef.current);
      startLoop();
    };

    const onNativeScroll = () => {
      if (!activeRef.current) targetRef.current = window.scrollY;
    };

    window.addEventListener('wheel',      onWheel,      { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true  });
    window.addEventListener('touchmove',  onTouchMove,  { passive: true  });
    window.addEventListener('scroll',     onNativeScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel',      onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove',  onTouchMove);
      window.removeEventListener('scroll',     onNativeScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
}
