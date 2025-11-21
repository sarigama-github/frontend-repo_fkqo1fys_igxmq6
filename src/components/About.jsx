import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About</h2>
            <p className="text-white/80 leading-relaxed">
              I’m Creative Yaka — a multidisciplinary developer blending code with playful interactions.
              I love crafting delightful experiences using modern web tech, 3D, and motion.
            </p>
            <p className="text-white/70 mt-4">
              Tools I enjoy: React, Three/Spline, Tailwind, Framer Motion, and a healthy dose of curiosity.
            </p>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {['Web Apps','3D & Motion','Design Systems','Rapid Prototyping'].map((s) => (
              <motion.li
                key={s}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 text-white/90"
              >
                {s}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
