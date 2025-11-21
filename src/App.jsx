import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} Creative Yaka — All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
