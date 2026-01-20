"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "KAGED SPIRIT",
    subtitle: "Landing Page + Pré-save",
    description:
      "Landing page criada do zero com sistema de pré-save integrado ao Supabase. Design escuro, minimalista e responsivo.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://kaged-uy.vercel.app",
    githubUrl: "https://github.com/Felibread/kaged.uy",
  },
  {
    title: "GE Solar",
    subtitle: "Aluguel de Energia Solar",
    description:
      "Landing page focada em conversão, performance e clareza. Projeto comercial para empresa de energia solar.",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.gesolar.com.br/aluguel-de-energia-solar",
  },
  {
    title: "AFN Acessibilidades",
    subtitle: "FIAP / CCR Mobilidade",
    description:
      "Interface acessível criada em sprint acadêmica para parceira CCR Mobilidade. Foco em usabilidade e inclusão.",
    techs: ["HTML", "CSS", "JavaScript", "Node.js", "API REST", "Figma"],
    githubUrl: "https://github.com/Felibread/sprint-3-webdev.git",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projetos" className="relative py-24">
      {/* Glow de fundo */}
      <div className="absolute inset-x-0 top-0 h-40 bg-primary/5 blur-3xl" />

      <div className="container relative z-10 px-6">
        <div className="mx-auto max-w-6xl text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Projetos em <span className="text-gradient">Destaque</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-purple" />
            <p className="mx-auto max-w-lg text-muted-foreground">
              Soluções reais para problemas reais. Do conceito à produção.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="group flex h-full flex-col rounded-2xl border-gradient bg-card p-6 transition-all duration-300 hover:bg-muted/20 hover-lift"
              >
                {/* Top */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Projeto ao vivo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-left text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Techs */}
                <div className="mt-auto flex flex-wrap gap-2 border-t border-border/50 pt-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted/50 px-2 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
