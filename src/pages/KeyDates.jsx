import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn } from '../components/Motion'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
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

          <FadeIn delay={0.2}>
            <Card className="mt-10 p-8 sm:p-12 border-gray-200 bg-[#FAFBFD]">
              <SectionLabel label="Conference Registration" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#243B6B] mb-4">
                Register
              </h2>
              <p className="text-[#556275] text-base leading-relaxed mb-6">
                Registration for AAAI-27 is managed centrally by AAAI.
              </p>
              <a
                href="https://aaai.org/conference/aaai/aaai-27/aaai-27-registration/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-2">
                  <span>AAAI-27 Registration &amp; More Information</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </Card>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
