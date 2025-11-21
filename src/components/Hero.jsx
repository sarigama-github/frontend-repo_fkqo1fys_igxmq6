import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(34,211,238,0.25),transparent)] pointer-events-none" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_35px_rgba(59,130,246,0.35)]"
          >
            Creative Yaka
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl"
          >
            A playful, modern portfolio showcasing interactive experiments, design craft, and thoughtful code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#portfolio" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_14px_40px_rgba(255,255,255,0.25)] transition">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition">Contact</a>
          </motion.div>
        </div>

        <div className="h-[50vh] lg:h-[70vh]" />
      </div>
    </section>
  )
}
