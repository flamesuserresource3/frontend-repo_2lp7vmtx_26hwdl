import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Immersive Landing',
    description: 'A fast, animated landing page with 3D integration and scroll-driven storytelling.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Component library with tokens, themes, and accessibility baked in.',
    tags: ['Tailwind', 'Radix', 'A11y'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Streaming metrics and live charts with responsive, dark-mode UI.',
    tags: ['Vite', 'WebSockets', 'Charts'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0b0b10] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-xl backdrop-blur transition"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 text-sm text-white/70"
              >
                View project →
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
