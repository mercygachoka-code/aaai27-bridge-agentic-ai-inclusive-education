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
    badge: 'Inspiration & Foundations',
    badgeBg: 'bg-[#243B6B] text-white'
  },
  { 
    time: '30 mins', 
    title: 'Posters and Demonstrations', 
    desc: 'Emerging research, tools, and applications of agentic AI for supporting learners with Specific Learning Disorders.',
    icon: Presentation,
    badge: 'Hands-on Tools',
    badgeBg: 'bg-[#159A9C] text-white'
  },
  { 
    time: '1h 40 mins', 
    title: 'Interactive Workshop and Co-Design', 
    desc: 'Interdisciplinary activities, group discussions, and presentations exploring teacher-support needs, AI autonomy, human oversight, and research priorities.',
    icon: Users2,
    badge: 'Co-Creation',
    badgeBg: 'bg-[#F2B84B] text-[#1C2E52]'
  },
  { 
    time: '30 mins', 
    title: 'Panel Discussion', 
    desc: '“How Can Agentic AI Support Inclusive K–12 Education While Preserving Teacher Agency and Human Oversight?”',
    icon: Network,
    badge: 'Synthesis & Future Outlook',
    badgeBg: 'bg-[#243B6B] text-white'
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
      {/* ═══ HERO WITH SOLID ACADEMIC DEEP INDIGO ═══ */}
      <header className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#243B6B] text-white">
        
        {/* Subtle, benign 3D network animation */}
        <SubtleConstellationCanvas />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-28 sm:py-32 z-10 w-full text-center lg:text-left">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Text & Hero Action */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#F2B84B]" />
                <span className="font-bold text-[#F2B84B]">BRIDGE 21</span>
                <span className="text-white/40">|</span>
                <span className="text-white/90">AAAI-27 Bridge Program</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.12] mb-6 tracking-tight"
              >
                AI for Inclusive Education
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/85 leading-relaxed font-light mb-8 max-w-2xl"
              >
                Co-Designing Agentic AI with K–12 Teachers Supporting Learners with Specific Learning Disorders in Low-Resource Settings
              </motion.p>

              {/* Meta details */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-white/90 mb-8"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15">
                  <MapPin className="w-4 h-4 text-[#159A9C]" />
                  <span>Montréal, Canada</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15">
                  <Calendar className="w-4 h-4 text-[#F2B84B]" />
                  <span>16–17 February 2027</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15">
                  <Clock className="w-4 h-4 text-[#159A9C]" />
                  <span>Half-Day Event</span>
                </div>
              </motion.div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
              >
                {['Human-centred', 'Accessible', 'Collaborative', 'Responsible'].map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white"
                  >
                    {pill}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Link
                  to="/cfp"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F2B84B] hover:bg-[#F5C56B] text-[#1C2E52] font-bold text-sm tracking-wide transition-all shadow-md active:scale-[0.98]"
                >
                  <FileText className="w-4 h-4" />
                  <span>Call for Participation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="#overview"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all active:scale-[0.98]"
                >
                  Learn More
                </a>
              </motion.div>
            </div>

            {/* Right Column: Visual Summary Box */}
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="rounded-2xl p-7 bg-[#1C2E52] border border-white/15 shadow-xl"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div>
                    <span className="text-[11px] font-mono text-[#F2B84B] uppercase tracking-wider block">Bridge Overview</span>
                    <h2 className="text-base font-bold text-white">Program Highlights</h2>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#159A9C]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F2B84B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <Users2 className="w-4 h-4 text-[#159A9C] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Cross-Disciplinary Bridge</h3>
                      <p className="text-white/70">Connecting AI scientists, HCI specialists, and special education teachers.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <Accessibility className="w-4 h-4 text-[#F2B84B] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Focus on SLDs</h3>
                      <p className="text-white/70">Addressing dyslexia, dyscalculia, and dysgraphia classroom needs.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <Globe2 className="w-4 h-4 text-[#159A9C] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Low-Resource Realities</h3>
                      <p className="text-white/70">Context-sensitive solutions for bandwidth, hardware, and sustainability constraints.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs font-display italic text-white/80">
                    "Building bridges between AI, teachers and inclusive learning."
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        {/* Clean solid bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#159A9C]" />
      </header>

      {/* ═══ TAGLINE BAR ═══ */}
      <section className="bg-[#F4F6FA] border-b border-gray-200 py-5">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-base sm:text-lg text-[#243B6B] font-display italic font-medium">
            Building bridges between AI, teachers and inclusive learning.
          </p>
        </div>
      </section>

      {/* ═══ OVERVIEW ═══ */}
      <section id="overview" className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10">
            <FadeIn>
              <SectionLabel label="About the Bridge" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-4">
                Overview
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="bg-[#FAFBFD] rounded-xl p-8 sm:p-12 border border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#159A9C]" />
              
              <div className="space-y-5 text-[#556275] leading-relaxed text-base sm:text-lg pl-3 sm:pl-4">
                <p>
                  The bridge will bring together <strong className="text-[#243B6B] font-semibold">AI and multi-agent systems researchers</strong>, <strong className="text-[#243B6B] font-semibold">AI in education and HCI specialists</strong>, <strong className="text-[#243B6B] font-semibold">special education practitioners</strong>, <strong className="text-[#243B6B] font-semibold">teacher educators</strong>, and <strong className="text-[#243B6B] font-semibold">early-career researchers</strong>.
                </p>
                <p>
                  Its intended outcomes include identifying shared research challenges, developing preliminary teacher-centred design concepts, and establishing a collaborative research agenda for responsible agentic AI in inclusive education, with particular attention to the contextual realities of low-resource settings.
                </p>
                <p>
                  By connecting technical innovation with pedagogical expertise and inclusive design, the bridge seeks to lay the foundation for a sustained cross-disciplinary community advancing human-centred agentic AI for inclusive K–12 education.
                </p>
              </div>

              {/* Three Pillars */}
              <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200 pl-3 sm:pl-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#159A9C]/10 flex items-center justify-center shrink-0 text-[#159A9C]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#243B6B] text-sm mb-1">Teacher Agency</h3>
                    <p className="text-xs text-[#556275] leading-normal">Ensuring educators retain decision-making authority and pedagogical direction.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F2B84B]/20 flex items-center justify-center shrink-0 text-[#D49C35]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#243B6B] text-sm mb-1">Tailored for SLDs</h3>
                    <p className="text-xs text-[#556275] leading-normal">Targeting dyslexia, dyscalculia, and dysgraphia learning needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#243B6B]/10 flex items-center justify-center shrink-0 text-[#243B6B]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#243B6B] text-sm mb-1">Low-Resource Contexts</h3>
                    <p className="text-xs text-[#556275] leading-normal">Addressing connectivity, hardware limits, and real-world sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TOPICS OF INTEREST ═══ */}
      <section className="py-20 sm:py-24 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <SectionLabel label="Scope & Themes" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-3">
                Topics of Interest
              </h2>
              <p className="text-[#556275] text-sm sm:text-base">
                Key thematic areas explored across short papers, position statements, posters, and demonstrations:
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {topics.map((t, idx) => {
              const IconComp = t.icon
              return (
                <StaggerItem key={idx}>
                  <div className="h-full bg-white rounded-xl p-6 border border-gray-200 card-hover flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#243B6B]/5 text-[#243B6B] flex items-center justify-center mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-[#243B6B] text-base mb-2">
                        {t.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#556275] leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FORMAT OF BRIDGE ═══ */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <SectionLabel label="Event Structure" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-3">
                Format of Bridge
              </h2>
              <p className="text-[#556275] text-base">
                The bridge will run as a <strong>half-day event</strong> with four core sessions:
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {formatItems.map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <FadeIn key={idx} delay={idx * 0.08}>
                  <div className="h-full bg-[#FAFBFD] rounded-xl p-7 border border-gray-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-gray-200 text-[#243B6B] font-mono font-bold text-xs">
                          <Clock className="w-3.5 h-3.5 text-[#159A9C]" />
                          {item.time}
                        </span>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#243B6B] mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#556275] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-200 flex items-center gap-2 text-xs text-[#243B6B] font-medium">
                      <ItemIcon className="w-4 h-4 text-[#159A9C]" />
                      <span>Half-Day Program Segment</span>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ ATTEND ═══ */}
      <section className="py-20 sm:py-24 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <div className="bg-white rounded-xl p-8 sm:p-12 border border-gray-200">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 text-center lg:text-left">
                  <div className="inline-block p-3.5 rounded-xl bg-[#243B6B]/5 mb-3">
                    <Users2 className="w-8 h-8 text-[#243B6B]" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-[#243B6B] mb-2">Attend Bridge 21</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#F2B84B]/20 text-[#1C2E52] text-xs font-bold uppercase tracking-wider">
                    30–50 Participants
                  </div>
                </div>

                <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-8 space-y-3 text-[#556275] text-sm sm:text-base leading-relaxed">
                  <p>
                    The bridge will host <strong>30–50 participants</strong>. Attendance is open to AI researchers, educators, K–12 and special education teachers, HCI researchers, accessibility practitioners, early-career researchers, students, and other stakeholders interested in inclusive education and agentic AI.
                  </p>
                  <p>
                    On-site space is limited to encourage active participation, interdisciplinary discussion, and community-building.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/schedule"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#159A9C] hover:text-[#0F7577] transition-colors"
                    >
                      <span>View Half-Day Schedule</span>
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
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Submit Card */}
            <FadeIn delay={0.1}>
              <div className="h-full bg-[#243B6B] text-white rounded-xl p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#F2B84B] mb-5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F2B84B] block mb-1">Submissions Open</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">
                    Submit
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    We invite submission of short papers, position statements, posters, and demonstrations exploring technical, pedagogical, methodological, and practical dimensions of agentic AI for supporting learners with SLDs.
                  </p>
                </div>

                <div>
                  <Link
                    to="/cfp"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F2B84B] hover:bg-[#F5C56B] text-[#1C2E52] font-bold text-sm tracking-wide transition-all active:scale-[0.98]"
                  >
                    <span>View Submission Guidelines</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Register Card */}
            <FadeIn delay={0.2}>
              <div className="h-full bg-[#FAFBFD] rounded-xl p-8 sm:p-10 border border-gray-200 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#159A9C]/10 flex items-center justify-center text-[#159A9C] mb-5">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#159A9C] block mb-1">Central Registration</span>
                  <h3 className="text-2xl font-display font-bold text-[#243B6B] mb-3">
                    Register
                  </h3>
                  <p className="text-[#556275] text-sm leading-relaxed mb-6">
                    Registration for AAAI-27 is managed centrally by AAAI.
                  </p>
                </div>

                <div>
                  <a
                    href="https://aaai.org/conference/aaai/aaai-27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#243B6B] hover:bg-[#1C2E52] text-white font-bold text-sm tracking-wide transition-all active:scale-[0.98]"
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
