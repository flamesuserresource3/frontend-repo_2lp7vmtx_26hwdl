import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import GlassButton from './GlassButton';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax layers
  const yTitle = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const yCta = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.7, 0.3]);

  return (
    <section ref={ref} id="home" className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient edges to improve contrast without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6">
        <motion.h1
          style={{ y: yTitle, opacity: opacityFade }}
          className="text-center text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
        >
          Liquid Glass Portfolio
        </motion.h1>
        <motion.p
          style={{ y: ySubtitle, opacity: opacityFade }}
          className="mt-4 max-w-2xl text-center text-lg text-white/80 sm:text-xl"
        >
          A futuristic, immersive experience with glossy, fluid UI and responsive 3D.
        </motion.p>
        <motion.div style={{ y: yCta, opacity: opacityFade }} className="mt-8 flex flex-wrap gap-4">
          <GlassButton href="#projects">View Work</GlassButton>
          <GlassButton href="#contact" className="border-white/30 bg-white/5 hover:bg-white/10">Get in Touch</GlassButton>
        </motion.div>
      </div>
    </section>
  );
}
