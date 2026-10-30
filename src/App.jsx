import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import CFP from './pages/CFP'
import Schedule from './pages/Schedule'
import Committee from './pages/Committee'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cfp" element={<CFP />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="committee" element={<Committee />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
