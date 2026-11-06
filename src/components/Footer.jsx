import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#15223D] text-white/80 border-t-2 border-[#159A9C]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-auto min-w-8 h-8 px-1.5 rounded bg-[#243B6B] flex items-center justify-center">
                <span className="text-[#F2B84B] font-bold text-[10px]">AAAI-27</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm">Bridge Program</span>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed font-display italic">
              Building bridges between AI, teachers and inclusive learning.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {[
                { to: '/', label: 'Home' },
                { to: '/cfp', label: 'Call for Participation' },
                { to: '/key-dates', label: 'Key Dates' },
                { to: '/schedule', label: 'Schedule' },
                { to: '/committee', label: 'Committee' },
                { to: '/keynote', label: 'Keynote' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 hover:text-[#F2B84B] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Contact</h4>
            <p className="text-xs text-white/60 mb-2">Bridge Chair</p>
            <a
              href="mailto:mgachoka@uef.fi"
              className="inline-flex items-center gap-1.5 text-xs text-[#F2B84B] hover:underline"
            >
              <span>Mercy Gachoka (mgachoka@uef.fi)</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 Co-Designing Agentic AI for Inclusive Learning. 
          </p>
        </div>
      </div>
    </footer>
  )
}
