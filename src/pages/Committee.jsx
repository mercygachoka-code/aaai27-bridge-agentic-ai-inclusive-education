import { motion } from 'framer-motion'
import { Mail, Building2, MapPin, ExternalLink, Globe } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

const committeeMembers = [
  {
    name: 'Mercy Gachoka',
    affiliation: 'University of Eastern Finland',
    role: 'Lead Organiser & Bridge Co-Chair',
    email: 'mgachoka@uef.fi',
    location: 'Joensuu / Kuopio, Finland',
    initials: 'MG',
    accentColor: 'from-[#159A9C] to-[#0f7a7c]',
    focus: 'AI in Inclusive Education, Special Educational Technologies & Pedagogical Agency'
  },
  {
    name: 'Christianah Titilope Oyewale',
    affiliation: 'Simon Fraser University, Canada',
    role: 'Organiser & Bridge Co-Chair',
    email: 'christianah.oyewale@sfu.ca',
    location: 'British Columbia, Canada',
    initials: 'CO',
    accentColor: 'from-[#243B6B] to-[#1a2d52]',
    focus: 'Human–Computer Interaction, Learning Sciences & Participatory Design'
  },
  {
    name: 'Andrew Kipkebut',
    affiliation: 'Kabarak University',
    role: 'Organiser & Bridge Co-Chair',
    email: 'akipkebut@kabarak.ac.ke',
    location: 'Nakuru, Kenya',
    initials: 'AK',
    accentColor: 'from-[#d9a23a] to-[#F2B84B]',
    focus: 'Low-Resource Computing, Educational Technology & Context-Sensitive Systems'
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
        badge="AAAI-27 Organising Team"
        title="Bridge Committee"
        subtitle="Meet the international interdisciplinary committee leading the Co-Designing Agentic AI Bridge."
      />

      {/* ═══ COMMITTEE MEMBERS ═══ */}
      <section className="py-20 sm:py-28 bg-[#FAFBFD]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <SectionLabel label="Leadership & Coordination" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-indigo-deep tracking-tight mb-4">
                Organising Committee
              </h2>
              <p className="text-warm-gray text-base">
                Bringing together complementary expertise spanning AI, participatory design, and inclusive education across international institutions.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {committeeMembers.map((member, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all card-hover flex flex-col justify-between relative overflow-hidden group">
                  {/* Subtle top card glow */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${member.accentColor}`} />

                  <div>
                    {/* Avatar Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.accentColor} flex items-center justify-center text-white font-display font-bold text-xl shadow-md`}>
                        {member.initials}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-warm-gray-light bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                        AAAI-27
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-teal uppercase tracking-wider block mb-1">
                      {member.role}
                    </span>

                    <h3 className="text-xl font-display font-bold text-indigo-deep mb-2">
                      {member.name}
                    </h3>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2 text-xs sm:text-sm text-warm-gray">
                        <Building2 className="w-4 h-4 text-warm-gray-light shrink-0 mt-0.5" />
                        <span className="font-medium text-indigo-deep/90">{member.affiliation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-warm-gray-light">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{member.location}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-warm-gray leading-relaxed mb-4">
                        <span className="font-semibold text-indigo-deep">Research Domain:</span> {member.focus}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal hover:text-teal-dark transition-colors py-1"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Contact Box */}
          <FadeIn delay={0.3}>
            <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-indigo-deep mb-3">
                Have questions or interested in collaborating?
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-6 max-w-xl mx-auto">
                Reach out directly to our lead bridge organiser for queries regarding paper tracks, demos, sponsorship, or accessibility accommodations.
              </p>
              <a
                href="mailto:mgachoka@uef.fi"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-deep hover:bg-indigo-light text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Lead Organiser (Mercy Gachoka)</span>
              </a>
            </div>
          </FadeIn>

        </div>
      </section>
    </motion.div>
  )
}
