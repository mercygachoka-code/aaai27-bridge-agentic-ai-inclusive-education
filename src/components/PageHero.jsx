import { motion } from 'framer-motion'

export default function PageHero({ badge, title, subtitle }) {
  return (
    <header className="relative overflow-hidden bg-indigo-deep pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Organic shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal/8 blob-animate" />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-gold/6 blob-animate-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="inline-block mb-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold border border-gold/30 rounded-full bg-gold/5">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-warm-white to-transparent" />
    </header>
  )
}
