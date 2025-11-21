import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interactive Product Teaser',
    tags: ['3D', 'Spline', 'WebGL'],
  },
  {
    title: 'Design System Playground',
    tags: ['Design', 'Components', 'UI'],
  },
  {
    title: 'Motion Micro-Interactions',
    tags: ['Framer Motion', 'UX'],
  },
  {
    title: 'Realtime Dashboard',
    tags: ['React', 'Charts'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_10%,rgba(244,114,182,0.18),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Portfolio</h2>
          <p className="text-slate-600 text-sm max-w-sm">
            A selection of experiments and projects exploring playful, tech-forward experiences.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white bg-white/80 shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-video bg-[linear-gradient(120deg,rgba(14,165,233,0.25),transparent),linear-gradient(240deg,rgba(244,114,182,0.25),transparent)]" />
              <div className="p-5">
                <h3 className="text-slate-900 font-semibold">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
