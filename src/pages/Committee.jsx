import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
import { Card } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const committeeMembers = [
  {
    name: 'Mercy Gachoka',
    affiliation: 'University of Eastern, Finland',
    email: 'mgachoka@uef.fi',
    photo: '/committee/mercy-gachoka.png',
    initials: 'MG',
  },
  {
    name: 'Christianah Titilope Oyewale',
    affiliation: 'Simon Fraser University, Canada',
    email: 'christianah.oyewale@sfu.ca',
    photo: '/committee/christianah-oyewale.png',
    initials: 'CO',
  },
  {
    name: 'Andrew Kipkebut',
    affiliation: 'Kabarak University, Kenya',
    email: 'akipkebut@kabarak.ac.ke',
    photo: '/committee/andrew-kipkebut.png',
    initials: 'AK',
  },
]

export default function Committee() {
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
        title="Bridge Committee"
        subtitle="Organising committee for AAAI-27 Bridge 21"
      />

      {/* ═══ COMMITTEE MEMBERS ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <FadeIn>
              <SectionLabel label="Organisers" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-2">
                Bridge Committee
              </h2>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
            {committeeMembers.map((member, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full bg-[#FAFBFD] overflow-hidden border-gray-200 card-hover flex flex-col justify-between">
                  <div>
                    <div className="relative mx-auto mt-6 h-52 w-52 shrink-0 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
                      <span className="text-4xl font-display font-bold text-white/90" aria-hidden="true">
                        {member.initials}
                      </span>
                      <img
                        src={member.photo}
                        alt={`${member.name} portrait`}
                        className="absolute inset-0 h-full w-full object-contain object-center"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>

                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="text-[10px]">
                          Bridge 21
                        </Badge>
                      </div>

                      <h3 className="text-lg font-bold text-[#243B6B] mb-1 font-display">
                        {member.name}
                      </h3>

                      <p className="text-xs text-[#556275] mb-4">
                        {member.affiliation}
                      </p>
                    </div>
                  </div>

                  <div className="mx-6 pt-3 pb-6 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#159A9C] hover:text-[#0F7577] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>
    </motion.div>
  )
}
