import { motion } from 'framer-motion'
import { 
  Clock, 
  Sparkles, 
  Users2, 
  Presentation, 
  Coffee, 
  MessagesSquare, 
  Hammer, 
  Share2, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Motion'

const scheduleData = [
  {
    time: '8:30 – 8:45',
    duration: '15 min',
    title: 'Welcome, Introductions, and Bridge Objectives',
    subtitle: 'Setting cross-disciplinary expectations and establishing community participation norms.',
    type: 'Opening',
    icon: CheckCircle2,
    badgeColor: 'bg-indigo-deep text-white',
    isBreak: false
  },
  {
    time: '8:45 – 9:05',
    duration: '20 min',
    title: 'Keynote Vision Talk: Agentic AI, Teacher Agency, and Inclusive Education',
    subtitle: 'Framing human-in-the-loop multi-agent autonomy within real-world special education classrooms.',
    type: 'Keynote',
    icon: Sparkles,
    badgeColor: 'bg-gold-dark text-white',
    isBreak: false
  },
  {
    time: '9:05 – 9:45',
    duration: '40 min',
    title: 'Short Paper and Position-Statement Presentations',
    subtitle: 'Peer-reviewed research insights, technical systems, and conceptual positions from selected authors.',
    type: 'Oral Papers',
    icon: Presentation,
    badgeColor: 'bg-teal text-white',
    isBreak: false
  },
  {
    time: '9:45 – 10:15',
    duration: '30 min',
    title: 'Poster Presentations and Demonstrations',
    subtitle: 'Interactive gallery showcasing emerging systems, assistive tools, and practitioner implementations.',
    type: 'Posters & Demos',
    icon: Share2,
    badgeColor: 'bg-teal-dark text-white',
    isBreak: false
  },
  {
    time: '10:15 – 10:30',
    duration: '15 min',
    title: 'Networking Break',
    subtitle: 'Informal discussions, refreshments, and participant interdisciplinary connecting.',
    type: 'Break',
    icon: Coffee,
    badgeColor: 'bg-warm-gray-light text-white',
    isBreak: true
  },
  {
    time: '10:30 – 11:00',
    duration: '30 min',
    title: 'Panel Discussion: Designing Responsible Agentic AI for Inclusive Education',
    subtitle: 'Expert panel: “How Can Agentic AI Support Inclusive K–12 Education While Preserving Teacher Agency and Human Oversight?”',
    type: 'Expert Panel',
    icon: MessagesSquare,
    badgeColor: 'bg-indigo-light text-white',
    isBreak: false
  },
  {
    time: '11:00 – 11:40',
    duration: '40 min',
    title: 'Hands-on Interdisciplinary Co-Design Activity',
    subtitle: 'Breakout co-design teams of AI technologists, educators, and HCI specialists creating rapid prototypes.',
    type: 'Workshop',
    icon: Hammer,
    badgeColor: 'bg-gold text-indigo-darker',
    isBreak: false
  },
  {
    time: '11:40 – 12:10',
    duration: '30 min',
    title: 'Group Presentations and Discussion of Research Challenges',
    subtitle: 'Synthesis of co-design findings, identification of shared hurdles, and low-resource constraints.',
    type: 'Synthesis',
    icon: Users2,
    badgeColor: 'bg-teal text-white',
    isBreak: false
  },
  {
    time: '12:10 – 12:30',
    duration: '20 min',
    title: 'Research Agenda, Community-Building Commitments, and Closing',
    subtitle: 'Establishing post-workshop collaborations, roadmap drafting, and community action steps.',
    type: 'Closing',
    icon: CheckCircle2,
    badgeColor: 'bg-indigo-deep text-white',
    isBreak: false
  },
]

export default function Schedule() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <PageHero
        badge="Half-Day Intensive Program"
        title="Schedule"
        subtitle="A balanced itinerary structured to promote rich cross-disciplinary exchange, hands-on co-design, and tangible research outputs."
      />

      <section className="py-20 sm:py-28 bg-[#FAFBFD]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-gray-200/80 gap-4">
            <div>
              <SectionLabel label="Agenda & Program" />
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-indigo-deep">
                Tentative Schedule – Half-Day
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-warm-gray px-3.5 py-1.5 rounded-lg bg-white border border-gray-200">
              <Calendar className="w-4 h-4 text-teal" />
              <span>AAAI-27 (16–17 February 2027)</span>
            </div>
          </div>

          {/* Timeline List */}
          <div className="space-y-4">
            {scheduleData.map((item, idx) => {
              const ItemIcon = item.icon
              return (
                <FadeIn key={idx} delay={idx * 0.05}>
                  <div 
                    className={`rounded-2xl p-6 sm:p-7 border transition-all ${
                      item.isBreak 
                        ? 'bg-cream/60 border-dashed border-gray-300' 
                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="grid md:grid-cols-12 gap-5 items-start sm:items-center">
                      
                      {/* Time Column */}
                      <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between md:justify-center border-b md:border-b-0 pb-3 md:pb-0 border-gray-100">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-teal shrink-0" />
                          <span className="font-mono font-bold text-sm sm:text-base text-indigo-deep">
                            {item.time}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-warm-gray-light mt-0.5 md:ml-6">
                          ({item.duration})
                        </span>
                      </div>

                      {/* Content Column */}
                      <div className="md:col-span-9">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${item.badgeColor}`}>
                            {item.type}
                          </span>
                        </div>

                        <h3 className={`text-base sm:text-lg font-bold mb-1 ${item.isBreak ? 'text-warm-gray' : 'text-indigo-deep'}`}>
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-warm-gray leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>

                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-100 text-center">
              <p className="text-xs sm:text-sm text-warm-gray">
                * Note: Timings and exact speaker order are tentative and subject to minor adjustments as final accepted papers and panels are scheduled with AAAI-27 operations.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>
    </motion.div>
  )
}
