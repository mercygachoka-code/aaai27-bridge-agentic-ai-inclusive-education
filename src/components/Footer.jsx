import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-indigo-darker text-white/80">
      {/* Warm gradient line */}
      <div className="h-1 bg-gradient-to-r from-teal via-gold to-teal" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-gold font-extrabold text-sm">21</span>
              </div>
              <div>
                <span className="font-bold text-white text-sm tracking-wide">BRIDGE 21</span>
                <span className="text-white/40 text-xs ml-2">AAAI-27</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light italic font-display">
              Building bridges between AI, teachers and inclusive learning.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/cfp', label: 'Call for Participation' },
                { to: '/schedule', label: 'Schedule' },
                { to: '/committee', label: 'Committee' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-white/60 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-sm text-white/60 mb-2">For inquiries about Bridge 21:</p>
            <a
              href="mailto:mgachoka@uef.fi"
              className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
              </svg>
              mgachoka@uef.fi
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            &copy; 2026 Co-Designing Agentic AI Bridge. Contact:{' '}
            <a href="mailto:mgachoka@uef.fi" className="hover:text-gold transition-colors">Mercy Gachoka</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}
