import React from 'react'

/**
 * ContentEnclosure
 * A pure HTML + Tailwind CSS curly bracket layout wrapper `{`.
 *
 * Requirements met:
 * 1. Continuous vertical left border line matching dynamic height.
 * 2. Top and bottom curve inward gracefully (rounded-tl-2xl / rounded-bl-2xl).
 * 3. Exact ornamental outward center spike pointing left (`{`), built with HTML + Tailwind.
 * 4. Completely free of raw SVGs or images, perfectly responsive and glitch-free.
 *
 * @param {React.ReactNode} children - Variable content enclosed within the bracket.
 * @param {string} [title] - Optional title displayed above the enclosed block.
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
          className="relative w-8 sm:w-10 shrink-0 select-none pointer-events-none flex flex-col"
          aria-hidden="true"
        >
          {/* TOP HOOK (curves inward right towards content) */}
          <div className="h-6 w-full relative shrink-0">
            <div className={`absolute top-0 right-0 w-5 h-6 border-t-2 border-l-2 ${color} rounded-tl-2xl`} />
          </div>

          {/* TOP VERTICAL RUN (connecting top hook to center spike) */}
          <div className="flex-1 w-full relative min-h-[20px]">
            <div className={`absolute top-0 bottom-0 right-0 w-0 border-l-2 ${color}`} />
          </div>

          {/* CENTER ORNAMENTAL OUTWARD SPIKE ({) */}
          <div className="relative h-12 w-full shrink-0">
            {/* Upper flare curving outward to the left */}
            <div className={`absolute top-0 right-0 w-4 h-6 border-b-2 border-r-2 ${color} rounded-br-2xl`} />
            {/* Lower flare curving back inward to the right */}
            <div className={`absolute bottom-0 right-0 w-4 h-6 border-t-2 border-r-2 ${color} rounded-tr-2xl`} />
          </div>

          {/* BOTTOM VERTICAL RUN (connecting center spike to bottom hook) */}
          <div className="flex-1 w-full relative min-h-[20px]">
            <div className={`absolute top-0 bottom-0 right-0 w-0 border-l-2 ${color}`} />
          </div>

          {/* BOTTOM HOOK (curves inward right towards content) */}
          <div className="h-6 w-full relative shrink-0">
            <div className={`absolute bottom-0 right-0 w-5 h-6 border-b-2 border-l-2 ${color} rounded-bl-2xl`} />
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
