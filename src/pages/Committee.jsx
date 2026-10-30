import { motion } from 'framer-motion'
import { Mail, Building2, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

const committeeMembers = [
  {
    name: 'Mercy Gachoka',
    affiliation: 'University of Eastern Finland',
    email: 'mgachoka@uef.fi',
    initials: 'MG',
    accentBg: 'bg-[#159A9C]',
  },
  {
    name: 'Christianah Titilope Oyewale',
    affiliation: 'Simon Fraser University, Canada',
    email: 'christianah.oyewale@sfu.ca',
    initials: 'CO',
    accentBg: 'bg-[#243B6B]',
  },
  {
    name: 'Andrew Kipkebut',
    affiliation: 'Kabarak University',
    email: 'akipkebut@kabarak.ac.ke',
    initials: 'AK',
    accentBg: 'bg-[#D49C35]',
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

          {/* Cards format */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12">
            {committeeMembers.map((member, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full bg-[#FAFBFD] rounded-xl p-6 border border-gray-200 card-hover flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${member.accentBg} flex items-center justify-center text-white font-bold text-base`}>
                        {member.initials}
                      </div>
                      <span className="text-[10px] font-mono text-[#8E9BAE] uppercase">Bridge 21</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#243B6B] mb-1 font-display">
                      {member.name}
                    </h3>

                    <p className="text-xs text-[#556275] mb-4">
                      {member.affiliation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#159A9C] hover:text-[#0F7577] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Clean Academic Table Format */}
          <FadeIn delay={0.2}>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm mt-8">
              <div className="bg-[#F4F6FA] px-6 py-3 border-b border-gray-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#243B6B]">Committee Directory</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAFBFD] border-b border-gray-200 text-[#556275] font-semibold">
                    <tr>
                      <th className="py-3 px-6">Name</th>
                      <th className="py-3 px-6">Affiliation</th>
                      <th className="py-3 px-6">Email</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {committeeMembers.map((m, i) => (
                      <tr key={i} className="hover:bg-[#FAFBFD]">
                        <td className="py-3.5 px-6 font-semibold text-[#243B6B]">{m.name}</td>
                        <td className="py-3.5 px-6 text-[#556275]">{m.affiliation}</td>
                        <td className="py-3.5 px-6">
                          <a href={`mailto:${m.email}`} className="text-[#159A9C] hover:underline font-medium">
                            {m.email}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>
    </motion.div>
  )
}
