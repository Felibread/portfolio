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
    <section id="contato" className="relative overflow-hidden py-24">
      {/* Background glow */}
      <motion.div
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative z-10 px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-3xl font-bold md:text-5xl"
          >
            Vamos construir algo{' '}
            <span className="text-gradient">juntos.</span>
          </motion.h2>

          {/* Gradient bar */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-purple"
          />

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-lg text-lg text-muted-foreground"
          >
            Interessado em trabalhar juntos ou tem alguma pergunta?
            Entre em contato através dos canais abaixo.
          </motion.p>

          {/* Contacts grid */}
          <motion.div
            variants={containerVariants}
            className="mb-12 grid gap-4 sm:grid-cols-2"
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
                  bg-card
                  p-5
                  text-left
                  border-gradient
                  hover:bg-muted/30
                  hover-lift
                "
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <contact.icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="truncate text-sm font-medium text-foreground">
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
            <Mail className="h-5 w-5" />
            Enviar Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
