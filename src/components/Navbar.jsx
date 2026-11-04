import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/cfp', label: 'Call for Participation' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/committee', label: 'Committee' },
  { to: '/keynote', label: 'Keynote' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-indigo-deep flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-gold font-extrabold text-sm leading-none">21</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`font-bold text-sm tracking-wide ${scrolled ? 'text-indigo-deep' : 'text-white'} transition-colors`}>
                BRIDGE 21
              </span>
              <span className={`text-xs font-medium ${scrolled ? 'text-warm-gray' : 'text-white/60'} transition-colors`}>
                AAAI-27
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? scrolled
                          ? 'text-indigo-deep bg-indigo-deep/5'
                          : 'text-white bg-white/15'
                        : scrolled
                          ? 'text-warm-gray hover:text-indigo-deep hover:bg-gray-50'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-0.5 rounded-full ${scrolled ? 'bg-indigo-deep' : 'bg-white'} transition-colors origin-center`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className={`block w-6 h-0.5 rounded-full ${scrolled ? 'bg-indigo-deep' : 'bg-white'} transition-colors`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-0.5 rounded-full ${scrolled ? 'bg-indigo-deep' : 'bg-white'} transition-colors origin-center`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 mobile-nav-overlay bg-indigo-darker/95 lg:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, staggerChildren: 0.05 }}
              className="flex flex-col p-8 gap-2"
            >
              {navItems.map(({ to, label }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `block px-5 py-4 text-lg font-medium rounded-xl transition-all ${
                        isActive
                          ? 'text-gold bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
