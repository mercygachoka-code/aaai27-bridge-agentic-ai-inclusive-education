import { motion } from 'framer-motion'

export default function PageHero({ badge, title, subtitle }) {
  return (
    <header className="relative bg-[#243B6B] pt-24 pb-14 sm:pt-32 sm:pb-18 text-white border-b-4 border-[#159A9C]">
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {badge && (
            <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F2B84B] border border-white/20 rounded-full bg-white/10">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-3 tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </header>
  )
}
