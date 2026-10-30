import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Bot, 
  UserCheck, 
  GraduationCap, 
  Accessibility, 
  MonitorSmartphone, 
  ShieldCheck, 
  Globe2, 
  Users2, 
  Network, 
  Compass, 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight, 
  FileText, 
  Presentation, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  BookOpen
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
import SectionLabel from '../components/SectionLabel'
import SubtleConstellationCanvas from '../components/SubtleConstellationCanvas'

const topics = [
  { 
    icon: Bot, 
    title: 'Agentic AI & Multi-Agent Systems', 
    desc: 'Autonomous coordinated agents facilitating inclusive K–12 classroom contexts.' 
  },
  { 
    icon: UserCheck, 
    title: 'Teacher Agency, Autonomy & Oversight', 
    desc: 'Preserving human authority, intentional pedagogical choices, and supervision.' 
  },
  { 
    icon: GraduationCap, 
    title: 'Differentiated & Personalised Instruction', 
    desc: 'Adaptive instruction addressing distinct learner pacing, cognitive styles, and needs.' 
  },
  { 
    icon: Accessibility, 
    title: 'Accessible Learning Resources for SLDs', 
    desc: 'Curricula and multi-sensory materials tailored for dyslexia, dyscalculia, and dysgraphia.' 
  },
  { 
    icon: MonitorSmartphone, 
    title: 'Human–AI Interaction in Special Education', 
    desc: 'Natural, accessible, and intuitive interfaces designed alongside specialist practitioners.' 
  },
  { 
    icon: Users2, 
    title: 'Teacher-Centred Participatory Co-Design', 
    desc: 'Centering teachers from ideation to evaluation in genuine peer co-creation workflows.' 
  },
  { 
    icon: BookOpen, 
    title: 'Instructional Planning & Classroom Workflows', 
    desc: 'Pragmatic agentic support reducing administrative burdens and lesson preparation friction.' 
  },
  { 
    icon: ShieldCheck, 
    title: 'Responsible, Transparent & Accountable AI', 
    desc: 'Safeguarding ethics, safety, explainability, and pedagogical integrity.' 
  },
  { 
    icon: Globe2, 
    title: 'Context-Sensitive Low-Resource Design', 
    desc: 'Hardware frugality, low-bandwidth resilience, device sharing, and offline sustainability.' 
  },
  { 
    icon: Network, 
    title: 'Interdisciplinary Cross-Domain Synergy', 
    desc: 'Unifying AI, HCI, special education practitioners, and teacher educators.' 
  },
  { 
    icon: Compass, 
    title: 'Empirical Frameworks & Design Principles', 
    desc: 'Establishing sustainable theoretical and practical foundations for inclusive agentic AI.' 
  },
]

const formatItems = [
  { 
    time: '1 hour', 
    title: 'Keynote and Research Presentations', 
    desc: 'Agentic AI capabilities, inclusive education, teacher agency, human–AI interaction, and participatory design.',
    icon: Sparkles,
    badge: 'Inspiration & Foundations'
  },
  { 
    time: '30 mins', 
    title: 'Posters and Demonstrations', 
    desc: 'Emerging research, tools, and applications of agentic AI for supporting learners with Specific Learning Disorders.',
    icon: Presentation,
    badge: 'Hands-on Tools'
  },
  { 
    time: '1h 40 mins', 
    title: 'Interactive Workshop and Co-Design', 
    desc: 'Interdisciplinary activities, group discussions, and presentations exploring teacher-support needs, AI autonomy, human oversight, and research priorities.',
    icon: Users2,
    badge: 'Co-Creation'
  },
  { 
    time: '30 mins', 
    title: 'Panel Discussion', 
    desc: '“How Can Agentic AI Support Inclusive K–12 Education While Preserving Teacher Agency and Human Oversight?”',
    icon: Network,
    badge: 'Synthesis & Future Outlook'
  },
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {/* ═══ HERO WITH THREE.JS CONSTELLATION ═══ */}
      <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-indigo-deep text-white">
        {/* Layered Rich Ambient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#121c33] via-indigo-deep to-[#18294a]" />
          <div className="absolute -top-32 -right-20 w-[620px] h-[620px] rounded-full bg-teal/15 blur-[120px] blob-animate" />
          <div className="absolute bottom-0 -left-20 w-[550px] h-[550px] rounded-full bg-gold/10 blur-[130px] blob-animate-reverse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-indigo-light/20 rounded-full blur-[160px]" />
          
          <div 
            className="absolute inset-0 opacity-[0.035]" 
            style={{ 
              backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
              backgroundSize: '36px 36px' 
            }} 
          />
        </div>

        {/* Interactive Three.js Benign Network Layer */}
        <SubtleConstellationCanvas />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-32 sm:py-36 z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Hero Action */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide text-white mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                <span className="font-bold text-gold">BRIDGE 21</span>
                <span className="text-white/40">|</span>
                <span className="text-white/90">AAAI-27 Bridge Program</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.12] mb-6 tracking-tight"
              >
                AI for Inclusive{' '}
                <span className="relative inline-block text-white">
                  Education
                  <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-gradient-to-r from-teal via-gold to-teal/30 rounded-full" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg sm:text-xl text-white/80 leading-relaxed font-light mb-8 max-w-2xl"
              >
                Co-Designing Agentic AI with K–12 Teachers Supporting Learners with Specific Learning Disorders in Low-Resource Settings
              </motion.p>

              {/* Key Meta Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-white/85 mb-8"
              >
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-teal" />
                  <span>Montréal, Canada</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>16–17 February 2027</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-teal" />
                  <span>Half-Day Program</span>
                </div>
              </motion.div>

              {/* Core Principles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
              >
                {['Human-centred', 'Accessible', 'Collaborative', 'Responsible'].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 text-white/90 shadow-sm"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Link
                  to="/cfp"
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gold hover:bg-gold-light text-indigo-darker font-bold text-sm tracking-wide shadow-lg shadow-gold/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Call for Participation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Explore Overview
                </a>
              </motion.div>
            </div>

            {/* Right Column: Visual Summary Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="relative rounded-3xl p-7 bg-white/[0.07] border border-white/15 backdrop-blur-xl shadow-2xl shadow-indigo-darker/60"
              >
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-0.5">Bridge Spotlight</span>
                    <h2 className="text-lg font-bold text-white">At a Glance</h2>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-teal" />
                    <span className="w-3 h-3 rounded-full bg-gold" />
                    <span className="w-3 h-3 rounded-full bg-white" />
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-3">
                    <Users2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Cross-Disciplinary Hub</h3>
                      <p className="text-xs text-white/70">Connecting AI creators, HCI, and front-line special educators.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-3">
                    <Accessibility className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Specific Learning Disorders</h3>
                      <p className="text-xs text-white/70">Dyslexia, dyscalculia, dysgraphia support structures.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 flex items-start gap-3">
                    <Globe2 className="w-5 h-5 text-teal-light shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Low-Resource Contexts</h3>
                      <p className="text-xs text-white/70">Real-world frugality, accessibility, and offline resilience.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-center">
                  <p className="text-xs font-display italic text-white/70">
                    "Building bridges between AI, teachers and inclusive learning."
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Clean bottom transition wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
          <svg 
            className="relative block w-full h-10 sm:h-14 text-warm-white" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </header>

      {/* ═══ TAGLINE STRIP ═══ */}
      <section className="bg-cream/70 border-b border-gray-200/60 py-6">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-base sm:text-lg text-indigo-deep font-display italic font-medium">
            Building bridges between AI, teachers and inclusive learning.
          </p>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section id="overview" className="py-24 sm:py-28 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <SectionLabel label="About the Bridge" />
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-indigo-deep tracking-tight mb-4">
                Overview
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="relative bg-white rounded-3xl p-8 sm:p-14 shadow-xl shadow-indigo-deep/[0.04] border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-deep via-teal to-gold" />
              
              <div className="space-y-6 text-warm-gray leading-relaxed text-base sm:text-lg pl-3 sm:pl-5">
                <p>
                  The bridge will bring together <strong className="text-indigo-deep font-semibold">AI and multi-agent systems researchers</strong>, <strong className="text-indigo-deep font-semibold">AI in education and HCI specialists</strong>, <strong className="text-indigo-deep font-semibold">special education practitioners</strong>, <strong className="text-indigo-deep font-semibold">teacher educators</strong>, and <strong className="text-indigo-deep font-semibold">early-career researchers</strong>.
                </p>
                <p>
                  Its intended outcomes include identifying shared research challenges, developing preliminary teacher-centred design concepts, and establishing a collaborative research agenda for responsible agentic AI in inclusive education, with particular attention to the contextual realities of low-resource settings.
                </p>
                <p className="pt-2">
                  By connecting technical innovation with pedagogical expertise and inclusive design, the bridge seeks to lay the foundation for a sustained cross-disciplinary community advancing human-centred agentic AI for inclusive K–12 education.
                </p>
              </div>

              {/* Pillars row */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-100 pl-3 sm:pl-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 text-teal">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-deep text-sm mb-1">Pedagogical Agency</h3>
                    <p className="text-xs text-warm-gray leading-normal">Keeping teachers in control while automating routine cognitive loads.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 text-gold-dark">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-deep text-sm mb-1">Tailored for SLDs</h3>
                    <p className="text-xs text-warm-gray leading-normal">Dedicated multi-agent differentiation for diverse learning profiles.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-deep/10 flex items-center justify-center shrink-0 text-indigo-deep">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-indigo-deep text-sm mb-1">Low-Resource Realities</h3>
                    <p className="text-xs text-warm-gray leading-normal">Addressing connectivity, device scarcity, and localized sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TOPICS OF INTEREST ═══ */}
      <section className="py-24 sm:py-28 bg-[#F5F7FB] relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <SectionLabel label="Research Themes" />
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-indigo-deep tracking-tight mb-4">
                Topics of Interest
              </h2>
              <p className="text-warm-gray text-base sm:text-lg">
                Key themes exploring the technical, pedagogical, methodological, and practical dimensions of inclusive agentic AI:
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, idx) => {
              const IconComp = t.icon
              return (
                <StaggerItem key={idx}>
                  <div className="h-full bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal/30 card-hover flex flex-col justify-between group">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-indigo-deep/[0.05] group-hover:bg-teal/[0.1] text-indigo-deep group-hover:text-teal flex items-center justify-center mb-5 transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold text-indigo-deep text-base mb-2 group-hover:text-teal transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore research scope</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FORMAT OF BRIDGE ═══ */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <FadeIn>
              <SectionLabel label="Event Structure" />
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-indigo-deep tracking-tight mb-4">
                Format of Bridge
              </h2>
              <p className="text-warm-gray text-base sm:text-lg">
                The bridge will run as an engaging <strong className="text-indigo-deep font-semibold">half-day collaborative program</strong> at AAAI-27:
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {formatItems.map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="h-full bg-[#FAFBFD] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-deep/5 text-indigo-deep font-mono font-bold text-xs">
                          <Clock className="w-3 h-3 text-teal" />
                          {item.time}
                        </span>
                        <span className="text-[11px] font-semibold text-teal-dark bg-teal/10 px-2.5 py-0.5 rounded-md">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-indigo-deep mb-3 font-display">
                        {item.title}
                      </h3>
                      <p className="text-sm text-warm-gray leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs text-indigo-deep font-medium">
                      <ItemIcon className="w-4 h-4 text-gold-dark" />
                      <span>Interactive Half-Day Segment</span>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ ATTEND ═══ */}
      <section className="py-20 sm:py-24 bg-cream/70">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-lg shadow-indigo-deep/[0.03] border border-gray-100">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4 text-center lg:text-left">
                  <div className="inline-block p-4 rounded-2xl bg-indigo-deep/5 mb-4">
                    <Users2 className="w-10 h-10 text-indigo-deep" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-indigo-deep mb-2">Attend Bridge 21</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-indigo-deep text-xs font-bold uppercase tracking-wider">
                    Limited On-Site Capacity
                  </div>
                </div>

                <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-10 space-y-4 text-warm-gray text-base leading-relaxed">
                  <p>
                    The bridge will host <strong className="text-indigo-deep font-semibold">30–50 participants</strong>. Attendance is open to AI researchers, educators, K–12 and special education teachers, HCI researchers, accessibility practitioners, early-career researchers, students, and other stakeholders interested in inclusive education and agentic AI.
                  </p>
                  <p>
                    On-site space is limited to encourage active participation, interdisciplinary discussion, and community-building.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/schedule"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                    >
                      <span>Check the Half-Day Program Schedule</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SUBMIT & REGISTER DUAL ACTION ═══ */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Submit Card */}
            <FadeIn delay={0.1}>
              <div className="h-full bg-gradient-to-br from-[#1a2d52] to-indigo-deep text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold mb-6">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold block mb-2">Submissions Open</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                    Call for Participation
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-8">
                    We invite submission of short papers, position statements, posters, and demonstrations exploring technical, pedagogical, methodological, and practical dimensions of agentic AI for supporting learners with SLDs.
                  </p>
                </div>

                <div>
                  <Link
                    to="/cfp"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-light text-indigo-darker font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98]"
                  >
                    <span>View Submission Guidelines</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Register Card */}
            <FadeIn delay={0.2}>
              <div className="h-full bg-[#FAFBFD] rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-teal block mb-2">Central Registration</span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-indigo-deep mb-4">
                    Register with AAAI-27
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-8">
                    Registration for AAAI-27 is managed centrally by AAAI. Access full details, main conference pass categories, and workshop/bridge credentials on the official AAAI site.
                  </p>
                </div>

                <div>
                  <a
                    href="https://aaai.org/conference/aaai/aaai-27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-deep hover:bg-indigo-light text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98]"
                  >
                    <span>AAAI-27 Registration & More Information</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </motion.div>
  )
}
