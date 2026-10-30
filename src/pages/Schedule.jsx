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
    time: '8:30–8:45',
    title: 'Welcome, introductions, and bridge objectives',
    type: 'Opening',
    icon: CheckCircle2,
    badgeBg: 'bg-[#243B6B] text-white',
    isBreak: false
  },
  {
    time: '8:45–9:05',
    title: 'Keynote vision talk: Agentic AI, teacher agency, and inclusive education',
    type: 'Keynote',
    icon: Sparkles,
    badgeBg: 'bg-[#159A9C] text-white',
    isBreak: false
  },
  {
    time: '9:05–9:45',
    title: 'Short paper and position-statement presentations',
    type: 'Presentations',
    icon: Presentation,
    badgeBg: 'bg-[#243B6B] text-white',
    isBreak: false
  },
  {
    time: '9:45–10:15',
    title: 'Poster presentations and demonstrations',
    type: 'Posters & Demos',
    icon: Share2,
    badgeBg: 'bg-[#159A9C] text-white',
    isBreak: false
  },
  {
    time: '10:15–10:30',
    title: 'Networking break',
    type: 'Break',
    icon: Coffee,
    badgeBg: 'bg-gray-200 text-[#556275]',
    isBreak: true
  },
  {
    time: '10:30–11:00',
    title: 'Panel discussion: Designing responsible agentic AI for inclusive education',
    type: 'Panel',
    icon: MessagesSquare,
    badgeBg: 'bg-[#243B6B] text-white',
    isBreak: false
  },
  {
    time: '11:00–11:40',
    title: 'Hands-on interdisciplinary co-design activity',
    type: 'Workshop',
    icon: Hammer,
    badgeBg: 'bg-[#F2B84B] text-[#1C2E52]',
    isBreak: false
  },
  {
    time: '11:40–12:10',
    title: 'Group presentations and discussion of research challenges',
    type: 'Presentations',
    icon: Users2,
    badgeBg: 'bg-[#159A9C] text-white',
    isBreak: false
  },
  {
    time: '12:10–12:30',
    title: 'Research agenda, community-building commitments, and closing',
    type: 'Closing',
    icon: CheckCircle2,
    badgeBg: 'bg-[#243B6B] text-white',
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
        badge="Bridge 21"
        title="Schedule"
        subtitle="Tentative Schedule – Half-Day"
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-200 gap-4">
            <div>
              <SectionLabel label="Program" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#243B6B]">
                Tentative Schedule – Half-Day
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#556275] px-3 py-1.5 rounded bg-[#FAFBFD] border border-gray-200">
              <Calendar className="w-4 h-4 text-[#159A9C]" />
              <span>16–17 February 2027</span>
            </div>
          </div>

          {/* Clean Academic Table Structure */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-12 bg-[#243B6B] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6">
              <div className="col-span-4 sm:col-span-3">Time</div>
              <div className="col-span-8 sm:col-span-9">Activity</div>
            </div>

            <div className="divide-y divide-gray-200">
              {scheduleData.map((item, idx) => (
                <div 
                  key={idx}
                  className={`grid grid-cols-12 py-4 px-6 items-center schedule-row ${
                    item.isBreak ? 'bg-[#F4F6FA]' : 'bg-white'
                  }`}
                >
                  <div className="col-span-4 sm:col-span-3 font-mono text-xs sm:text-sm font-semibold text-[#243B6B]">
                    {item.time}
                  </div>
                  <div className="col-span-8 sm:col-span-9 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className={`text-xs sm:text-sm ${item.isBreak ? 'text-[#556275] font-medium' : 'text-[#243B6B] font-semibold'}`}>
                      {item.title}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded self-start sm:self-auto shrink-0 ${item.badgeBg}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  )
}
