import { motion } from 'framer-motion'

export default function SectionLabel({ label, className = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal mb-3 ${className}`}
    >
      <span className="w-8 h-0.5 bg-gradient-to-r from-teal to-teal/30 rounded-full" />
      {label}
    </motion.span>
  )
}
