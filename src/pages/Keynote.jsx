import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn } from '../components/Motion'
import { Card } from '../components/ui/card'

export default function Keynote() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <PageHero
        badge="Bridge 21"
        title="Keynote"
        subtitle="Keynote speaker and panelists for AAAI-27 Bridge 21"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <Card className="max-w-2xl mx-auto p-8 sm:p-12 text-center border-gray-200 bg-[#FAFBFD]">
              <SectionLabel label="Coming Soon" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-3">
                Keynote &amp; Panelists
              </h2>
              <p className="text-[#556275] leading-relaxed">
                Speaker and panelist details will be added here.
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
