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
    <section id="stack" className="relative py-20 md:py-28">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-purple-500/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Stack <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tecnológica</span>
            </h2>
            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400">
              Tecnologias que utilizo para criar soluções completas, modernas e escaláveis.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {categories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <h3 className="mb-6 font-mono text-sm text-purple-500">
                  {`// ${category.title}`}
                </h3>

                <div className="flex flex-wrap justify-center gap-2">
                  {category.techs.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-default rounded-lg border border-gray-800 bg-gray-900/40 px-3 py-2 text-sm text-white transition-all hover:border-purple-500/50 hover:bg-gray-800/50"
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