import React, { useRef, useEffect, useState } from 'react';

// Universal deployment-safe static asset paths
const PRIMARY_BACKGROUND_IMAGE = '/background.png';
const FALLBACK_BACKGROUND_IMAGE = '/background.jpg';

const PRIMARY_VIDEO_URL = '/background-video.mp4';
const FALLBACK_VIDEO_URL = '/assets/background-video.mp4';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string>(PRIMARY_VIDEO_URL);
  const [imgSrc, setImgSrc] = useState<string>(PRIMARY_BACKGROUND_IMAGE);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  // Helper to reliably trigger muted autoplay across Safari (macOS/iOS), Chrome, Firefox, and Edge
  const attemptPlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('webkit-playsinline', 'true');

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsVideoPlaying(true);
        })
        .catch(() => {
          // Autoplay policy waiting for user interaction
        });
    }
  };

  // Immediate autoplay attempt and passive interaction listeners for instant playback
  useEffect(() => {
    attemptPlay();

    const timers = [
      setTimeout(attemptPlay, 100),
      setTimeout(attemptPlay, 500),
      setTimeout(attemptPlay, 1200),
    ];

    const unlockAndPlay = () => {
      const v = videoRef.current;
      if (v && (v.paused || !isVideoPlaying)) {
        attemptPlay();
      }
    };

    const interactionEvents = [
      'click', 'touchstart', 'touchend', 'scroll',
      'pointerdown', 'pointermove', 'mousemove', 'keydown', 'wheel',
    ];

    interactionEvents.forEach((evt) => {
      window.addEventListener(evt, unlockAndPlay, { passive: true, capture: true });
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') attemptPlay();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      timers.forEach(clearTimeout);
      interactionEvents.forEach((evt) => {
        window.removeEventListener(evt, unlockAndPlay, { capture: true });
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoSrc]);

  const handleVideoError = () => {
    if (videoSrc !== FALLBACK_VIDEO_URL) setVideoSrc(FALLBACK_VIDEO_URL);
  };

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_BACKGROUND_IMAGE) setImgSrc(FALLBACK_BACKGROUND_IMAGE);
  };

  return (
    <div
      id="fixed-portfolio-background"
      className="fixed inset-0 w-full h-full overflow-hidden bg-black select-none pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Layer 1: Fallback high-resolution background image shown while video loads */}
      <img
        id="portfolio-background-image"
        src={imgSrc}
        alt="Portfolio Background"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
        onLoad={() => setIsImageLoaded(true)}
        onError={handleImageError}
        style={{
          filter: 'contrast(1.05) saturate(1.06) brightness(1.02)',
          imageRendering: 'high-quality',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
        className={`absolute inset-0 w-full h-full object-cover object-right pointer-events-none z-0 transition-opacity duration-500 ${
          isImageLoaded ? 'opacity-100' : 'opacity-95'
        }`}
      />

      {/* Layer 2: Looping background video with enhanced clarity & depth */}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        loop
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedData={attemptPlay}
        onCanPlay={attemptPlay}
        onPlaying={() => setIsVideoPlaying(true)}
        onEnded={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            attemptPlay();
          }
        }}
        onError={handleVideoError}
        style={{
          filter: 'contrast(1.05) saturate(1.06) brightness(1.02)',
          imageRendering: 'high-quality',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
        className={`absolute inset-0 w-full h-full object-cover object-right pointer-events-none z-[1] transition-opacity duration-700 ${
          isVideoPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={FALLBACK_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Layer 3: Atmospheric clear & bright overlay — keeps background bright, vibrant and clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-[2]" />
    </div>
  );
};
