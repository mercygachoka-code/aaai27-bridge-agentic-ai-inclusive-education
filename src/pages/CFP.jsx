import { motion } from 'framer-motion'
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  HelpCircle, 
  Users, 
  Clock,
  ArrowRight
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

const submissionTypes = [
  {
    title: 'Short papers',
    pages: '2–4 pages',
    desc: 'Original, focused research contributions, empirical results, or novel technical methodologies.',
    badge: 'Research'
  },
  {
    title: 'Position statements',
    pages: '2–5 pages',
    desc: 'Thought-provoking perspectives, conceptual frameworks, critical challenges, or ethical reflections.',
    badge: 'Position'
  },
  {
    title: 'Posters',
    pages: 'Emerging work',
    desc: 'Emerging research, tools, and applications of agentic AI for supporting learners with Specific Learning Disorders.',
    badge: 'Interactive'
  },
  {
    title: 'Demonstrations',
    pages: 'Practical tools',
    desc: 'Interactive systems, accessible tools, agentic workflows, or prototype demonstrations.',
    badge: 'Demos'
  },
]

const dates = [
  { label: 'Submission deadline', value: 'To be announced', status: 'Pending AoE announcement', isHighlight: false },
  { label: 'Notification', value: 'To be announced', status: 'Review feedback delivered', isHighlight: false },
  { label: 'Camera-ready', value: 'To be announced', status: 'Final materials due', isHighlight: false },
  { label: 'Bridge date', value: '16–17 February 2027', status: 'Montréal, Canada (AAAI-27)', isHighlight: true },
]

const topicsList = [
  'Agentic AI and multi-agent systems for inclusive education.',
  'Teacher agency, human oversight, and AI autonomy.',
  'AI-supported differentiated instruction and accessible learning resources.',
  'Human–AI interaction and participatory co-design.',
  'Responsible, trustworthy, and ethical AI in education.',
  'AI for learners with dyslexia, dyscalculia, and dysgraphia.',
  'AI implementation in low-resource educational settings.',
  'Accessibility, evaluation, affordability, and sustainability of AI-supported solutions.'
]

export default function CFP() {
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
        title="Call for Participation (CFP)"
        subtitle="We invite Short Papers, Position Statements, Posters, and Demonstrations exploring the design and application of agentic AI to support inclusive K–12 education."
      />

      {/* ═══ INTRODUCTION BANNER ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="bg-[#FAFBFD] rounded-xl p-8 sm:p-12 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#159A9C]" />
              
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#243B6B] mb-4">
                Call for Participation
              </h2>

              <p className="text-[#556275] leading-relaxed text-base sm:text-lg mb-6">
                We invite Short Papers, Position Statements, Posters, and Demonstrations exploring the design and application of agentic AI to support inclusive K–12 education. We welcome interdisciplinary contributions from AI, HCI, accessibility, special education, and teacher education, particularly those addressing teacher agency, human oversight, and the needs of learners with Specific Learning Disorders (SLDs) in low-resource settings.
              </p>

              <div className="p-4 rounded-lg bg-white border border-gray-200 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#159A9C] shrink-0" />
                <span className="text-sm font-semibold text-[#243B6B]">
                  Submissions will be reviewed by the Bridge organising committee.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SUBMISSION GUIDELINES ═══ */}
      <section className="py-16 sm:py-20 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <SectionLabel label="Author Guidelines" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-3">
                Submission Guidelines
              </h2>
            </FadeIn>
          </div>

          {/* Submission Types Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {submissionTypes.map((t, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full bg-white rounded-xl p-6 border border-gray-200 flex flex-col justify-between card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#243B6B]/5 text-[#243B6B]">
                        {t.pages}
                      </span>
                      <span className="text-[11px] font-semibold text-[#159A9C] bg-[#159A9C]/10 px-2 py-0.5 rounded">
                        {t.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#243B6B] text-base mb-2">
                      {t.title}
                    </h3>
                    <p className="text-xs text-[#556275] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Details */}
          <div className="grid md:grid-cols-3 gap-5">
            
            <FadeIn delay={0.1}>
              <div className="h-full bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-[#243B6B]/5 flex items-center justify-center text-[#243B6B] mb-3">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#243B6B] text-sm mb-2">Format</h3>
                <p className="text-xs text-[#556275] leading-relaxed mb-3">
                  AAAI Bridge format.
                </p>
                <a
                  href="https://aaai.org/conference/aaai/aaai-27/bridge-program-call-for-proposals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159A9C] hover:text-[#0F7577] transition-colors"
                >
                  <span>AAAI Bridge Program Guidelines</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-[#159A9C]/10 flex items-center justify-center text-[#159A9C] mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#243B6B] text-sm mb-2">Content</h3>
                <p className="text-xs text-[#556275] leading-relaxed">
                  Contributions may include relevant research findings, practical experiences, design concepts, emerging ideas, or position statements that stimulate discussion and inform the workshop’s research agenda.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="h-full bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-[#F2B84B]/20 flex items-center justify-center text-[#D49C35] mb-3">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#243B6B] text-sm mb-2">References</h3>
                <p className="text-xs text-[#556275] leading-relaxed">
                  Include relevant references where necessary. References are excluded from the page limit.
                </p>
              </div>
            </FadeIn>

          </div>

          {/* Submission Site Card */}
          <FadeIn delay={0.3}>
            <div className="mt-8 bg-white rounded-xl p-8 border border-gray-200 text-center max-w-xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E9BAE] block mb-1">Submission site</span>
              <h3 className="text-lg font-bold text-[#243B6B] mb-2">EasyChair Portal</h3>
              <p className="text-xs text-[#556275] mb-4">
                Submissions will be managed through EasyChair.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 text-[#556275] text-xs font-semibold cursor-not-allowed">
                <Clock className="w-4 h-4" />
                <span>[EasyChair link to be added]</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ═══ KEY DATES ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10">
            <FadeIn>
              <SectionLabel label="AoE Schedule" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-2">
                Key Dates (AoE)
              </h2>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dates.map((d, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <div 
                  className={`h-full rounded-xl p-5 border ${
                    d.isHighlight 
                      ? 'bg-[#243B6B] text-white border-[#243B6B]' 
                      : 'bg-[#FAFBFD] border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Calendar className={`w-4 h-4 ${d.isHighlight ? 'text-[#F2B84B]' : 'text-[#159A9C]'}`} />
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                      d.isHighlight ? 'bg-white/10 text-[#F2B84B]' : 'bg-gray-100 text-[#556275]'
                    }`}>
                      AoE
                    </span>
                  </div>

                  <h3 className={`font-semibold text-xs mb-1 ${d.isHighlight ? 'text-white/80' : 'text-[#556275]'}`}>
                    {d.label}
                  </h3>

                  <div className={`text-base sm:text-lg font-bold font-display mb-1 ${d.isHighlight ? 'text-[#F2B84B]' : 'text-[#243B6B]'}`}>
                    {d.value}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOPICS CHECKLIST ═══ */}
      <section className="py-16 sm:py-20 bg-[#F4F6FA]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="bg-white rounded-xl p-8 sm:p-12 border border-gray-200">
              <SectionLabel label="Topics Covered" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#243B6B] mb-6">
                Topics of Interest
              </h2>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {topicsList.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#FAFBFD] border border-gray-200 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#159A9C] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#243B6B] font-medium leading-relaxed">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ PARTICIPATION CALL ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <div className="w-12 h-12 rounded-xl bg-[#243B6B] text-[#F2B84B] flex items-center justify-center mx-auto mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#243B6B] mb-3">
              Participation
            </h2>
            <p className="text-[#556275] text-sm sm:text-base leading-relaxed mb-6">
              Attendance is open to AI researchers, HCI and accessibility specialists, educators, special education practitioners, teacher educators, students, and early-career researchers. On-site space is limited to encourage active discussion and community-building.
            </p>
            <a
              href="mailto:mgachoka@uef.fi?subject=Bridge%2021%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#243B6B] hover:bg-[#1C2E52] text-white font-bold text-sm tracking-wide transition-all active:scale-[0.98]"
            >
              <span>Contact Organisers</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

    </motion.div>
  )
}
