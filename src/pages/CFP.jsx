import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  HelpCircle, 
  Users, 
  Clock,
  ArrowRight
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Card, CardContent } from '../components/ui/card'

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
    badge: 'Posters'
  },
  {
    title: 'Demonstrations',
    pages: 'Practical tools',
    desc: 'Interactive systems, accessible tools, agentic workflows, or prototype demonstrations.',
    badge: 'Demos'
  },
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
        badge="Bridge Program"
        title="Call for Participation (CFP)"
        subtitle="We invite Short Papers, Position Statements, Posters, and Demonstrations exploring the design and application of agentic AI to support inclusive K–12 education."
      />

      {/* ═══ WHAT TO EXPECT: SUBMISSION DASHBOARD (BEFORE SCROLL) ═══ */}
      <section className="bg-white border-b border-gray-200 py-6 sm:py-8 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#159A9C] font-bold block mb-1">
                Author Briefing · Before You Scroll
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#243B6B]">
                Submission Summary
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a href="#guidelines">
                <Button variant="default" size="sm" className="gap-1.5 text-xs">
                  <span>View Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </a>
              <Link to="/key-dates">
                <Button variant="outline" size="sm" className="text-xs">
                  Key Dates
                </Button>
              </Link>
            </div>
          </div>

          {/* 4 Core Pillars at a Glance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              {
                label: '4 Submission Tracks',
                detail: 'Short Papers, Position, Posters, Demos',
                tag: 'Track Types',
                tagColor: 'bg-[#243B6B] text-white',
                href: '#guidelines',
              },
              {
                label: 'Submission Guidelines',
                detail: 'Standard Submission guidelines',
                tag: 'Submission',
                tagColor: 'bg-[#159A9C] text-white',
                href: '#guidelines',
              },
              {
                label: 'References Policy',
                detail: 'References excluded from page count',
                tag: 'Page Limit',
                tagColor: 'bg-[#F2B84B] text-[#1C2E52]',
                href: '#guidelines',
              },
              {
                label: 'Event Dates',
                detail: '16–17 February 2027 · Montréal',
                tag: 'AAAI-27',
                tagColor: 'bg-[#243B6B] text-white',
                href: '/key-dates',
              },
            ].map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="group p-4 rounded-xl border border-gray-200 bg-[#FAFBFD] hover:bg-white hover:border-[#159A9C] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-2 ${card.tagColor}`}>
                    {card.tag}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#243B6B] group-hover:text-[#159A9C] transition-colors mb-1">
                    {card.label}
                  </h3>
                  <p className="text-[11px] text-[#556275] leading-snug">{card.detail}</p>
                </div>
                <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#159A9C] opacity-80 group-hover:opacity-100">
                  <span>Jump to section</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION BANNER ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <Card className="bg-[#FAFBFD] p-8 sm:p-12 border-gray-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#159A9C]" />
              
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#243B6B] mb-4">
                Call for Participation (CFP)
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
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SUBMISSION GUIDELINES ═══ */}
      <section id="guidelines" className="py-16 sm:py-20 bg-[#F4F6FA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <FadeIn>
              <SectionLabel label="Guidelines" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#243B6B] tracking-tight mb-3">
                Submission Guidelines
              </h2>
            </FadeIn>
          </div>

          {/* Submission Types Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {submissionTypes.map((t, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full p-6 border-gray-200 flex flex-col justify-between card-hover bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-[#243B6B]/5 text-[#243B6B]">
                        {t.pages}
                      </span>
                      <Badge variant="secondary" className="text-[11px]">
                        {t.badge}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-[#243B6B] text-base mb-2">
                      {t.title}
                    </h3>
                    <p className="text-xs text-[#556275] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Details */}
          <div className="grid md:grid-cols-3 gap-5">
            
            <FadeIn delay={0.1}>
              <Card className="h-full p-6 border-gray-200 bg-white">
                <div className="w-8 h-8 rounded-lg bg-[#243B6B]/5 flex items-center justify-center text-[#243B6B] mb-3">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#243B6B] text-sm mb-2">Format</h3>
                <p className="text-xs text-[#556275] leading-relaxed mb-3">
                  AAAI-27 conference format (https://aaai.org/conference/aaai/aaai-27/).
                </p>
                <a
                  href="https://aaai.org/conference/aaai/aaai-27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159A9C] hover:text-[#0F7577] transition-colors"
                >
                  <span>AAAI-27 conference page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full p-6 border-gray-200 bg-white">
                <div className="w-8 h-8 rounded-lg bg-[#159A9C]/10 flex items-center justify-center text-[#159A9C] mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#243B6B] text-sm mb-2">Content</h3>
                <p className="text-xs text-[#556275] leading-relaxed">
                  Contributions may include relevant research findings, practical experiences, design concepts, emerging ideas, or position statements that stimulate discussion and inform the workshop’s research agenda.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="h-full p-6 border-gray-200 bg-white">
                <div className="w-8 h-8 rounded-lg bg-[#F2B84B]/20 flex items-center justify-center text-[#D49C35] mb-3">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-[#243B6B] text-sm mb-2">References</h3>
                <p className="text-xs text-[#556275] leading-relaxed">
                  Include relevant references where necessary. References are excluded from the page limit.
                </p>
              </Card>
            </FadeIn>

          </div>

          <FadeIn delay={0.35}>
            <Card className="mt-8 p-6 border-gray-200 bg-white">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#159A9C]/10 flex items-center justify-center text-[#159A9C] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#243B6B] text-sm mb-2">Submission Policy</h3>
                  <p className="text-xs text-[#556275] leading-relaxed">
                    Submissions will undergo a double-blind peer review process by multiple reviewers.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Submission Site Card */}
          <FadeIn delay={0.3}>
            <Card className="mt-8 p-8 border-gray-200 text-center max-w-xl mx-auto bg-white">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E9BAE] block mb-1">Submission site</span>
              <h3 className="text-lg font-bold text-[#243B6B] mb-2">[EasyChair link to be added.]</h3>
              <p className="text-xs text-[#556275] mb-4">
                Submissions will be managed centrally by the EasyChair portal.
              </p>
              <Button variant="outline" disabled className="gap-2 text-xs">
                <Clock className="w-4 h-4" />
                <span>[EasyChair link to be added.]</span>
              </Button>
            </Card>
          </FadeIn>

        </div>
      </section>

      {/* ═══ TOPICS CHECKLIST ═══ */}
      <section className="py-16 sm:py-20 bg-[#F4F6FA]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <FadeIn>
            <Card className="p-8 sm:p-12 border-gray-200 bg-white">
              <SectionLabel label="Scope" />
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
            </Card>
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
            <a href="mailto:mgachoka@uef.fi">
              <Button variant="default" size="lg" className="gap-2">
                <span>Contact Organisers</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>

    </motion.div>
  )
}
