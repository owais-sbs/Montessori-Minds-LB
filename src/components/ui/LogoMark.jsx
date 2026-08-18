/**
 * LogoMark — the circular Montessori Minds badge.
 * Used in the Navbar, Footer, and Hero section.
 *
 * Props:
 *   size      — pixel size of the SVG (default 56)
 *   className — extra Tailwind / CSS classes
 *   variant   — 'badge' (circular with text) or 'mark' (just the arch icon)
 */
export default function LogoMark({ size = 56, className = '', variant = 'badge' }) {
  if (variant === 'mark') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 220"
        width={size}
        height={size * 1.1}
        fill="none"
        aria-label="Montessori Minds logo"
        role="img"
        className={className}
      >
        {/* Main arch */}
        <path
          d="M30 210 L30 105 Q30 20 100 20 Q170 20 170 105 L170 210"
          stroke="#4a5a38"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Left tree — trunk */}
        <line x1="72" y1="210" x2="72" y2="105" stroke="#4a5a38" strokeWidth="6" strokeLinecap="round" />
        {/* Left tree — canopy (rounded top) */}
        <path
          d="M50 115 Q50 60 72 52 Q94 60 94 115"
          stroke="#4a5a38"
          strokeWidth="6"
          fill="none"
          strokeLinejoin="round"
        />
        {/* Left tree — branches */}
        <line x1="72" y1="85" x2="57" y2="73" stroke="#4a5a38" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="72" y1="100" x2="87" y2="88" stroke="#4a5a38" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="72" y1="115" x2="58" y2="104" stroke="#4a5a38" strokeWidth="4.5" strokeLinecap="round" />

        {/* Right small tree — trunk */}
        <line x1="112" y1="210" x2="112" y2="140" stroke="#4a5a38" strokeWidth="5" strokeLinecap="round" />
        {/* Right small tree — round canopy */}
        <circle cx="112" cy="125" r="18" stroke="#4a5a38" strokeWidth="5" fill="none" />

        {/* House */}
        <rect x="130" y="155" width="35" height="55" stroke="#4a5a38" strokeWidth="6" fill="none" strokeLinejoin="round" />
        {/* Roof */}
        <polyline points="125,158 147.5,130 170,158" stroke="#4a5a38" strokeWidth="6" fill="none" strokeLinejoin="round" />
        {/* Keyhole circle */}
        <circle cx="147.5" cy="178" r="7" stroke="#7a5c44" strokeWidth="4" fill="none" />
        {/* Keyhole stem */}
        <rect x="144.5" y="185" width="6" height="12" stroke="#7a5c44" strokeWidth="3.5" fill="none" rx="1" />
      </svg>
    )
  }

  // Default: circular badge variant
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      aria-label="Montessori Minds logo"
      role="img"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="94" stroke="#4a5a38" strokeWidth="4" fill="none" />
      <circle cx="100" cy="100" r="86" stroke="#4a5a38" strokeWidth="1.5" fill="none" opacity="0.3" />

      {/* Top text arc — "MONTESSORI MINDS" */}
      <defs>
        <path id="topArc" d="M 20,100 A 80,80 0 0,1 180,100" />
        <path id="bottomArc" d="M 35,115 A 65,65 0 0,0 165,115" />
      </defs>
      <text fontSize="11.5" fontFamily="Inter, sans-serif" fontWeight="600" letterSpacing="3.5" fill="#4a5a38">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">MONTESSORI MINDS</textPath>
      </text>

      {/* Bottom text — "A Preschool" */}
      <text fontSize="11" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="1.5" fill="#7a5c44" fontStyle="italic">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">A Preschool</textPath>
      </text>

      {/* ── Inner arch ── */}
      <path
        d="M52 155 L52 98 Q52 52 100 52 Q148 52 148 98 L148 155"
        stroke="#4a5a38"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Left tree ── */}
      {/* trunk */}
      <line x1="78" y1="155" x2="78" y2="108" stroke="#4a5a38" strokeWidth="4" strokeLinecap="round" />
      {/* canopy arch */}
      <path
        d="M63 112 Q63 72 78 67 Q93 72 93 112"
        stroke="#4a5a38"
        strokeWidth="4"
        fill="none"
        strokeLinejoin="round"
      />
      {/* branches */}
      <line x1="78" y1="90" x2="67" y2="81" stroke="#4a5a38" strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="100" x2="89" y2="91" stroke="#4a5a38" strokeWidth="3" strokeLinecap="round" />
      <line x1="78" y1="110" x2="68" y2="102" stroke="#4a5a38" strokeWidth="3" strokeLinecap="round" />

      {/* ── Right small round tree ── */}
      <line x1="108" y1="155" x2="108" y2="125" stroke="#4a5a38" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="108" cy="113" r="13" stroke="#4a5a38" strokeWidth="3.5" fill="none" />

      {/* ── House ── */}
      <rect x="120" y="132" width="25" height="23" stroke="#4a5a38" strokeWidth="4" fill="none" strokeLinejoin="round" />
      {/* Roof */}
      <polyline points="116,135 132.5,115 149,135" stroke="#4a5a38" strokeWidth="4" fill="none" strokeLinejoin="round" />
      {/* Keyhole */}
      <circle cx="132.5" cy="140" r="4.5" stroke="#7a5c44" strokeWidth="2.5" fill="none" />
      <rect x="130.5" y="144" width="4" height="7" stroke="#7a5c44" strokeWidth="2" fill="none" rx="0.5" />
    </svg>
  )
}
