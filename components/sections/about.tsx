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
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-black from-purple-500/5 via-transparent to-transparent opacity-40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={item}
            className="mb-3 font-mono text-xs sm:text-sm tracking-widest text-purple-500"
          >
            SOBRE MIM
          </motion.p>

          <motion.h2
            variants={item}
            className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Desenvolvedor focado em{" "}
            <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              performance & experiência
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="mx-auto mb-8 h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500"
          />

          <motion.p
            variants={item}
            className="mb-5 text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Sou desenvolvedor Full Stack, estudante de{" "}
            <span className="text-white font-medium">
              Análise e Desenvolvimento de Sistemas na FIAP
            </span>
            , com foco em criar aplicações modernas, escaláveis e bem
            estruturadas.
          </motion.p>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            Trabalho principalmente com{" "}
            <span className="text-white font-medium">
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