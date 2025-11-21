import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-fuchsia-50 text-slate-800">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Creative Yaka — Crafted with motion and good vibes.
        </div>
      </footer>
    </div>
  )
}

export default App
