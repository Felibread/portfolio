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
        className="absolute inset-0 bg-gradient-purple opacity-20 blur-3xl"
      />

      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.95 0 0) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.95 0 0) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 font-mono text-sm tracking-widest text-primary"
          >
            DESENVOLVEDOR FULL STACK
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
          >
            Felipe
            <span className="text-gradient"> Damasceno</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Criando aplicações web modernas, performáticas e bem estruturadas.
            <span className="text-foreground">
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
                bg-gradient-purple
                px-8
                py-4
                font-medium
                text-primary-foreground
                transition-all
                duration-300
                hover:scale-105
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
                border-border
                px-8
                py-4
                font-medium
                text-foreground
                transition-all
                duration-300
                hover:bg-muted/50
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
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/felipe-olecsiuc-damasceno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:patcho.olec@gmail.com"
              className="text-muted-foreground transition-colors hover:text-primary"
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
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30">
          <div className="mt-2 h-3 w-1.5 rounded-full bg-muted-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
