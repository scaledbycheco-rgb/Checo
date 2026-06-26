export default function JncLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JNC Mechanical Services"
    >
      {/* Shield/diamond outer border — teal */}
      <path
        d="M50 4 L88 22 L88 62 L50 106 L12 62 L12 22 Z"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="4"
      />
      {/* Shield inner fill */}
      <path
        d="M50 12 L82 28 L82 60 L50 98 L18 60 L18 28 Z"
        fill="#0a1020"
      />
      {/* J letter — orange */}
      <text
        x="22"
        y="70"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill="#f97316"
        letterSpacing="-2"
      >J</text>
      {/* N letter — teal, offset behind */}
      <text
        x="34"
        y="68"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill="#22d3ee"
        opacity="0.85"
        letterSpacing="-2"
      >N</text>
      {/* C letter — orange, front */}
      <text
        x="55"
        y="66"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill="#f97316"
        opacity="0.9"
        letterSpacing="-2"
      >C</text>
    </svg>
  );
}
