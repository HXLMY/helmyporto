import React from 'react';

// Crisp, colored vector SVG icons for all technical skills & AI tools
export const TechIcon = ({ name, size = 28, className = '' }) => {
  const iconKey = (name || '').toLowerCase().trim();

  // Skill Icons
  if (iconKey.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#339933"/>
        <path d="M12 4l7 4v8l-7 4-7-4V8l7-4z" fill="#333333"/>
        <path d="M12 5.5l5.5 3.2v6.4L12 18.3 6.5 15.1V8.7L12 5.5z" fill="#5FA04E"/>
        <path d="M12 9.5v5M9.5 11l2.5 1.5 2.5-1.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (iconKey.includes('php')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#777BB4"/>
        <path d="M6.5 15.5l1.2-7h2.8c1.3 0 2.2.8 2 1.9-.2 1.2-1.3 2.1-2.6 2.1H8.5l-.6 3H6.5zm2.3-4.5h1.2c.6 0 1.1-.4 1.2-.9.1-.5-.3-.9-.9-.9H8.1l-.3 1.8h1zM14.5 15.5l1.2-7h2.8c1.3 0 2.2.8 2 1.9-.2 1.2-1.3 2.1-2.6 2.1h-1.4l-.6 3h-1.4zm2.3-4.5h1.2c.6 0 1.1-.4 1.2-.9.1-.5-.3-.9-.9-.9h-1.2l-.3 1.8h1.2z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey === 'javascript' || iconKey === 'js' || iconKey.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M6 18.5l2.2-1.3c.4.8.9 1.4 1.8 1.4.9 0 1.4-.4 1.4-1.4v-6.7h2.6v6.8c0 2.4-1.4 3.5-3.8 3.5-2 0-3.3-1-4.2-2.3zm8.2-.3l2.2-1.3c.6 1 1.4 1.7 2.6 1.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.2-2-1.8l-.7-.3c-2-.9-3.3-2-3.3-4.3 0-2.1 1.7-3.7 4.3-3.7 1.9 0 3.2.7 4.1 2.3l-2.1 1.3c-.5-.8-1.1-1.2-2-1.2-.9 0-1.5.5-1.5 1.2 0 .8.6 1.1 1.8 1.6l.7.3c2.3 1 3.6 2.1 3.6 4.5 0 2.6-2 3.9-4.6 3.9-2.5 0-4-1.2-4.8-2.6z" fill="#000000"/>
      </svg>
    );
  }

  if (iconKey.includes('vue')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 21L1.5 3h4.2L12 14.1 18.3 3h4.2L12 21z" fill="#41B883"/>
        <path d="M12 14.5L5.7 3.5h3.6L12 9.2l2.7-5.7h3.6L12 14.5z" fill="#34495E"/>
      </svg>
    );
  }

  if (iconKey.includes('svelte')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M19.9 8.2c-.8-2.2-2.7-3.8-5.1-4.2-3.4-.6-6.6 1.3-7.5 4.5-.3 1.1-.2 2.2.2 3.1L5 13.9c-1.3 2.4-.7 5.4 1.4 7.2 2.7 2.2 6.6 1.9 8.9-.7l2.5-3.3c.4-.5.3-1.2-.2-1.6-.5-.4-1.2-.3-1.6.2l-2.5 3.3c-1.5 1.7-4.1 1.9-5.9.4-1.4-1.2-1.8-3.2-.9-4.8l2.9-2.7c1.3.8 2.9 1 4.5.7 2.3-.5 4.1-2.1 4.8-4.2z" fill="#FF3E00"/>
      </svg>
    );
  }

  if (iconKey === 'api' || iconKey.includes('api')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#0284C7"/>
        <path d="M6 15l2-6h1.5l2 6h-1.3l-.4-1.5H7.7L7.3 15H6zm2.1-2.5h1.3l-.6-2.2-.7 2.2zM12 15V9h2.5c1.4 0 2.3.8 2.3 2s-.9 2-2.3 2H13.3v2H12zm1.3-3h1.2c.7 0 1.1-.4 1.1-1s-.4-1-1.1-1h-1.2v2zM17.5 15V9h1.3v6h-1.3z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('jquery')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="4" fill="#0769AD"/>
        <path d="M16.8 6.5c-1.3 1.3-2.6 2.3-4.5 3.5-.8.5-1.7.9-2.6 1.4-.4.2-.7.5-.7 1 0 .6.4 1.1 1 1.1.4 0 .9-.2 1.3-.4 1.8-.9 3.5-2.2 4.9-3.7l.6 2.2c-1.6 1.8-3.6 3.2-5.8 4.2-.8.3-1.6.6-2.5.6-1.5 0-2.6-1-2.6-2.5 0-1.2.7-2.3 1.8-3 1.1-.7 2.3-1.2 3.4-1.9 1.5-.9 2.7-1.8 3.8-2.9l1.9.4z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('bootstrap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#7952B3"/>
        <path d="M7 6h5.8c2.2 0 3.7 1.1 3.7 2.8 0 1.2-.8 2.1-1.9 2.4 1.5.3 2.4 1.4 2.4 2.8 0 1.9-1.6 3-3.9 3H7V6zm3.3 4.2h2.2c.9 0 1.5-.4 1.5-1.2 0-.8-.6-1.2-1.5-1.2h-2.2v2.4zm0 4.8h2.5c1 0 1.7-.5 1.7-1.3s-.7-1.3-1.7-1.3h-2.5v2.6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('mysql')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#00758F"/>
        <path d="M19 15.5c-1.3 1.4-3.6 2.2-6.5 2.2-4.5 0-7.5-2-7.5-4.8 0-2.5 2.5-4.3 6.3-4.7 1.5-.2 3.2-.1 4.5.3l-.5 1.5c-1-.3-2.3-.4-3.6-.3-3 .3-4.8 1.6-4.8 3.2 0 1.8 2.2 3.1 5.6 3.1 2.2 0 4-.6 5-1.6l1.5 1.1z" fill="#F29111"/>
        <path d="M14.5 7.5c1.8 0 3.2 1.3 3.2 3.1s-1.4 3.1-3.2 3.1c-.8 0-1.5-.3-2.1-.7l.9-1.2c.4.3.8.5 1.2.5 1 0 1.8-.7 1.8-1.7s-.8-1.7-1.8-1.7c-.5 0-1 .2-1.3.6l-.9-1.1c.6-.6 1.4-.9 2.2-.9z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('mariadb')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#003545"/>
        <path d="M5.5 16.5c1.2-3.8 4.2-6.5 8-7.5 2.2-.6 4.6-.3 6.5.8l-1 1.5c-1.5-.8-3.3-1-5-.5-3 .8-5.3 3-6.3 6l-2.2-.3z" fill="#C09853"/>
        <path d="M12 17.5c-2.8 0-5-2.2-5-5s2.2-5 5-5c1.4 0 2.7.6 3.6 1.5l-1.4 1.4c-.6-.6-1.4-.9-2.2-.9-1.7 0-3 1.3-3 3s1.3 3 3 3c.9 0 1.7-.4 2.2-1l1.4 1.4c-1 1-2.3 1.6-3.6 1.6z" fill="#00A3E0"/>
      </svg>
    );
  }

  if (iconKey === 'git') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L9.4 4c-.3.3-.4.7-.3 1.1l2.3 2.3c.4-.1.8-.2 1.2-.1 1 .2 1.8 1 2 2 .4 1.4-.3 2.8-1.6 3.4v2.9c.4.2.8.5 1 1 .6 1.2.1 2.7-1.1 3.3-1.2.6-2.7.1-3.3-1.1-.4-.8-.3-1.8.2-2.5v-2.8c-.5-.3-.9-.7-1.1-1.2-.4-1.2.1-2.4 1-3.1L7.5 8.1c-.4-.4-.8-.3-1.1 0L2.4 12c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" fill="#F05032"/>
      </svg>
    );
  }

  if (iconKey.includes('github')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#24292E"/>
      </svg>
    );
  }

  if (iconKey.includes('rdp') || iconKey.includes('remote desktop')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="3" width="20" height="14" rx="2.5" fill="#0284C7"/>
        <path d="M8 21h8M12 17v4" stroke="#0284C7" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 8l3 3-3 3M12 14h5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (iconKey.includes('mikrotik')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#2C3B4D"/>
        <path d="M4 14.5c2.5-3 5.5-4.5 8-4.5s5.5 1.5 8 4.5" stroke="#00A4E4" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M7 17.5c1.8-2 3.3-3 5-3s3.2 1 5 3" stroke="#E30613" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="12" cy="7" r="2.5" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('linux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#FCC624"/>
        <path d="M12 4c-2.5 0-4 2-4 5.5 0 1.5.5 3.5 1 4.5-.5 1-2 2-2 3.5 0 1.5 1.5 2.5 4 2.5h2c2.5 0 4-1 4-2.5 0-1.5-1.5-2.5-2-3.5.5-1 1-3 1-4.5C16 6 14.5 4 12 4z" fill="#000000"/>
        <circle cx="10.5" cy="8.5" r="1" fill="#FFFFFF"/>
        <circle cx="13.5" cy="8.5" r="1" fill="#FFFFFF"/>
        <path d="M11 11h2l-1 1.5-1-1.5z" fill="#FFA500"/>
      </svg>
    );
  }

  if (iconKey.includes('wordpress')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.8 0-3.5-.6-4.8-1.6l4.2-11.5 4.3 11.7c-1.1.9-2.4 1.4-3.7 1.4zm-6.5-5.5c-.6-1.1-.9-2.3-.9-3.7 0-2.6 1.3-4.8 3.3-6.1L4.8 14.2l3.1.5zm11.3-8.8c.8 1.1 1.4 2.4 1.4 3.9 0 1.6-.6 3.1-1.5 4.3l-3.3-9.1c1.3.1 2.5.4 3.4.9z" fill="#21759B"/>
      </svg>
    );
  }

  if (iconKey.includes('cms')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#6366F1"/>
        <path d="M5 6h14v3H5V6zm0 5h6v7H5v-7zm8 0h6v3h-6v-3zm0 5h6v2h-6v-2z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('mvc')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#8B5CF6"/>
        <rect x="4" y="5" width="16" height="3.5" rx="1.5" fill="#FFFFFF"/>
        <rect x="4" y="10.5" width="16" height="3.5" rx="1.5" fill="#DDD6FE"/>
        <rect x="4" y="16" width="16" height="3.5" rx="1.5" fill="#C4B5FD"/>
      </svg>
    );
  }

  if (iconKey.includes('responsive') || iconKey.includes('web design')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect x="2" y="4" width="15" height="11" rx="2" fill="#0EA5E9"/>
        <path d="M6 18h7M9.5 15v3" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round"/>
        <rect x="15" y="9" width="7" height="11" rx="1.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5"/>
        <circle cx="18.5" cy="17.5" r="0.8" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('dashboard')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#10B981"/>
        <path d="M5 5h6v6H5V5zm8 0h6v4h-6V5zm0 6h6v8h-6v-8zm-8 8h6v-6H5v6z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('speaking') || iconKey.includes('publik speaking')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#F59E0B"/>
        <rect x="9" y="4" width="6" height="10" rx="3" fill="#FFFFFF"/>
        <path d="M6 11c0 3.3 2.7 6 6 6s6-2.7 6-6M12 17v4M8 21h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (iconKey.includes('leadership')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#EC4899"/>
        <path d="M5 16l2-8 5 4 5-4 2 8H5z" fill="#FFFFFF"/>
        <circle cx="12" cy="7" r="1.5" fill="#FDE047"/>
        <circle cx="5" cy="9" r="1.2" fill="#FDE047"/>
        <circle cx="19" cy="9" r="1.2" fill="#FDE047"/>
      </svg>
    );
  }

  if (iconKey.includes('troubleshoot') || iconKey.includes('troubleshooting')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#EF4444"/>
        <path d="M14.7 6.3a4.5 4.5 0 00-6 6l-4.4 4.4a1.5 1.5 0 002.1 2.1l4.4-4.4a4.5 4.5 0 006-6l-2.1 2.1-2.1-2.1 2.1-2.1z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('problem') || iconKey.includes('solving')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#8B5CF6"/>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-6 6c0 2.2 1.2 4.1 3 5.1V16a1 1 0 001 1h4a1 1 0 001-1v-1.9c1.8-1 3-2.9 3-5.1a6 6 0 00-6-6z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 7v3l2 1" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  if (iconKey.includes('laravel')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#FF2D20"/>
        <path d="M17.5 7.5L12 4.3 6.5 7.5v6.5l5.5 3.2 5.5-3.2V7.5zM12 6.2l3.8 2.2-3.8 2.2-3.8-2.2 3.8-2.2zm-4.3 3.3l3.8 2.2v4.4l-3.8-2.2V9.5zm8.6 4.4l-3.8 2.2v-4.4l3.8-2.2v4.4z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('react') || iconKey.includes('next')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#0A0A0A"/>
        <circle cx="12" cy="12" r="2.2" fill="#00D8FF"/>
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(90 12 12)"/>
        <ellipse cx="12" cy="12" rx="8" ry="3.2" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(150 12 12)"/>
      </svg>
    );
  }

  if (iconKey.includes('sap') || iconKey.includes('abap')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#008FD3"/>
        <path d="M5 8h4.5c1.2 0 2 .6 2 1.6 0 .9-.8 1.5-2 1.5H6.8v2.4H5V8zm1.8 2h2.2c.5 0 .8-.2.8-.5 0-.3-.3-.5-.8-.5H6.8v1zm5.2-2h4v5.5H16V12h-2.2v1.5H12V8zm1.8 1.5v1.2H16V9.5h-2.2z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="5" fill="#0F172A"/>
        <path d="M6.5 11.5c1-2.5 3-3.5 5.5-2.5 1.5.6 2.5 1.6 3.5 1.6 1.8 0 3-1 3.5-3-1 2.5-3 3.5-5.5 2.5-1.5-.6-2.5-1.6-3.5-1.6-1.8 0-3 1-3.5 3zm-3.5 5c1-2.5 3-3.5 5.5-2.5 1.5.6 2.5 1.6 3.5 1.6 1.8 0 3-1 3.5-3-1 2.5-3 3.5-5.5 2.5-1.5-.6-2.5-1.6-3.5-1.6-1.8 0-3 1-3.5 3z" fill="#38BDF8"/>
      </svg>
    );
  }

  // ==========================================
  // AI TOOLS ICONS
  // ==========================================

  if (iconKey.includes('chatgpt')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#10A37F"/>
        <path d="M18.2 10.4a4 4 0 00-.3-2.8 4.1 4.1 0 00-3.3-2 3.8 3.8 0 00-2.3.2 4 4 0 00-3.2-1.5 4.1 4.1 0 00-3.9 2.8 4 4 0 00-1.8 2.6 4.1 4.1 0 00.6 3.8 4 4 0 00.3 2.8 4.1 4.1 0 003.3 2 3.8 3.8 0 002.3-.2 4 4 0 003.2 1.5 4.1 4.1 0 003.9-2.8 4 4 0 001.8-2.6 4.1 4.1 0 00-.6-3.8zM12 13.6l-2-1.2 2-1.1 2 1.1-2 1.2z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (iconKey === 'claude' || (iconKey.includes('claude') && !iconKey.includes('code'))) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#D97706"/>
        <path d="M12 4.5l1.6 5 5 1.6-5 1.6-1.6 5-1.6-5-5-1.6 5-1.6 1.6-5z" fill="#FFFBEB"/>
        <circle cx="12" cy="12" r="1.8" fill="#B45309"/>
      </svg>
    );
  }

  if (iconKey.includes('gemini')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#1E1B4B"/>
        <path d="M12 3C12 7.97 7.97 12 3 12C7.97 12 12 16.03 12 21C12 16.03 16.03 12 21 12C16.03 12 12 7.97 12 3Z" fill="url(#geminiGrad)"/>
        <defs>
          <linearGradient id="geminiGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8"/>
            <stop offset="0.5" stopColor="#818CF8"/>
            <stop offset="1" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (iconKey.includes('claude code')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#1C1917"/>
        <path d="M6 8l4 4-4 4M12 16h6" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="8" r="1.5" fill="#F59E0B"/>
      </svg>
    );
  }

  if (iconKey.includes('opencode')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#0284C7"/>
        <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (iconKey.includes('antigravity')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#0B0F19"/>
        <circle cx="12" cy="12" r="7" stroke="url(#agyGrad)" strokeWidth="2"/>
        <path d="M12 5v14M5 12h14" stroke="url(#agyGrad)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="3" fill="#38BDF8"/>
        <defs>
          <linearGradient id="agyGrad" x1="5" y1="5" x2="19" y2="19">
            <stop stopColor="#38BDF8"/>
            <stop offset="1" stopColor="#A855F7"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (iconKey.includes('cursor')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#18181B"/>
        <path d="M6.5 4.5l11 6.5-5.5 1.5-3 5.5-2.5-13.5z" fill="#FAFAFA"/>
        <path d="M12 12.5l4 4" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (iconKey.includes('9router')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#4F46E5"/>
        <circle cx="7" cy="12" r="2.5" fill="#FFFFFF"/>
        <circle cx="17" cy="7" r="2.5" fill="#38BDF8"/>
        <circle cx="17" cy="17" r="2.5" fill="#34D399"/>
        <path d="M9.5 12h3m0 0l2.5-3.5m-2.5 3.5l2.5 3.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  if (iconKey.includes('notebooklm')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <rect width="24" height="24" rx="6" fill="#1E293B"/>
        <rect x="5" y="4" width="14" height="16" rx="2" fill="#4285F4"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2.5" fill="#34A853"/>
      </svg>
    );
  }

  // Fallback Modern Generic Tech Tag Icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="6" fill="#0284C7"/>
      <path d="M8 10l4-4 4 4M8 14l4 4 4-4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
