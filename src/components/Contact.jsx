import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_80%,rgba(14,165,233,0.18),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Contact</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white/80 backdrop-blur border border-white p-6 sm:p-8 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input required className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Email</label>
              <input required type="email" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="you@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Message</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Say hello..." />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button className="px-5 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition" type="submit">Send</button>
            <span className="text-slate-600 text-sm">{status}</span>
          </div>
        </motion.form>
        <p className="text-slate-500 text-xs mt-4">This form is a demo. Hook it to your backend or email service when ready.</p>
      </div>
    </section>
  )
}
