'use client';

import { motion, type Variants } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

/* =========================
   Motion Variants
========================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0.3, 0.6, 0.3],
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

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'patcho.olec@gmail.com',
      href: 'mailto:patcho.olec@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'felipe-olecsiuc-damasceno',
      href: 'https://www.linkedin.com/in/felipe-olecsiuc-damasceno',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Felibread',
      href: 'https://github.com/Felibread',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+55 11 95038-3539',
      href: 'https://wa.me/5511950383539',
    },
  ];

  return (
    <section id="contato" className="relative overflow-hidden py-20 md:py-28">
      {/* Background glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            Vamos construir algo{' '}
            <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              juntos.
            </span>
          </motion.h2>

          {/* Gradient bar */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-8 h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500"
          />

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-2xl text-base text-gray-400 sm:text-lg"
          >
            Interessado em trabalhar juntos ou tem alguma pergunta?
            Entre em contato através dos canais abaixo.
          </motion.p>

          {/* Contacts grid */}
          <motion.div
            variants={containerVariants}
            className="mx-auto mb-10 grid max-w-3xl gap-4 sm:grid-cols-2"
          >
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                variants={itemVariants}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  rounded-xl
                  bg-gray-900/50
                  border
                  border-gray-800
                  p-5
                  text-left
                  transition-all
                  duration-300
                  hover:bg-gray-800/50
                  hover:border-purple-500/50
                  hover:-translate-y-1
                "
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-purple-500/10 p-2.5 text-purple-500 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                    <contact.icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">
                      {contact.label}
                    </p>
                    <p className="truncate text-sm font-medium text-white">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={itemVariants}
            href="mailto:patcho.olec@gmail.com"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-linear-to-r
              from-purple-500
              to-pink-500
              px-8
              py-3.5
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-purple-500/25
            "
          >
            <Mail className="h-5 w-5" />
            Enviar Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;