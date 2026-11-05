import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionLabel from '../components/SectionLabel'
import { FadeIn } from '../components/Motion'
import { Badge } from '../components/ui/badge'
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from '../components/ui/table'

const scheduleData = [
  {
    time: '8:30–8:45',
    title: 'Welcome, introductions, and bridge objectives',
    type: 'Opening',
    isBreak: false
  },
  {
    time: '8:45–9:05',
    title: 'Keynote vision talk: Agentic AI, teacher agency, and inclusive education',
    type: 'Keynote',
    isBreak: false
  },
  {
    time: '9:05–9:45',
    title: 'Short paper and position-statement presentations',
    type: 'Presentations',
    isBreak: false
  },
  {
    time: '9:45–10:15',
    title: 'Poster presentations and demonstrations',
    type: 'Posters & Demos',
    isBreak: false
  },
  {
    time: '10:15–10:30',
    title: 'Networking break',
    type: 'Break',
    isBreak: true
  },
  {
    time: '10:30–11:00',
    title: 'Panel discussion: Designing responsible agentic AI for inclusive education',
    type: 'Panel',
    isBreak: false
  },
  {
    time: '11:00–11:40',
    title: 'Hands-on interdisciplinary co-design activity',
    type: 'Workshop',
    isBreak: false
  },
  {
    time: '11:40–12:10',
    title: 'Group presentations and discussion of research challenges',
    type: 'Presentations',
    isBreak: false
  },
  {
    time: '12:10–12:30',
    title: 'Research agenda, community-building commitments, and closing',
    type: 'Closing',
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
        badge="Bridge Program"
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

          {/* Using shadcn UI Table Component */}
          <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="w-36 sm:w-44">Time</TableHead>
                  <TableHead>Activity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scheduleData.map((item, idx) => (
                  <TableRow 
                    key={idx}
                    className={item.isBreak ? "bg-[#F4F6FA]" : "bg-white"}
                  >
                    <TableCell className="font-mono text-xs sm:text-sm font-semibold text-[#243B6B]">
                      {item.time}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className={`text-xs sm:text-sm ${item.isBreak ? 'text-[#556275] font-medium' : 'text-[#243B6B] font-semibold'}`}>
                          {item.title}
                        </span>
                        <Badge 
                          variant={item.isBreak ? "outline" : item.type === "Workshop" ? "gold" : item.type === "Keynote" ? "secondary" : "default"}
                          className="self-start sm:self-auto text-[10px] uppercase tracking-wider"
                        >
                          {item.type}
                        </Badge>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </div>
      </section>
    </motion.div>
  )
}
