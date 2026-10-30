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
import { TracingBeam } from '../components/ui/tracing-beam'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Card, CardContent } from '../components/ui/card'

const topics = [
  { 
    icon: Bot, 
    title: 'Agentic AI and multi-agent systems for inclusive K–12 education', 
    desc: 'Autonomous coordinated agents facilitating inclusive K–12 classroom contexts.' 
  },
  { 
    icon: UserCheck, 
    title: 'Teacher agency, AI autonomy, and human oversight', 
    desc: 'Preserving human authority, intentional pedagogical choices, and supervision.' 
  },
  { 
    icon: GraduationCap, 
    title: 'AI-supported differentiated instruction and personalised learning', 
    desc: 'Adaptive instruction addressing distinct learner pacing, cognitive styles, and needs.' 
  },
  { 
    icon: Accessibility, 
    title: 'Accessible learning-resource development for learners with SLDs', 
    desc: 'Curricula and multi-sensory materials tailored for dyslexia, dyscalculia, and dysgraphia.' 
  },
  { 
    icon: MonitorSmartphone, 
    title: 'Human–AI interaction in special and inclusive education', 
    desc: 'Natural, accessible, and intuitive interfaces designed alongside specialist practitioners.' 
  },
  { 
    icon: Users2, 
    title: 'Teacher-centred and participatory co-design approaches', 
    desc: 'Centering teachers from ideation to evaluation in genuine peer co-creation workflows.' 
  },
  { 
    icon: BookOpen, 
    title: 'AI-supported instructional planning and classroom workflows', 
    desc: 'Pragmatic agentic support reducing administrative burdens and lesson preparation friction.' 
  },
  { 
    icon: ShieldCheck, 
    title: 'Responsible, transparent, and accountable educational AI', 
    desc: 'Safeguarding ethics, safety, explainability, and pedagogical integrity.' 
  },
  { 
    icon: Accessibility, 
    title: 'Accessibility, usability, and inclusive technology design', 
    desc: 'Universal design principles ensuring seamless access across diverse abilities.' 
  },
  { 
    icon: Globe2, 
    title: 'Context-sensitive AI design for low-resource educational settings', 
    desc: 'Hardware frugality, low-bandwidth resilience, device sharing, and offline sustainability.' 
  },
  { 
    icon: Globe2, 
    title: 'Affordability, limited connectivity, infrastructure constraints, and sustainability', 
    desc: 'Real-world deployment feasibility within resource-constrained schools.' 
  },
  { 
    icon: CheckCircle2, 
    title: 'Teacher-informed evaluation of AI-supported educational systems', 
    desc: 'Rigorous empirical evaluation driven by classroom realities and teacher feedback.' 
  },
  { 
    icon: Network, 
    title: 'Collaboration across AI, HCI, special education, and teacher education', 
    desc: 'Unifying technical creators, pedagogical experts, and front-line educators.' 
  },
  { 
    icon: Compass, 
    title: 'Research frameworks and design principles for human-centred agentic AI in inclusive education', 
    desc: 'Establishing sustainable theoretical and practical foundations.' 
  },
]

const formatItems = [
  { 
    time: '1h', 
    title: 'Keynote and research presentations', 
    desc: 'Agentic AI capabilities, inclusive education, teacher agency, human–AI interaction, and participatory design.',
    icon: Sparkles,
  },
  { 
    time: '30 min', 
    title: 'Posters and demonstrations', 
    desc: 'Emerging research, tools, and applications of agentic AI for supporting learners with Specific Learning Disorders.',
    icon: Presentation,
  },
  { 
    time: '1h 40 min', 
    title: 'Interactive workshop and co-design', 
    desc: 'Interdisciplinary activities, group discussions, and presentations exploring teacher-support needs, AI autonomy, human oversight, and research priorities.',
    icon: Users2,
  },
  { 
    time: '30 min', 
    title: 'Panel discussion', 
    desc: 'How Can Agentic AI Support Inclusive K–12 Education While Preserving Teacher Agency and Human Oversight?',
    icon: Network,
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
        
        {/* Subtle Three.js-style 2D canvas network */}
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
                <span className="text-white/90">AAAI-27</span>
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
                  <span>Montréal, Canada · 2027</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/15">
                  <Calendar className="w-4 h-4 text-[#F2B84B]" />
                  <span>16–17 February 2027</span>
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
                  <Badge key={pill} variant="outline" className="text-white bg-white/10 border-white/20">
                    {pill}
                  </Badge>
                ))}
              </motion.div>

              {/* Action Buttons using shadcn Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <Link to="/cfp">
                  <Button variant="gold" size="lg" className="gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Call for Participation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <a href="#overview">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Learn More
                  </Button>
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
                    <span className="text-[11px] font-mono text-[#F2B84B] uppercase tracking-wider block">Bridge 21</span>
                    <h2 className="text-base font-bold text-white">AI for Inclusive Education</h2>
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
                      <p className="text-white/70">Connecting AI, multi-agent systems, and special education practitioners.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <Accessibility className="w-4 h-4 text-[#F2B84B] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Focus on SLDs</h3>
                      <p className="text-white/70">Dyslexia, dyscalculia, and dysgraphia learner support.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                    <Globe2 className="w-4 h-4 text-[#159A9C] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Low-Resource Realities</h3>
                      <p className="text-white/70">Context-sensitive design for connectivity and hardware limits.</p>
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

      {/* ═══ TRACING BEAM WRAPPER FOR MAIN EDITORIAL CONTENT ═══ */}
      <TracingBeam className="px-6">
        
        {/* ═══ OVERVIEW ═══ */}
        <section id="overview" className="py-20 sm:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mb-8">
              <FadeIn>
                <SectionLabel label="About the Bridge" />
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-4">
                  Overview
                </h2>
              </FadeIn>
            </div>

            <FadeIn delay={0.1}>
              <Card className="bg-[#FAFBFD] border-gray-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#159A9C]" />
                <CardContent className="p-8 sm:p-12 space-y-5 text-[#556275] leading-relaxed text-base sm:text-lg pl-3 sm:pl-4">
                  <p>
                    The bridge will bring together AI and multi-agent systems researchers, AI in education and HCI specialists, special education practitioners, teacher educators, and early-career researchers. Its intended outcomes include identifying shared research challenges, developing preliminary teacher- centred design concepts, and establishing a collaborative research agenda for responsible agentic AI in inclusive education, with particular attention to the contextual realities of low-resource settings.
                  </p>
                  <p>
                    By connecting technical innovation with pedagogical expertise and inclusive design, the bridge seeks to lay the foundation for a sustained cross-disciplinary community advancing human-centred agentic AI for inclusive K–12 education.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ═══ TOPICS OF INTEREST ═══ */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <FadeIn>
                <SectionLabel label="Core Themes" />
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-2">
                  Topics of Interest
                </h2>
                <p className="text-[#556275] text-sm sm:text-base font-medium">
                  Key themes include:
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {topics.map((t, idx) => {
                const IconComp = t.icon
                return (
                  <StaggerItem key={idx}>
                    <Card className="h-full border-gray-200 card-hover flex items-start gap-4 p-5 bg-white">
                      <div className="w-9 h-9 rounded-lg bg-[#243B6B]/5 text-[#243B6B] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#243B6B] text-sm leading-snug mb-1">
                          {t.title}
                        </h3>
                        <p className="text-xs text-[#556275] leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </Card>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* ═══ FORMAT OF BRIDGE ═══ */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <FadeIn>
                <SectionLabel label="Event Structure" />
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-3">
                  Format of Bridge
                </h2>
                <p className="text-[#556275] text-base">
                  The bridge will run as a <strong>half-day event</strong>. It will include:
                </p>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {formatItems.map((item, idx) => {
                const ItemIcon = item.icon
                return (
                  <FadeIn key={idx} delay={idx * 0.08}>
                    <Card className="border-gray-200 p-6 bg-white card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-[#243B6B] text-white">
                            {item.time}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-[#243B6B] font-display">
                            {item.title}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="self-start sm:self-auto text-[11px]">
                          Half-Day Program
                        </Badge>
                      </div>
                      <p className="text-sm text-[#556275] leading-relaxed pl-0 sm:pl-12">
                        {item.desc}
                      </p>
                    </Card>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══ ATTEND ═══ */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <Card className="p-8 sm:p-12 border-gray-200 bg-[#FAFBFD]">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 text-center lg:text-left">
                    <div className="inline-block p-3 rounded-lg bg-[#243B6B]/5 mb-3">
                      <Users2 className="w-8 h-8 text-[#243B6B]" />
                    </div>
                    <h2 className="text-2xl font-display font-bold text-[#243B6B] mb-2">Attend</h2>
                    <Badge variant="gold" className="text-xs">
                      The bridge will host 30–50 participants.
                    </Badge>
                  </div>

                  <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-gray-200 lg:pl-8 space-y-3 text-[#556275] text-sm sm:text-base leading-relaxed">
                    <p>
                      Attendance is open to AI researchers, educators, K–12 and special education teachers, HCI researchers, accessibility practitioners, early-career researchers, students, and other stakeholders interested in inclusive education and agentic AI.
                    </p>
                    <p>
                      On-site space is limited to encourage active participation, interdisciplinary discussion, and community-building.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ═══ SUBMIT ═══ */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <Card className="p-8 sm:p-12 border-gray-200 bg-white">
                <SectionLabel label="Contribution" />
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#243B6B] mb-4">
                  Submit
                </h2>
                <p className="text-[#556275] text-base leading-relaxed mb-6">
                  We invite submission of short papers, position statements, posters, and demonstrations exploring technical, pedagogical, methodological, and practical dimensions of agentic AI for supporting learners with SLDs.
                </p>
                <div>
                  <Link to="/cfp">
                    <Button variant="default" className="gap-2">
                      <span>View Call for Participation (CFP)</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* ═══ REGISTER ═══ */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <Card className="p-8 sm:p-12 border-gray-200 bg-[#FAFBFD]">
                <SectionLabel label="Conference Registration" />
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#243B6B] mb-4">
                  Register
                </h2>
                <p className="text-[#556275] text-base leading-relaxed mb-6">
                  Registration for AAAI-27 is managed centrally by AAAI.
                </p>
                <div>
                  <a
                    href="https://aaai.org/conference/aaai/aaai-27/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="gap-2">
                      <span>[AAAI-27 Registration & More Information – link to be added]</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>

      </TracingBeam>
    </motion.div>
  )
}
