import React from "react";

type IconProps = {
  className?: string;
  size?: number;
};

function createIcon(path: React.ReactNode, viewBox = "0 0 24 24") {
  return function Icon({ className = "", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        {path}
      </svg>
    );
  };
}

function createFilledIcon(path: React.ReactNode, viewBox = "0 0 24 24") {
  return function Icon({ className = "", size = 24 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        fill="currentColor"
        className={className}
      >
        {path}
      </svg>
    );
  };
}

// Tool icons
export const SparklesIcon = createIcon(
  <>
    <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    <path d="M18 2l.5 1.5L20 4l-1.5.5L18 6l-.5-1.5L16 4l1.5-.5L18 2z" />
  </>
);

export const TextAaIcon = createIcon(
  <>
    <path d="M3 20l5.5-16h3L17 20" />
    <path d="M6.5 12h7" />
    <path d="M17.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
    <path d="M21 17v3" />
  </>
);

export const HashIcon = createIcon(
  <>
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </>
);

export const LayersIcon = createIcon(
  <>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </>
);

export const ListBulletIcon = createIcon(
  <>
    <line x1="9" y1="6" x2="20" y2="6" />
    <line x1="9" y1="12" x2="20" y2="12" />
    <line x1="9" y1="18" x2="20" y2="18" />
    <circle cx="4.5" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="4.5" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="4.5" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </>
);

// General UI icons
export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </>
);

export const MenuIcon = createIcon(
  <>
    <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2.5" />
    <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2.5" />
    <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2.5" />
  </>
);

export const CloseIcon = createIcon(
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
);

export const ArrowRightIcon = createIcon(
  <>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </>
);

export const CopyIcon = createIcon(
  <>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </>
);

export const CheckIcon = createIcon(
  <polyline points="20 6 9 17 4 12" />
);

export const HomeIcon = createIcon(
  <>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </>
);

export const ChevronDownIcon = createIcon(
  <polyline points="6 9 12 15 18 9" />
);

export const ChevronRightIcon = createIcon(
  <polyline points="9 18 15 12 9 6" />
);

export const ZapIcon = createIcon(
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
);

export const ShieldIcon = createIcon(
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
);

export const GlobeIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </>
);

export const ClipboardIcon = createIcon(
  <>
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
  </>
);

export const PasteIcon = createIcon(
  <>
    <path d="M16 4h2a2 2 0 012 2v1" />
    <path d="M6 4H4a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2v-1" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M21 14H11" />
    <path d="M15 10l-4 4 4 4" />
  </>
);

export const WandIcon = createIcon(
  <>
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 11.8l1.4 1.4" />
    <path d="M15 9h.01" />
    <path d="M17.8 6.2l1.4-1.4" />
    <path d="M11 15l-7 7" />
    <path d="M12.2 6.2L10.8 4.8" />
  </>
);

// Icon map for dynamic lookups
export const iconMap: Record<string, React.ComponentType<IconProps>> = {
  sparkles: SparklesIcon,
  textAa: TextAaIcon,
  hash: HashIcon,
  layers: LayersIcon,
  listBullet: ListBulletIcon,
  search: SearchIcon,
  menu: MenuIcon,
  close: CloseIcon,
  arrowRight: ArrowRightIcon,
  copy: CopyIcon,
  check: CheckIcon,
  home: HomeIcon,
  chevronDown: ChevronDownIcon,
  chevronRight: ChevronRightIcon,
  zap: ZapIcon,
  shield: ShieldIcon,
  globe: GlobeIcon,
  clipboard: ClipboardIcon,
  paste: PasteIcon,
  wand: WandIcon
};
