// ============================================
// HOUSE OF RESTORATION - BRAND ICONS
// Custom SVG icons for brand symbols
// ============================================

import { colors } from '../../styles/designSystem';

// ============================================
// ICON PROPS
// ============================================

interface IconProps {
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

// ============================================
// LION ICON (Symbol of Strength)
// ============================================

export const LionIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.lionGold[600],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Lion head silhouette */}
      <path
        d="M12 2C10.5 2 9 3.5 9 5C9 6.5 10 8 11 9C12 10 13 10 14 9C15 8 16 6.5 16 5C16 3.5 14.5 2 12 2Z"
        fill={color}
      />
      <path
        d="M12 5C12 5 13 6 14 6C15 6 16 5 16 5C16 5 15 7 14 8C13 9 12 8 12 8C12 8 11 9 10 8C9 7 8 6 8 6C8 6 9 5 10 5C11 5 12 5 12 5Z"
        fill={color}
        opacity={0.8}
      />
      <path
        d="M7 10C7 10 8 8 9 9C10 10 11 12 11 12C11 12 12 10 13 11C14 12 15 10 16 9C17 8 18 10 18 10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="14" r="1" fill={color} />
      <circle cx="14" cy="14" r="1" fill={color} />
      <path
        d="M10 16C10 16 11 15 12 15C13 15 14 16 14 16"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      {/* Mane */}
      <path
        d="M6 7C6 7 7 5 8 6C9 7 10 8 10 9C10 10 9 11 8 11C7 11 6 10 6 9C6 8 7 7 7 7"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 7C18 7 17 5 16 6C15 7 14 8 14 9C14 10 15 11 16 11C17 11 18 10 18 9C18 8 17 7 17 7"
        stroke={color}
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// RIVER ICON (Symbol of Renewal)
// ============================================

export const RiverIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.healingGreen[700],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* River flow */}
      <path
        d="M2 12C2 12 4 8 6 10C8 12 6 16 4 18C2 20 2 12 2 12Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6C8 6 10 10 12 8C14 6 16 10 18 8C20 6 22 10 22 12C22 14 20 18 18 20C16 22 12 18 12 18C12 18 10 14 8 16C6 18 4 16 4 14C4 12 6 8 8 6Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14C6 14 8 18 10 16C12 14 14 18 16 16C18 14 20 18 20 16"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Water droplets */}
      <circle cx="4" cy="10" r="0.8" fill={color} />
      <circle cx="10" cy="16" r="0.6" fill={color} />
      <circle cx="16" cy="12" r="0.7" fill={color} />
      <circle cx="20" cy="18" r="0.5" fill={color} />
    </svg>
  );
};

// ============================================
// HEALING HANDS ICON
// ============================================

export const HandsIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.royalBlue[600],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Left hand */}
      <path
        d="M6 10C6 10 7 8 8 9C9 10 10 11 10 12C10 13 9 14 8 14C7 14 6 13 6 12C6 11 7 10 6 10Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 12C5 12 4 13 4 14C4 15 5 16 6 16C7 16 8 15 8 14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9C8 9 9 7 10 8C11 9 12 10 12 9"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right hand */}
      <path
        d="M18 10C18 10 17 8 16 9C15 10 14 11 14 12C14 13 15 14 16 14C17 14 18 13 18 12C18 11 17 10 18 10Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 12C19 12 20 13 20 14C20 15 19 16 18 16C17 16 16 15 16 14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9C16 9 15 7 14 8C13 9 12 10 12 9"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Healing energy between hands */}
      <path
        d="M10 12C11 11 13 11 14 12"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.8}
      />
      <path
        d="M10 13C11 12 13 12 14 13"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        opacity={0.6}
      />
      <circle cx="12" cy="12" r="1" fill={color} />
    </svg>
  );
};

// ============================================
// RESTORATION CIRCLE ICON
// ============================================

export const CircleIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.ancestralRed[600],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={1.5}
        opacity={0.3}
      />
      
      {/* Inner circle */}
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke={color}
        strokeWidth={1.5}
        opacity={0.6}
      />
      
      {/* Center circle */}
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke={color}
        strokeWidth={2}
      />
      
      {/* Connection points */}
      <circle cx="12" cy="2" r="1" fill={color} />
      <circle cx="22" cy="12" r="1" fill={color} />
      <circle cx="12" cy="22" r="1" fill={color} />
      <circle cx="2" cy="12" r="1" fill={color} />
      
      {/* Diagonal connection points */}
      <circle cx="6" cy="6" r="0.8" fill={color} opacity={0.8} />
      <circle cx="18" cy="6" r="0.8" fill={color} opacity={0.8} />
      <circle cx="6" cy="18" r="0.8" fill={color} opacity={0.8} />
      <circle cx="18" cy="18" r="0.8" fill={color} opacity={0.8} />
      
      {/* Connection lines */}
      <path
        d="M12 2L6 6"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M12 2L18 6"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M22 12L18 6"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.5}
      />
      <path
        d="M22 12L18 18"
        stroke={color}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.5}
      />
    </svg>
  );
};

// ============================================
// WHATSAPP ICON
// ============================================

export const WhatsAppIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.healingGreen[700],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.144-.173.179-.347.267-.644.267-.297 0-.694-.089-.94-.382-.245-.293-.543-1.144-.607-1.57-.064-.427-.173-1.044-.382-1.341-.209-.297-.507-.524-.914-.524-.407 0-.834.128-1.133.372-.298.244-1.133.593-1.517.742-.384.149-.914.347-1.57.411-.657.064-1.414.173-2.141.173-.727 0-1.654-.173-2.342-.519-.688-.346-1.984-1.033-2.582-1.517-.598-.484-1.264-.914-1.412-1.206-.149-.293-.347-.382-.519-.589-.173-.209-.262-.347-.411-.598-.149-.251-.173-.411-.297-.688-.124-.277-.198-.484-.347-.818-.149-.334-.173-.627-.208-.885-.035-.258-.052-.49-.052-.765 0-.276.017-.535.052-.765.035-.258.061-.49.173-.885.149-.334.223-.542.347-.818.125-.277.209-.484.297-.688.149-.251.326-.511.411-.598.169-.209.367-.382.519-.589.148-.293.814-.723 1.412-1.206.608-.484 1.274-.914 2.582-1.517.688-.346 1.615-.519 2.342-.519.727 0 1.654.173 2.141.173.657.064 1.414.173 1.57.411.384.149 1.219.598 1.517.742.299.244.726.372 1.133.372.407 0 .814-.227.914-.524.186-.337.295-.855.382-1.341.064-.427.362-1.279.607-1.57.245-.293.443-.481.644-.481.297 0 .594.088.891.382.297.295.519.768.607 1.145.088.377.306.967.671 1.246.052.049.103.098.154.147.364.364.813.913 1.012 1.207.198.294.758.936 1.166 1.23.408.294.936.765 1.279 1.144.343.379.802.958 1.065 1.25.262.292.384.565.592.911.208.346.168.693.347 1.248.535.556.387 1.221.477 1.812.09.591.314 1.507.511 1.841.197.334.768.958 1.133 1.144.365.186.936.612 1.166.818.229.206.726.644 1.033.891.307.247.565.427.892.693.327.266.49.408.814.693.324.285.324.49.411.84.411.35 0 .632-.088.891-.382.259-.294.389-.512.593-.891.204-.379.154-.678.223-.967.069-.289.01-.484-.058-.714"
        fill={color}
      />
    </svg>
  );
};

// ============================================
// USER AVATAR ICON
// ============================================

export const UserIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth={1.5} />
      <path
        d="M12 14C14.2091 14 16 15.7909 16 18C16 18.7449 15.8529 19.4417 15.5845 20.0052C15.3161 20.5687 14.9447 21.0239 14.4942 21.3416C14.0437 21.6594 13.5272 21.8335 13.0001 21.8335C12.473 21.8335 11.9565 21.6594 11.506 21.3416C11.0555 21.0239 10.6841 20.5687 10.4157 20.0052C10.1473 19.4417 10 18.7449 10 18C10 15.7909 11.7909 14 14 14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18C8 18 9 16 10 17C11 18 12 17 12 17C12 17 13 18 14 17C15 16 16 18 16 18"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// CALENDAR ICON
// ============================================

export const CalendarIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={color} strokeWidth={1.5} />
      <path d="M16 2V4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M8 2V4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <path d="M3 10H21" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <circle cx="9" cy="14" r="1" fill={color} />
      <circle cx="15" cy="14" r="1" fill={color} />
      <circle cx="9" cy="18" r="1" fill={color} />
      <circle cx="15" cy="18" r="1" fill={color} />
    </svg>
  );
};

// ============================================
// CLOCK ICON
// ============================================

export const ClockIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.5} />
      <path d="M12 6V12" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <path d="M12 12L16 16" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <circle cx="12" cy="12" r="2" fill={color} />
    </svg>
  );
};

// ============================================
// MICROPHONE ICON (for voice notes)
// ============================================

export const MicrophoneIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.healingGreen[700],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19V23"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 23H16"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="2" fill={color} />
    </svg>
  );
};

// ============================================
// PLAY ICON (for audio/video)
// ============================================

export const PlayIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.lionGold[600],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M8 5V19L18 12L8 5Z"
        fill={color}
        stroke={color}
        strokeWidth={0.5}
      />
    </svg>
  );
};

// ============================================
// PAUSE ICON
// ============================================

export const PauseIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.lionGold[600],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <rect x="6" y="5" width="4" height="14" fill={color} />
      <rect x="14" y="5" width="4" height="14" fill={color} />
    </svg>
  );
};

// ============================================
// CHECK ICON
// ============================================

export const CheckIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.healingGreen[700],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M5 12.5L9 16.5L18 7.5"
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// X (CLOSE) ICON
// ============================================

export const CloseIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.ancestralRed[600],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// CHEVRON RIGHT ICON
// ============================================

export const ChevronRightIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// CHEVRON LEFT ICON
// ============================================

export const ChevronLeftIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// CHEVRON DOWN ICON
// ============================================

export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// CHEVRON UP ICON
// ============================================

export const ChevronUpIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M18 15L12 9L6 15"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// MORE VERTICAL ICON (Kebab)
// ============================================

export const MoreVerticalIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <circle cx="12" cy="6" r="1.5" fill={color} />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="18" r="1.5" fill={color} />
    </svg>
  );
};

// ============================================
// SEARCH ICON
// ============================================

export const SearchIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <circle cx="11" cy="11" r="8" stroke={color} strokeWidth={1.5} />
      <path d="M21 21L16 16" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
};

// ============================================
// FILTER ICON
// ============================================

export const FilterIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M22 4H2L10 12.5V20L14 18V12.5L22 4Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5L14 12.5"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// SETTINGS ICON
// ============================================

export const SettingsIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth={1.5} />
      <path
        d="M19.4 15.572L16.572 19.4L12 16.828L7.428 19.4L4.6 15.572L7.428 12L4.6 8.428L7.428 4.8L12 7.172L16.572 4.8L19.4 8.428L16.572 12L19.4 15.572Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19.4" cy="15.572" r="0.8" fill={color} />
      <circle cx="16.572" cy="19.4" r="0.8" fill={color} />
      <circle cx="12" cy="16.828" r="0.8" fill={color} />
      <circle cx="7.428" cy="19.4" r="0.8" fill={color} />
      <circle cx="4.6" cy="15.572" r="0.8" fill={color} />
      <circle cx="7.428" cy="12" r="0.8" fill={color} />
      <circle cx="4.6" cy="8.428" r="0.8" fill={color} />
      <circle cx="7.428" cy="4.8" r="0.8" fill={color} />
      <circle cx="12" cy="7.172" r="0.8" fill={color} />
      <circle cx="16.572" cy="4.8" r="0.8" fill={color} />
      <circle cx="19.4" cy="8.428" r="0.8" fill={color} />
      <circle cx="16.572" cy="12" r="0.8" fill={color} />
    </svg>
  );
};

// ============================================
// BELL ICON (Notifications)
// ============================================

export const BellIcon: React.FC<IconProps> = ({
  size = 24,
  color = colors.riverMidnight[900],
  opacity = 1,
  hasNotification = false,
  className,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity, ...style }}
    >
      <path
        d="M9 20H15C15 21.1046 14.1046 22 13 22C11.8954 22 11 21.1046 11 20"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14V20H17V14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14C7 9.58172 9.58172 7 12 7C14.4183 7 17 9.58172 17 14"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {hasNotification && (
        <circle cx="17" cy="10" r="2" fill={colors.ancestralRed[600]} />
      )}
    </svg>
  );
};

// ============================================
// EXPORT ALL ICONS
// ============================================

export {
  LionIcon as Lion,
  RiverIcon as River,
  HandsIcon as HealingHands,
  CircleIcon as RestorationCircle,
  WhatsAppIcon as WhatsApp,
  UserIcon as User,
  CalendarIcon as Calendar,
  ClockIcon as Clock,
  MicrophoneIcon as Microphone,
  PlayIcon as Play,
  PauseIcon as Pause,
  CheckIcon as Check,
  CloseIcon as Close,
  ChevronRightIcon as ChevronRight,
  ChevronLeftIcon as ChevronLeft,
  ChevronDownIcon as ChevronDown,
  ChevronUpIcon as ChevronUp,
  MoreVerticalIcon as MoreVertical,
  SearchIcon as Search,
  FilterIcon as Filter,
  SettingsIcon as Settings,
  BellIcon as Bell,
};
