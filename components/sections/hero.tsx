'use client';

import { motion, type Variants } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

/* =========================
   Motion Variants
========================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

/* =========================
   Component
========================= */

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-500 opacity-20 blur-3xl"
      />

      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />

      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgb(255 255 255) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 255 255) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text-xs sm:text-sm tracking-widest text-purple-500"
          >
            DESENVOLVEDOR FULL STACK
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Felipe
            <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Damasceno</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl"
          >
            Criando aplicações web modernas, performáticas e bem estruturadas.
            <span className="text-white">
              {' '}
              Design, código limpo e experiência do usuário.
            </span>
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projetos"
              className="
                group
                rounded-lg
                bg-linear-to-r
                from-purple-500
                to-pink-500
                px-8
                py-4
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                hover:shadow-purple-500/25
              "
            >
              Ver Projetos
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contato"
              className="
                rounded-lg
                border
                border-gray-800
                px-8
                py-4
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-gray-800/50
                hover:border-purple-500/50
              "
            >
              Entre em Contato
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/Felibread"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-500"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/felipe-olecsiuc-damasceno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:patcho.olec@gmail.com"
              className="text-gray-400 transition-colors hover:text-purple-500"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-400/30">
          <div className="mt-2 h-3 w-1.5 rounded-full bg-gray-400/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;