import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn } from '../components/Motion'
import { Badge } from '../components/ui/badge'
import { Card } from '../components/ui/card'

const dates = [
  { label: 'Submission deadline', value: '1st December 2026', status: 'AoE', isHighlight: false },
  { label: 'Notification of Acceptance', value: '13th December 2026', status: 'AoE', isHighlight: false },
  { label: 'Camera-ready', value: '16th December 2026', status: 'AoE', isHighlight: false },
  { label: 'Bridge date', value: '16–17 February 2027.', status: 'Montréal, Canada', isHighlight: true },
]

export default function KeyDates() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <PageHero
        badge="Bridge Program"
        title="Key Dates"
        subtitle="Important deadlines and event dates for AAAI-27 Bridge Program"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10">
            <FadeIn>
              <SectionLabel label="Timeline" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-2">
                Key Dates (AoE)
              </h2>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dates.map((date, idx) => (
              <FadeIn key={date.label} delay={idx * 0.08}>
                <Card
                  className={`h-full p-5 border ${
                    date.isHighlight
                      ? 'bg-[#243B6B] text-white border-[#243B6B]'
                      : 'bg-[#FAFBFD] border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Calendar className={`w-4 h-4 ${date.isHighlight ? 'text-[#F2B84B]' : 'text-[#159A9C]'}`} />
                    <Badge variant={date.isHighlight ? 'gold' : 'outline'} className="text-[10px]">
                      {date.status}
                    </Badge>
                  </div>

                  <h3 className={`font-semibold text-xs mb-1 ${date.isHighlight ? 'text-white/80' : 'text-[#556275]'}`}>
                    {date.label}
                  </h3>

                  <div className={`text-base sm:text-lg font-bold font-display mb-1 ${date.isHighlight ? 'text-[#F2B84B]' : 'text-[#243B6B]'}`}>
                    {date.value}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
