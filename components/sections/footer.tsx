"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      {/* Glow suave */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-primary/5 blur-3xl" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="text-foreground font-medium">
              Felipe Damasceno
            </span>
            . Todos os direitos reservados.
          </p>

          <p className="text-sm text-muted-foreground">
            Desenvolvido com{" "}
            <span className="text-foreground font-medium">
              React, Next.js e TypeScript
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
