import { motion } from 'framer-motion'
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  Users, 
  AlertCircle,
  Clock,
  ArrowRight
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

const submissionTypes = [
  {
    title: 'Short Papers',
    pages: '2–4 pages',
    desc: 'Original, focused research contributions, empirical results, or novel technical methodologies.',
    badge: 'Research'
  },
  {
    title: 'Position Statements',
    pages: '2–5 pages',
    desc: 'Thought-provoking perspectives, conceptual frameworks, critical challenges, or ethical reflections.',
    badge: 'Perspective'
  },
  {
    title: 'Posters',
    pages: 'Extended Abstract',
    desc: 'Late-breaking work, preliminary findings, work-in-progress, or early-career research designs.',
    badge: 'Interactive'
  },
  {
    title: 'Demonstrations',
    pages: 'System Overview',
    desc: 'Interactive prototypes, accessible tools, agentic workflows, or educational technology demos.',
    badge: 'Systems'
  },
]

const dates = [
  { label: 'Submission Deadline', value: 'To be announced', status: 'Pending AoE announcement', isHighlight: false },
  { label: 'Author Notification', value: 'To be announced', status: 'Review feedback delivered', isHighlight: false },
  { label: 'Camera-Ready Copy', value: 'To be announced', status: 'Final materials due', isHighlight: false },
  { label: 'Bridge Event Date', value: '16–17 February 2027', status: 'Montréal, Canada (AAAI-27)', isHighlight: true },
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
        badge="AAAI-27 Bridge Program 21"
        title="Call for Participation"
        subtitle="We invite interdisciplinary contributions connecting agentic AI, participatory design, and inclusive K–12 education."
      />

      {/* ═══ INTRODUCTION BANNER ═══ */}
      <section className="py-20 sm:py-24 relative">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="relative bg-white rounded-3xl p-8 sm:p-14 shadow-xl shadow-indigo-deep/[0.04] border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal via-gold to-indigo-deep" />
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 text-teal-dark font-medium text-xs mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interdisciplinary Submissions Welcome</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-indigo-deep mb-6 leading-snug">
                Join our collective mission to bridge human agency and autonomous educational AI.
              </h2>

              <p className="text-warm-gray leading-relaxed text-base sm:text-lg mb-6">
                We invite <strong className="text-indigo-deep font-semibold">Short Papers</strong>, <strong className="text-indigo-deep font-semibold">Position Statements</strong>, <strong className="text-indigo-deep font-semibold">Posters</strong>, and <strong className="text-indigo-deep font-semibold">Demonstrations</strong> exploring the design and application of agentic AI to support inclusive K–12 education. We welcome interdisciplinary contributions from AI, HCI, accessibility, special education, and teacher education, particularly those addressing teacher agency, human oversight, and the needs of learners with Specific Learning Disorders (SLDs) in low-resource settings.
              </p>

              <div className="p-4 rounded-xl bg-cream border border-gray-200/60 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal shrink-0" />
                <span className="text-sm font-semibold text-indigo-deep">
                  All submissions will be rigorously peer-reviewed by the Bridge organising committee.
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SUBMISSION GUIDELINES ═══ */}
      <section className="py-20 sm:py-24 bg-[#F5F7FB]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <FadeIn>
              <SectionLabel label="Author Guidelines" />
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-indigo-deep tracking-tight mb-4">
                Submission Guidelines
              </h2>
              <p className="text-warm-gray text-base sm:text-lg">
                Please review format standards, accepted modalities, and thematic parameters carefully.
              </p>
            </FadeIn>
          </div>

          {/* Submission Types Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {submissionTypes.map((t, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col justify-between card-hover">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-indigo-deep/5 text-indigo-deep">
                        {t.pages}
                      </span>
                      <span className="text-[11px] font-semibold text-teal-dark bg-teal/10 px-2 py-0.5 rounded">
                        {t.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-indigo-deep text-lg mb-2">
                      {t.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Detail Columns */}
          <div className="grid md:grid-cols-3 gap-6">
            
            <FadeIn delay={0.1}>
              <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-deep/5 flex items-center justify-center text-indigo-deep mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-indigo-deep text-base mb-2">AAAI Bridge Format</h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-4">
                  All submissions must strictly adhere to the official AAAI style templates and layout guidelines.
                </p>
                <a
                  href="https://aaai.org/conference/aaai/aaai-27/bridge-program-call-for-proposals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark transition-colors"
                >
                  <span>AAAI-27 Formatting Standards</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-indigo-deep text-base mb-2">Content Scope</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Contributions may include empirical research findings, practitioner reflections, conceptual blueprints, emerging proposals, or visionary position statements that stimulate discussion.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold-dark mb-4">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-indigo-deep text-base mb-2">References Policy</h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  Include relevant scholarly and practice references where necessary. References and bibliographic citations are <strong className="text-indigo-deep font-semibold">excluded</strong> from page limitations.
                </p>
              </div>
            </FadeIn>

          </div>

          {/* EasyChair Notice Box */}
          <FadeIn delay={0.3}>
            <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-warm-gray-light block mb-2">Submission Portal</span>
              <h3 className="text-xl font-bold text-indigo-deep mb-2">EasyChair Management System</h3>
              <p className="text-sm text-warm-gray mb-6">
                Online submission intake will open shortly. Track this page or contact our organizers for immediate notifications.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-warm-gray-light text-sm font-semibold cursor-not-allowed">
                <Clock className="w-4 h-4" />
                <span>EasyChair Submission — Link Coming Soon</span>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ═══ KEY DATES ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <FadeIn>
              <SectionLabel label="Important Milestones" />
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-indigo-deep tracking-tight mb-2">
                Key Dates
              </h2>
              <p className="text-warm-gray text-base">
                All deadlines are standard Anywhere on Earth (AoE) time.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dates.map((d, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div 
                  className={`h-full rounded-2xl p-6 border transition-all ${
                    d.isHighlight 
                      ? 'bg-indigo-deep text-white border-indigo-deep shadow-xl shadow-indigo-deep/20' 
                      : 'bg-[#FAFBFD] border-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Calendar className={`w-5 h-5 ${d.isHighlight ? 'text-gold' : 'text-teal'}`} />
                    <span className={`text-[11px] font-mono uppercase px-2 py-0.5 rounded ${
                      d.isHighlight ? 'bg-white/10 text-gold' : 'bg-gray-100 text-warm-gray'
                    }`}>
                      AoE
                    </span>
                  </div>

                  <h3 className={`font-semibold text-sm mb-1 ${d.isHighlight ? 'text-white/80' : 'text-warm-gray'}`}>
                    {d.label}
                  </h3>

                  <div className={`text-xl font-bold font-display mb-2 ${d.isHighlight ? 'text-gold' : 'text-indigo-deep'}`}>
                    {d.value}
                  </div>

                  <p className={`text-xs ${d.isHighlight ? 'text-white/70' : 'text-warm-gray-light italic'}`}>
                    {d.status}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOPICS CHECKLIST ═══ */}
      <section className="py-20 sm:py-24 bg-[#F5F7FB]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-lg shadow-indigo-deep/[0.03] border border-gray-100">
              <SectionLabel label="Scope of Interest" />
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-indigo-deep mb-8">
                Target Topics for Submissions
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {topicsList.map((topic, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAFBFD] border border-gray-100 flex items-start gap-3 hover:border-teal/30 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-indigo-deep font-medium leading-relaxed">
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
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <FadeIn>
            <div className="w-14 h-14 rounded-2xl bg-indigo-deep text-gold flex items-center justify-center mx-auto mb-6 shadow-md">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-display font-bold text-indigo-deep mb-4">
              Participation & Attendance
            </h2>
            <p className="text-warm-gray text-base sm:text-lg leading-relaxed mb-8">
              Attendance is open to AI researchers, HCI and accessibility specialists, educators, special education practitioners, teacher educators, students, and early-career researchers. On-site space is limited to encourage active discussion and community-building.
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:mgachoka@uef.fi?subject=Bridge%2021%20Inquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-deep hover:bg-indigo-light text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98]"
              >
                <span>Contact Organisers</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </motion.div>
  )
}
