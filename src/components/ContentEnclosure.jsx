import React from 'react'

/**
 * ContentEnclosure
 * A pure HTML + Tailwind CSS curly bracket layout wrapper `{`.
 *
 * Fixed Architecture:
 * - A single unified flexbox column with identical horizontal width and alignment.
 * - The vertical line connects seamlessly from the top hook, through the center point, to the bottom hook.
 * - No disconnects or step offsets.
 *
 * @param {React.ReactNode} children - Content enclosed within the bracket.
 * @param {string} [title] - Optional title above the enclosed block.
 * @param {string} [subtitle] - Optional subtitle.
 * @param {string} [badge] - Optional badge tag.
 * @param {string} [color='border-[#159A9C]'] - Tailwind border color class.
 * @param {string} [className] - Additional wrapper styling.
 */
export default function ContentEnclosure({
  children,
  title,
  subtitle,
  badge,
  color = 'border-[#159A9C]',
  className = '',
}) {
  return (
    <div className={`relative flex flex-col my-4 ${className}`}>
      {/* Optional Title Header */}
      {(title || badge) && (
        <div className="flex flex-wrap items-center gap-3 mb-5 pl-10 sm:pl-12">
          {badge && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#243B6B]/10 text-[#243B6B]">
              {badge}
            </span>
          )}
          {title && (
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#243B6B]">
              {title}
            </h3>
          )}
          {subtitle && (
            <span className="text-xs text-[#556275] hidden sm:inline">
              — {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Main Enclosure Layout */}
      <div className="relative flex items-stretch">
        
        {/* ═══ CONTINUOUS CURLY BRACKET SPINE ═══ */}
        <div 
          className="relative w-8 shrink-0 select-none pointer-events-none flex flex-col items-end"
          aria-hidden="true"
        >
          {/* UPPER HALF OF CURLY BRACKET */}
          <div className="flex-1 w-full flex flex-col items-end justify-between min-h-[60px]">
            {/* Top Hook: curves from right inwards, dropping into the vertical spine */}
            <div className={`w-5 h-6 border-t-2 border-l-2 ${color} rounded-tl-2xl`} />

            {/* Straight vertical connector */}
            <div className={`flex-1 w-5 border-l-2 ${color}`} />

            {/* Upper half of center spike: curves out to the left */}
            <div className={`w-5 h-6 border-b-2 border-l-2 ${color} rounded-bl-2xl`} />
          </div>

          {/* LOWER HALF OF CURLY BRACKET */}
          <div className="flex-1 w-full flex flex-col items-end justify-between min-h-[60px]">
            {/* Lower half of center spike: curves back in from the left */}
            <div className={`w-5 h-6 border-t-2 border-l-2 ${color} rounded-tl-2xl`} />

            {/* Straight vertical connector */}
            <div className={`flex-1 w-5 border-l-2 ${color}`} />

            {/* Bottom Hook: curves from the vertical spine inwards to the right */}
            <div className={`w-5 h-6 border-b-2 border-l-2 ${color} rounded-bl-2xl`} />
          </div>
        </div>

        {/* ═══ ENCLOSED VARIABLE CONTENT ═══ */}
        <div className="flex-1 pl-4 sm:pl-6 py-1">
          {children}
        </div>

      </div>
    </div>
  )
}
