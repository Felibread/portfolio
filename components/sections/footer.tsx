"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-800 py-8">
      {/* Glow suave */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-purple-500/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          {/* Esquerda - Desenvolvido com */}
          <p className="text-sm text-gray-400">
            Desenvolvido com{" "}
            <span className="text-white font-medium">
              React, Next.js e TypeScript
            </span>
          </p>

          {/* Direita - Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">
              Felipe Damasceno
            </span>
            . Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;