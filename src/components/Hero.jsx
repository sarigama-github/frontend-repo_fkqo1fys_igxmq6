import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Light background with playful gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-fuchsia-50" />
      <div className="absolute inset-0 opacity-80 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(244,114,182,0.25),transparent)] pointer-events-none" />

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
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 drop-shadow-[0_10px_35px_rgba(56,189,248,0.25)]"
          >
            Creative Yaka
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            className="mt-6 text-lg sm:text-xl text-slate-700 max-w-xl"
          >
            A playful, modern portfolio showcasing interactive experiments, design craft, and thoughtful code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#portfolio" className="px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_14px_40px_rgba(56,189,248,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition">View Work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/70 text-slate-900 font-semibold border border-white hover:bg-white">Contact</a>
          </motion.div>
        </div>

        <div className="h-[50vh] lg:h-[70vh]" />
      </div>
    </section>
  )
}
