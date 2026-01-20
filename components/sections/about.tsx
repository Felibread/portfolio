"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />

      <div className="container relative z-10 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm tracking-widest text-primary"
          >
            SOBRE MIM
          </motion.p>

          <motion.h2
            variants={item}
            className="mb-6 text-4xl md:text-5xl font-bold"
          >
            Desenvolvedor focado em{" "}
            <span className="text-gradient">performance & experiência</span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mx-auto mb-8 h-1 w-16 rounded-full bg-gradient-purple"
          />

          <motion.p
            variants={item}
            className="mb-6 text-lg text-muted-foreground leading-relaxed"
          >
            Sou desenvolvedor Full Stack, estudante de{" "}
            <span className="text-foreground font-medium">
              Análise e Desenvolvimento de Sistemas na FIAP
            </span>
            , com foco em criar aplicações modernas, escaláveis e bem
            estruturadas.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Trabalho principalmente com{" "}
            <span className="text-foreground font-medium">
              React, Next.js, TypeScript e Tailwind CSS
            </span>
            , aplicando conceitos de UX, design system e código limpo tanto em
            projetos pessoais quanto acadêmicos e na minha própria marca.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
