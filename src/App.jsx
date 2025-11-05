import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-[Inter] text-white">
      {/* Simple sticky nav */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
          <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">Portfolio</a>
          <div className="flex gap-2 sm:gap-4">
            <a href="#about" className="rounded-full px-3 py-2 text-xs text-white/70 hover:text-white">About</a>
            <a href="#projects" className="rounded-full px-3 py-2 text-xs text-white/70 hover:text-white">Projects</a>
            <a href="#contact" className="rounded-full px-3 py-2 text-xs text-white/70 hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
