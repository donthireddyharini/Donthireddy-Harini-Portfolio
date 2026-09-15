import React, { useState } from 'react';

export interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  bgGlow: string;
  icon: React.ReactNode;
}

// Crisp, authentic SVG tech symbols
export const TECH_SYMBOLS: Record<string, TechItem> = {
  // --- Languages ---
  'C++': {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    color: '#00599C',
    bgGlow: 'rgba(0, 89, 156, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path
          d="M117.5 40.5L67.7 11.8c-2.3-1.3-5.1-1.3-7.4 0L10.5 40.5c-2.3 1.3-3.7 3.8-3.7 6.5v57.3c0 2.6 1.4 5.1 3.7 6.5l49.8 28.7c2.3 1.3 5.1 1.3 7.4 0l49.8-28.7c2.3-1.3 3.7-3.8 3.7-6.5V47c0-2.7-1.4-5.2-3.7-6.5z"
          fill="#00599C"
        />
        <path
          d="M64 117.5L14.2 88.8V39.2L64 67.9v49.6z"
          fill="#004482"
          opacity="0.6"
        />
        <path
          d="M64 67.9l49.8-28.7v49.6L64 117.5V67.9z"
          fill="#004482"
          opacity="0.3"
        />
        {/* C cutout */}
        <path
          d="M48 48c-8.8 0-16 7.2-16 16s7.2 16 16 16c5.5 0 10.4-2.8 13.3-7.1l-6.7-4.4c-1.6 2.3-4.2 3.8-7.2 3.8-4.8 0-8.8-3.9-8.8-8.8s4-8.8 8.8-8.8c3 0 5.6 1.5 7.2 3.8l6.7-4.4C58.4 50.8 53.5 48 48 48z"
          fill="#FFFFFF"
        />
        {/* Plus 1 */}
        <path
          d="M74 58h-3v5h-5v3h5v5h3v-5h5v-3h-5v-5z"
          fill="#FFFFFF"
        />
        {/* Plus 2 */}
        <path
          d="M89 58h-3v5h-5v3h5v5h3v-5h5v-3h-5v-5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  'Java': {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    color: '#E76F00',
    bgGlow: 'rgba(231, 111, 0, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Steam */}
        <path
          d="M45 28c8-4 18-3 24 3 4 4 2 10-4 13-6 3-14 3-18-2-3-4-1-9-2-14z"
          fill="#E76F00"
          opacity="0.85"
        />
        <path
          d="M64 18c6-3 14-2 18 2 3 3 1 8-3 10s-10 2-13-1c-2-3-1-7-2-11z"
          fill="#5382A1"
          opacity="0.9"
        />
        {/* Cup */}
        <path
          d="M32 58h52c0 0 3 24-26 24s-26-24-26-24z"
          fill="#5382A1"
        />
        <path
          d="M84 62c6 0 12 4 12 10s-6 10-12 10v-4c4 0 8-3 8-6s-4-6-8-6v-4z"
          fill="#E76F00"
        />
        {/* Saucer */}
        <path
          d="M24 88c16 8 48 8 64 0 4-2 6-4 6-4s-3 1-8 2c-16 4-44 4-60 0-4-1-6-2-6-2s2 2 4 4z"
          fill="#5382A1"
        />
        <path
          d="M36 96c14 4 36 4 50 0 4-1 6-2 6-2s-2 1-5 2c-13 3-34 3-47 0-3-1-4-2-4-2s1 1 0 2z"
          fill="#E76F00"
        />
      </svg>
    ),
  },

  'HTML5': {
    id: 'html5',
    name: 'HTML5',
    category: 'Languages',
    color: '#E44D26',
    bgGlow: 'rgba(228, 77, 38, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path d="M19 116.5L9 5h110l-10 111.5L64 128l-45-11.5z" fill="#E44D26" />
        <path d="M64 118.5l36.5-9.5L108 14H64v104.5z" fill="#F16529" />
        <path d="M64 53.5H46l-1.3-15H64V24H30l4 44.5h30v-15zm0 37.7l-18.7-5-1.2-13.7H29.5l2.4 27.5L64 104.5V91.2z" fill="#EBEBEB" />
        <path d="M64 53.5h17.5l-1.6 18.5L64 77.2V91.2l18.7-5.2 2.5-28H64V53.5zm0-29.5v14.5h33.4l.6-7 1.4-7.5H64z" fill="#FFFFFF" />
      </svg>
    ),
  },

  'CSS3': {
    id: 'css3',
    name: 'CSS3',
    category: 'Languages',
    color: '#264DE4',
    bgGlow: 'rgba(38, 77, 228, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path d="M19 116.5L9 5h110l-10 111.5L64 128l-45-11.5z" fill="#264DE4" />
        <path d="M64 118.5l36.5-9.5L108 14H64v104.5z" fill="#2965F1" />
        <path d="M64 53.5H46l-1.3-15H64V24H30l4 44.5h30v-15zm0 37.7l-18.7-5-1.2-13.7H29.5l2.4 27.5L64 104.5V91.2z" fill="#EBEBEB" />
        <path d="M64 53.5h17.5l-1.6 18.5L64 77.2V91.2l18.7-5.2 2.5-28H64V53.5zm0-29.5v14.5h33.4l.6-7 1.4-7.5H64z" fill="#FFFFFF" />
      </svg>
    ),
  },

  'JavaScript': {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Languages',
    color: '#F7DF1E',
    bgGlow: 'rgba(247, 223, 30, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path
          d="M71.7 82.2c1.9 3.2 4.5 5.5 8.9 5.5 4.3 0 7-2.1 7-5.2 0-3.6-2.9-4.8-7.7-6.9l-2.6-1.1c-7.6-3.2-12.7-7.3-12.7-16.1 0-8 6.2-14.1 16-14.1 6.9 0 11.9 2.4 15.5 8.8l-7.3 4.7c-1.6-2.8-3.4-4.1-6.9-4.1-3.4 0-5.7 2.1-5.7 4.7 0 3.3 2.1 4.5 6.8 6.5l2.7 1.2c9 3.9 13.9 7.9 13.9 16.8 0 9.6-7.5 14.8-17.5 14.8-9.8 0-16.2-4.7-18.7-11.4l7.3-3.2zM33 83.4c1.5 2.5 3.3 4.6 6.7 4.6 3.5 0 5.7-1.7 5.7-7.9V45.2h10.4v34.9c0 11.9-7 17.3-16.5 17.3-7.5 0-12.1-3.9-14.5-9.3l8.2-4.7z"
          fill="#000000"
        />
      </svg>
    ),
  },

  // --- Frameworks & Libraries ---
  'React.js': {
    id: 'react',
    name: 'React.js',
    category: 'Frameworks & Libraries',
    color: '#61DAFB',
    bgGlow: 'rgba(97, 218, 251, 0.35)',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },

  'Node.js': {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Frameworks & Libraries',
    color: '#539E43',
    bgGlow: 'rgba(83, 158, 67, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path
          d="M64 8l52 30v60L64 128 12 98V38L64 8z"
          fill="#539E43"
        />
        <path
          d="M64 8l52 30v60L64 128V8z"
          fill="#3E863D"
        />
        {/* Stylized N */}
        <path
          d="M42 46v36l12-7V53l20 12V46L42 46zm32 18v18l12-7V57l-12 7z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  'NumPy': {
    id: 'numpy',
    name: 'NumPy',
    category: 'Frameworks & Libraries',
    color: '#4DABCF',
    bgGlow: 'rgba(77, 171, 207, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Isometric Cube Group */}
        <polygon points="64,18 108,43 64,68 20,43" fill="#4DABCF" />
        <polygon points="20,43 64,68 64,118 20,93" fill="#013243" />
        <polygon points="64,68 108,43 108,93 64,118" fill="#256B9E" />
        {/* Grid lines */}
        <line x1="42" y1="31" x2="86" y2="56" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.7" />
        <line x1="86" y1="31" x2="42" y2="56" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.7" />
        <line x1="42" y1="80" x2="42" y2="105" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.7" />
        <line x1="86" y1="80" x2="86" y2="105" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.7" />
      </svg>
    ),
  },

  'Pandas': {
    id: 'pandas',
    name: 'Pandas',
    category: 'Frameworks & Libraries',
    color: '#E70488',
    bgGlow: 'rgba(231, 4, 136, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* 4 Iconic Vertical Data Columns */}
        <rect x="22" y="38" width="16" height="52" rx="8" fill="#150458" />
        <rect x="46" y="24" width="16" height="80" rx="8" fill="#FFD438" />
        <rect x="70" y="32" width="16" height="64" rx="8" fill="#E70488" />
        <rect x="94" y="46" width="16" height="36" rx="8" fill="#13ADC7" />
      </svg>
    ),
  },

  'Matplotlib': {
    id: 'matplotlib',
    name: 'Matplotlib',
    category: 'Frameworks & Libraries',
    color: '#11557C',
    bgGlow: 'rgba(17, 85, 124, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <circle cx="64" cy="64" r="54" fill="#11557C" />
        {/* Spectrum circular wheel / polar chart */}
        <path d="M64 20A44 44 0 0 1 108 64H64Z" fill="#1ABC9C" />
        <path d="M108 64A44 44 0 0 1 64 108V64Z" fill="#F39C12" />
        <path d="M64 108A44 44 0 0 1 20 64H64Z" fill="#E74C3C" />
        <path d="M20 64A44 44 0 0 1 64 20V64Z" fill="#3498DB" />
        <circle cx="64" cy="64" r="18" fill="#FFFFFF" />
      </svg>
    ),
  },

  // --- Databases ---
  'MySQL': {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases',
    color: '#00758F',
    bgGlow: 'rgba(0, 117, 143, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Stylized Dolphin / Wave */}
        <path
          d="M24 88c20-6 40-20 48-40 4-10 12-22 28-20-4 10-2 22 6 28 8 6 12 16 8 26-6 16-24 24-44 24-18 0-34-8-46-18z"
          fill="#00758F"
        />
        <path
          d="M72 48c10-4 22-2 28 6 4 6 2 14-4 18-8 6-18 4-24-4-4-6-4-14 0-20z"
          fill="#F29111"
        />
        <circle cx="86" cy="48" r="3" fill="#FFFFFF" />
      </svg>
    ),
  },

  'MongoDB': {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    color: '#47A248',
    bgGlow: 'rgba(71, 162, 72, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path
          d="M64 14c-2 0-26 28-26 58 0 24 16 42 26 48 10-6 26-24 26-48 0-30-24-58-26-58z"
          fill="#47A248"
        />
        <path
          d="M64 14v106c10-6 26-24 26-48 0-30-24-58-26-58z"
          fill="#3FA037"
        />
        <path
          d="M64 32v76c-3-2-8-6-10-12 0-18 10-38 10-64z"
          fill="#FFFFFF"
          opacity="0.25"
        />
      </svg>
    ),
  },

  'SQLite': {
    id: 'sqlite',
    name: 'SQLite',
    category: 'Databases',
    color: '#003B57',
    bgGlow: 'rgba(0, 59, 87, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Feather & Disk */}
        <ellipse cx="64" cy="92" rx="42" ry="16" fill="#003B57" />
        <ellipse cx="64" cy="68" rx="42" ry="16" fill="#005D8A" />
        <ellipse cx="64" cy="44" rx="42" ry="16" fill="#007ACC" />
        {/* Feather Quill */}
        <path
          d="M92 20c-18 14-34 38-42 62l6 4c12-18 28-44 36-66z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },

  // --- Cloud & DevOps ---
  'AWS concepts': {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud & DevOps',
    color: '#FF9900',
    bgGlow: 'rgba(255, 153, 0, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect width="128" height="128" rx="20" fill="#232F3E" />
        <text
          x="64"
          y="62"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="system-ui, sans-serif"
          fontWeight="800"
          fontSize="36"
        >
          aws
        </text>
        {/* Smile Arrow */}
        <path
          d="M34 82c20 14 44 14 60 0"
          stroke="#FF9900"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <polygon points="96,78 102,86 92,88" fill="#FF9900" />
      </svg>
    ),
  },

  'Vercel': {
    id: 'vercel',
    name: 'Vercel',
    category: 'Cloud & DevOps',
    color: '#FFFFFF',
    bgGlow: 'rgba(255, 255, 255, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <polygon points="64,22 118,106 10,106" fill="#FFFFFF" />
      </svg>
    ),
  },

  'Railway': {
    id: 'railway',
    name: 'Railway',
    category: 'Cloud & DevOps',
    color: '#B845ED',
    bgGlow: 'rgba(184, 69, 237, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect width="128" height="128" rx="24" fill="#0B0C0E" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        {/* Modern Interlocking Track Monogram */}
        <path
          d="M36 36h28c16 0 28 10 28 24 0 11-7 20-18 23l20 29H74L56 84H50v28H36V36zm14 36h14c8 0 14-5 14-12s-6-12-14-12H50v24z"
          fill="#B845ED"
        />
      </svg>
    ),
  },

  'Render': {
    id: 'render',
    name: 'Render',
    category: 'Cloud & DevOps',
    color: '#46E3B7',
    bgGlow: 'rgba(70, 227, 183, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect width="128" height="128" rx="24" fill="#12151A" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        {/* Render R Monogram */}
        <path
          d="M40 32h24c16 0 28 10 28 24 0 12-8 21-19 23l21 29H74L56 80h-4v28H40V32zm12 36h12c7 0 14-4 14-12s-7-12-14-12H52v24z"
          fill="#46E3B7"
        />
      </svg>
    ),
  },

  // --- Developer Tools ---
  'VS Code': {
    id: 'vscode',
    name: 'VS Code',
    category: 'Developer Tools',
    color: '#007ACC',
    bgGlow: 'rgba(0, 122, 204, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path
          d="M96 14l22 10v80l-22 10-52-40L96 14z"
          fill="#0065A9"
        />
        <path
          d="M96 14L44 74 26 60l18-16L96 14z"
          fill="#007ACC"
        />
        <path
          d="M26 68l18 16 52 30-52-40-18-6z"
          fill="#1F9CF0"
        />
        <path
          d="M96 14v100l22-10V24L96 14z"
          fill="#007ACC"
        />
      </svg>
    ),
  },

  'Git': {
    id: 'git',
    name: 'Git',
    category: 'Developer Tools',
    color: '#F05032',
    bgGlow: 'rgba(240, 80, 50, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path
          d="M123.5 56.5L71.5 4.5c-4-4-10.5-4-14.5 0l-52.5 52c-4 4-4 10.5 0 14.5l52 52.5c4 4 10.5 4 14.5 0l52.5-52.5c4-4 4-10.5 0-14.5z"
          fill="#F05032"
        />
        <path
          d="M78 52a10 10 0 1 0-14 9.1v17.8a10 10 0 1 0 6 0V61.1c4.2-1.8 7.3-5.5 8-10.1zm-11 44a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-44a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  'GitHub': {
    id: 'github',
    name: 'GitHub',
    category: 'Developer Tools',
    color: '#FFFFFF',
    bgGlow: 'rgba(255, 255, 255, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 8C33.1 8 8 33.1 8 64c0 24.7 16 45.7 38.3 53.1 2.8.5 3.8-1.2 3.8-2.7v-9.5c-15.6 3.4-18.9-7.5-18.9-7.5-2.5-6.5-6.2-8.2-6.2-8.2-5.1-3.5.4-3.4.4-3.4 5.6.4 8.6 5.8 8.6 5.8 5 8.6 13.1 6.1 16.3 4.7.5-3.6 2-6.1 3.6-7.5-12.4-1.4-25.5-6.2-25.5-27.7 0-6.1 2.2-11.1 5.8-15-0.6-1.4-2.5-7.1.6-14.8 0 0 4.7-1.5 15.4 5.7 4.5-1.2 9.3-1.9 14.1-1.9s9.6.6 14.1 1.9c10.7-7.2 15.4-5.7 15.4-5.7 3.1 7.7 1.2 13.4.6 14.8 3.6 3.9 5.8 8.9 5.8 15 0 21.6-13.1 26.2-25.6 27.6 2 1.8 3.9 5.2 3.9 10.5v15.6c0 1.5 1 3.3 3.9 2.7C104 109.7 120 88.7 120 64c0-30.9-25.1-56-56-56z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  'Antigravity': {
    id: 'antigravity',
    name: 'Antigravity',
    category: 'Developer Tools',
    color: '#34D399',
    bgGlow: 'rgba(52, 211, 153, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <circle cx="64" cy="64" r="24" fill="#34D399" />
        <ellipse cx="64" cy="64" rx="52" ry="18" stroke="#34D399" strokeWidth="4" transform="rotate(-30 64 64)" strokeDasharray="6 4" />
        <circle cx="98" cy="44" r="6" fill="#A7F3D0" />
        <circle cx="30" cy="84" r="4" fill="#A7F3D0" />
      </svg>
    ),
  },

  // --- AI & LLMs ---
  'Claude': {
    id: 'claude',
    name: 'Claude',
    category: 'AI & LLMs',
    color: '#D97706',
    bgGlow: 'rgba(217, 119, 6, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Anthropic Claude Sunburst Asterisk */}
        <g stroke="#D97706" strokeWidth="12" strokeLinecap="round">
          <line x1="64" y1="20" x2="64" y2="108" />
          <line x1="20" y1="64" x2="108" y2="64" />
          <line x1="33" y1="33" x2="95" y2="95" />
          <line x1="33" y1="95" x2="95" y2="33" />
        </g>
        <circle cx="64" cy="64" r="12" fill="#F59E0B" />
      </svg>
    ),
  },

  'ChatGPT': {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI & LLMs',
    color: '#10A37F',
    bgGlow: 'rgba(16, 163, 127, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <circle cx="64" cy="64" r="56" fill="#10A37F" />
        {/* OpenAI Rosette Spiral */}
        <g stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M64 42c8-12 24-10 28 4s-4 26-18 28" />
          <path d="M80 52c14-4 26 6 22 20s-20 18-32 10" />
          <path d="M78 72c6 13 0 26-14 26s-24-12-20-26" />
          <path d="M64 86c-8 12-24 10-28-4s4-26 18-28" />
          <path d="M48 76c-14 4-26-6-22-20s20-18 32-10" />
          <path d="M50 56c-6-13 0-26 14-26s24 12 20 26" />
        </g>
      </svg>
    ),
  },

  'Gemini': {
    id: 'gemini',
    name: 'Gemini',
    category: 'AI & LLMs',
    color: '#3B82F6',
    bgGlow: 'rgba(59, 130, 246, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="geminiGrad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4E89FF" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* 4-point Radiant Star */}
        <path
          d="M64 12C64 40.7 40.7 64 12 64c28.7 0 52 23.3 52 52 0-28.7 23.3-52 52-52-28.7 0-52-23.3-52-52z"
          fill="url(#geminiGrad)"
        />
      </svg>
    ),
  },

  'Groq API': {
    id: 'groq',
    name: 'Groq API',
    category: 'AI & LLMs',
    color: '#F97316',
    bgGlow: 'rgba(249, 115, 22, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect width="128" height="128" rx="28" fill="#F97316" />
        {/* Groq Bold Q Monogram */}
        <path
          d="M64 32c-18 0-32 14-32 32s14 32 32 32c6 0 12-2 17-5l11 11 8-8-10-10c4-6 6-13 6-20 0-18-14-32-32-32zm0 50c-10 0-18-8-18-18s8-18 18-18 18 8 18 18-8 18-18 18z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },

  'Llama 3.3': {
    id: 'llama',
    name: 'Llama 3.3',
    category: 'AI & LLMs',
    color: '#6366F1',
    bgGlow: 'rgba(99, 102, 241, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <circle cx="64" cy="64" r="56" fill="#1E1E2E" stroke="#6366F1" strokeWidth="3" />
        {/* Llama silhouette ears & snout */}
        <path
          d="M48 30l6 20h20l6-20 8 26v18h-8v18l-8 10H56l-8-10V74h-8V56l8-26z"
          fill="#6366F1"
        />
        <circle cx="56" cy="62" r="3" fill="#FFFFFF" />
        <circle cx="72" cy="62" r="3" fill="#FFFFFF" />
      </svg>
    ),
  },

  // --- Core Subjects ---
  'Computer Networks': {
    id: 'cn',
    name: 'Computer Networks',
    category: 'Core Subjects',
    color: '#34D399',
    bgGlow: 'rgba(52, 211, 153, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <circle cx="64" cy="36" r="14" fill="#34D399" />
        <circle cx="34" cy="92" r="14" fill="#10B981" />
        <circle cx="94" cy="92" r="14" fill="#059669" />
        <line x1="64" y1="36" x2="34" y2="92" stroke="#A7F3D0" strokeWidth="4" strokeDasharray="4 4" />
        <line x1="64" y1="36" x2="94" y2="92" stroke="#A7F3D0" strokeWidth="4" strokeDasharray="4 4" />
        <line x1="34" y1="92" x2="94" y2="92" stroke="#A7F3D0" strokeWidth="4" strokeDasharray="4 4" />
      </svg>
    ),
  },

  'Operating Systems': {
    id: 'os',
    name: 'Operating Systems',
    category: 'Core Subjects',
    color: '#A855F7',
    bgGlow: 'rgba(168, 85, 247, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        <rect x="28" y="28" width="72" height="72" rx="14" fill="#1E1B4B" stroke="#A855F7" strokeWidth="4" />
        {/* CPU Kernel and Pins */}
        <rect x="44" y="44" width="40" height="40" rx="8" fill="#A855F7" />
        <line x1="20" y1="50" x2="28" y2="50" stroke="#C084FC" strokeWidth="3" />
        <line x1="20" y1="64" x2="28" y2="64" stroke="#C084FC" strokeWidth="3" />
        <line x1="20" y1="78" x2="28" y2="78" stroke="#C084FC" strokeWidth="3" />
        <line x1="100" y1="50" x2="108" y2="50" stroke="#C084FC" strokeWidth="3" />
        <line x1="100" y1="64" x2="108" y2="64" stroke="#C084FC" strokeWidth="3" />
        <line x1="100" y1="78" x2="108" y2="78" stroke="#C084FC" strokeWidth="3" />
      </svg>
    ),
  },

  'Data Structures & Algorithms': {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'Core Subjects',
    color: '#38BDF8',
    bgGlow: 'rgba(56, 189, 248, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Binary Search Tree */}
        <line x1="64" y1="30" x2="38" y2="64" stroke="#38BDF8" strokeWidth="4" />
        <line x1="64" y1="30" x2="90" y2="64" stroke="#38BDF8" strokeWidth="4" />
        <line x1="38" y1="64" x2="24" y2="98" stroke="#38BDF8" strokeWidth="4" />
        <line x1="38" y1="64" x2="52" y2="98" stroke="#38BDF8" strokeWidth="4" />
        <circle cx="64" cy="30" r="12" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2.5" />
        <circle cx="38" cy="64" r="10" fill="#0369A1" stroke="#BAE6FD" strokeWidth="2.5" />
        <circle cx="90" cy="64" r="10" fill="#0369A1" stroke="#BAE6FD" strokeWidth="2.5" />
        <circle cx="24" cy="98" r="8" fill="#075985" stroke="#BAE6FD" strokeWidth="2" />
        <circle cx="52" cy="98" r="8" fill="#075985" stroke="#BAE6FD" strokeWidth="2" />
      </svg>
    ),
  },

  'OOP': {
    id: 'oop',
    name: 'Object-Oriented Programming',
    category: 'Core Subjects',
    color: '#EC4899',
    bgGlow: 'rgba(236, 72, 153, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Class Encapsulation Blueprint */}
        <rect x="24" y="24" width="80" height="32" rx="8" fill="#EC4899" />
        <rect x="24" y="66" width="36" height="38" rx="8" fill="#DB2777" />
        <rect x="68" y="66" width="36" height="38" rx="8" fill="#BE185D" />
        <line x1="64" y1="56" x2="42" y2="66" stroke="#F472B6" strokeWidth="3" />
        <line x1="64" y1="56" x2="86" y2="66" stroke="#F472B6" strokeWidth="3" />
      </svg>
    ),
  },

  // --- Soft Skills ---
  'Problem-Solving': {
    id: 'problem-solving',
    name: 'Problem-Solving',
    category: 'Soft Skills',
    color: '#FBBF24',
    bgGlow: 'rgba(251, 191, 36, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Idea / Lightbulb filament */}
        <path
          d="M64 24c-18 0-32 14-32 32 0 12 6 22 16 28v12h32V84c10-6 16-16 16-28 0-18-14-32-32-32z"
          fill="#F59E0B"
        />
        <rect x="52" y="100" width="24" height="6" rx="3" fill="#D97706" />
        <line x1="64" y1="12" x2="64" y2="4" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        <line x1="94" y1="24" x2="100" y2="18" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
        <line x1="34" y1="24" x2="28" y2="18" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },

  'Team Collaboration': {
    id: 'collaboration',
    name: 'Team Collaboration',
    category: 'Soft Skills',
    color: '#60A5FA',
    bgGlow: 'rgba(96, 165, 250, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Multi-person collaboration */}
        <circle cx="64" cy="40" r="16" fill="#3B82F6" />
        <path d="M40 92c0-14 11-24 24-24s24 10 24 24v8H40v-8z" fill="#3B82F6" />
        <circle cx="34" cy="50" r="11" fill="#60A5FA" opacity="0.85" />
        <path d="M16 94c0-10 8-18 18-18 4 0 7 1 10 3-4 5-6 11-6 17v6H16v-8z" fill="#60A5FA" opacity="0.85" />
        <circle cx="94" cy="50" r="11" fill="#60A5FA" opacity="0.85" />
        <path d="M112 94c0-10-8-18-18-18-4 0-7 1-10 3 4 5 6 11 6 17v6h22v-8z" fill="#60A5FA" opacity="0.85" />
      </svg>
    ),
  },

  'Intellectual Curiosity': {
    id: 'curiosity',
    name: 'Intellectual Curiosity',
    category: 'Soft Skills',
    color: '#C084FC',
    bgGlow: 'rgba(192, 132, 252, 0.35)',
    icon: (
      <svg viewBox="0 0 128 128" className="w-full h-full" fill="none">
        {/* Astrolabe / Discovery Spark */}
        <circle cx="64" cy="64" r="46" stroke="#C084FC" strokeWidth="4" />
        <circle cx="64" cy="64" r="30" stroke="#E9D5FF" strokeWidth="2" strokeDasharray="6 4" />
        <polygon points="64,28 72,56 100,64 72,72 64,100 56,72 28,64 56,56" fill="#A855F7" />
        <circle cx="64" cy="64" r="5" fill="#FFFFFF" />
      </svg>
    ),
  },
};

interface TechSymbolBadgeProps {
  itemName: string;
}

export const TechSymbolBadge: React.FC<TechSymbolBadgeProps> = ({ itemName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const textContainerRef = React.useRef<HTMLDivElement>(null);
  const textSpanRef = React.useRef<HTMLSpanElement>(null);
  const [scrollDistance, setScrollDistance] = useState(18);

  const tech = TECH_SYMBOLS[itemName];

  React.useEffect(() => {
    const measure = () => {
      if (textContainerRef.current && textSpanRef.current) {
        const containerWidth = textContainerRef.current.clientWidth;
        const contentWidth = textSpanRef.current.scrollWidth;
        if (contentWidth > containerWidth) {
          // Long names: scroll the full distance
          setScrollDistance(Math.ceil(contentWidth - containerWidth + 8));
        } else {
          // Small names (Java, C++, SQL, Git, etc.): scroll with clear travel distance
          setScrollDistance(18);
        }
      }
    };

    measure();
    const timer = setTimeout(measure, 200);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measure);
    };
  }, [itemName, tech]);

  if (!tech) {
    // Fallback if an item has no custom SVG yet
    return (
      <span className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-white/90 font-mono border border-white/10">
        {itemName}
      </span>
    );
  }

  return (
    <div
      className="relative group inline-flex flex-col items-center justify-center p-1.5 rounded-2xl hover:bg-white/[0.05] transition-all duration-200 cursor-pointer w-[76px] sm:w-[84px] shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      role="button"
      aria-label={tech.name}
    >
      {/* Icon Capsule Button */}
      <div
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center p-2.5 transition-all duration-300 border select-none active:scale-95"
        style={{
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.05)',
          borderColor: isHovered ? tech.color : 'rgba(255, 255, 255, 0.12)',
          boxShadow: isHovered ? `0 0 18px -2px ${tech.bgGlow}` : '0 4px 10px rgba(0, 0, 0, 0.25)',
          transform: isHovered ? 'translateY(-2px) scale(1.08)' : 'translateY(0) scale(1)',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {tech.icon}
        </div>
      </div>

      {/* Automatically scrolling skill name under the symbol (always scrolls, even for short names) */}
      <div
        ref={textContainerRef}
        className="mt-1.5 w-full overflow-hidden text-center py-0.5 select-none relative"
        title={tech.name}
      >
        <span
          ref={textSpanRef}
          className={`inline-block text-[10px] sm:text-[11px] font-mono tracking-tight leading-tight whitespace-nowrap px-1 transition-colors duration-200 animate-text-scroll ${
            isHovered ? 'font-semibold text-white' : 'text-white/80 font-normal'
          }`}
          style={{
            color: isHovered ? tech.color : undefined,
            '--marquee-distance': `-${scrollDistance}px`,
          } as React.CSSProperties}
        >
          {tech.name}
        </span>
      </div>

      {/* Floating Tooltip displaying full technology name and category on hover */}
      <div
        className={`absolute bottom-full mb-2 z-30 pointer-events-none transition-all duration-200 transform ${
          isHovered
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-1 scale-95'
        }`}
      >
        <div className="bg-black/95 text-white font-mono text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20 shadow-2xl whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: tech.color }}
          />
          <span>{tech.name}</span>
          <span className="text-[9px] text-white/50 pl-1 border-l border-white/20">{tech.category}</span>
        </div>
        {/* Triangle pointer */}
        <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black/95 mx-auto -mt-[1px]" />
      </div>
    </div>
  );
};
