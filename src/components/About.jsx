import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#0b0b10] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 max-w-3xl text-white/80"
        >
          I’m a front-end developer with a love for 3D, motion, and polished UI. I craft performant websites and apps using
          React, TypeScript, and modern tooling. My work combines strong visual design with accessibility and code quality.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {[
            { title: 'Focus', text: 'Design systems, animations, and interactive storytelling with a developer-first mindset.' },
            { title: 'Toolbox', text: 'React, Vite, Tailwind, Framer Motion, Three/Spline, Node, and cloud platforms.' },
            { title: 'Values', text: 'Clarity, performance, sustainability, and delightful micro-interactions.' },
            { title: 'Approach', text: 'User-centered, iterative, and collaborative — from idea to polished delivery.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.06 * idx }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
