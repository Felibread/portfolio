"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Front-end",
    techs: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Back-end & Dados",
    techs: [
      "Node.js",
      "Python",
      "Java",
      "C# (.NET)",
      "SQL / PL-SQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    title: "Ferramentas",
    techs: [
      "Git & GitHub",
      "APIs REST",
      "Figma",
      "Scrum / Ágil",
      "Cloud & DevOps",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const TechStack = () => {
  return (
    <section id="stack" className="relative py-24">
      {/* Glow */}
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
              Stack <span className="text-gradient">Tecnológica</span>
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-purple" />
            <p className="mx-auto max-w-lg text-muted-foreground">
              Tecnologias que utilizo para criar soluções completas, modernas e escaláveis.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-10 md:grid-cols-3"
          >
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <h3 className="mb-6 font-mono text-sm text-primary">
                  {`// ${category.title}`}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {category.techs.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm text-foreground transition-all hover:border-primary/50 hover:bg-muted"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
