import {
  ArrowUpRight,
  Github,
  Globe2,
  Layers3,
  CalendarDays,
  CircleCheck,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import type { Project } from "../types/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const accentStyles = {
    orange: {
      glow: "bg-orange-200/40",
      icon: "text-ember",
      line: "bg-ember",
    },

    violet: {
      glow: "bg-violet-200/40",
      icon: "text-violet-600",
      line: "bg-violet-500",
    },

    aqua: {
      glow: "bg-aqua/30",
      icon: "text-teal-600",
      line: "bg-teal-500",
    },
  };

  const accent = accentStyles[project.accent];

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 80,
              scale: 0.96,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        project-showcase
        group
        relative
        min-h-[620px]
        overflow-hidden
        rounded-[2.5rem]
        border
        border-ink/10
        bg-paper/70
        p-6
        shadow-[0_30px_100px_rgba(20,20,20,0.07)]
        backdrop-blur-md
        transition-all
        duration-700
        hover:-translate-y-2
        hover:border-ember/30
        hover:shadow-[0_40px_120px_rgba(20,20,20,0.12)]
        sm:p-8
        lg:p-10
      "
    >
      {/* =====================================================
          SPECTRAL ATMOSPHERE
      ===================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.7,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
              }
        }
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: 0.1,
        }}
        className={`
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          ${accent.glow}
          blur-3xl
          transition
          duration-1000
          group-hover:scale-125
        `}
      />

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                scale: 0.7,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                scale: 1,
              }
        }
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
        }}
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-violet-200/30
          blur-3xl
          transition
          duration-1000
          group-hover:scale-125
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-1/3
          top-1/2
          h-48
          w-48
          rounded-full
          bg-aqua/20
          blur-3xl
          opacity-50
          transition
          duration-1000
          group-hover:scale-150
        "
      />


      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                x: -20,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                x: 0,
              }
        }
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="relative z-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">

          <motion.span
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.5, 1, 0.5],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              h-2
              w-2
              rounded-full
              ${accent.line}
            `}
          />

          <span className="font-mono text-[10px] font-bold tracking-[.25em] text-ember">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>

        </div>


        {project.featured && (
          <motion.span
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.05,
                  }
            }
            className="
              rounded-full
              border
              border-ember/20
              bg-ember/10
              px-3
              py-1
              font-mono
              text-[8px]
              uppercase
              tracking-[.2em]
              text-ember
            "
          >
            Featured
          </motion.span>
        )}

      </motion.div>


      {/* =====================================================
          PROJECT META
      ===================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
              }
        }
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.25,
        }}
        className="relative z-10 mt-5 flex flex-wrap items-center gap-4"
      >

        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-ink/40">

          <CalendarDays size={12} />

          {project.year}

        </span>


        <span className="h-3 w-px bg-ink/15" />


        <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.2em] text-ink/40">

          <CircleCheck size={12} />

          {project.status}

        </span>

      </motion.div>


      {/* =====================================================
          PROJECT VISUAL
      ===================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 30,
                scale: 0.98,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
                scale: 1,
              }
        }
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mt-7
          flex
          h-64
          items-center
          justify-center
          overflow-hidden
          rounded-[1.8rem]
          border
          border-ink/10
          bg-[#e9e1d5]/80
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_20%_20%,rgba(255,100,70,.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(150,120,255,.18),transparent_35%),radial-gradient(circle_at_60%_90%,rgba(80,210,200,.16),transparent_35%)]
          "
        />


        {/* Browser mockup */}

        <motion.div
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.035,
                  rotate: -1,
                }
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-5
            overflow-hidden
            rounded-xl
            border
            border-ink/10
            bg-paper/90
            shadow-2xl
          "
        >

          {/* Browser bar */}

          <div className="flex h-8 items-center gap-1.5 border-b border-ink/10 px-3">

            <span className="h-2 w-2 rounded-full bg-ember/70" />

            <span className="h-2 w-2 rounded-full bg-violet-400/70" />

            <span className="h-2 w-2 rounded-full bg-aqua/70" />

            <div className="ml-3 h-2 w-24 rounded-full bg-ink/10" />

          </div>


          {/* Abstract interface */}

          <div className="grid h-[calc(100%-2rem)] grid-cols-[.3fr_1fr] gap-3 p-3">

            <div className="rounded-lg bg-ink/[.035] p-2">

              <div className="space-y-2">

                <span className="block h-2 w-full rounded bg-ink/10" />

                <span className="block h-2 w-4/5 rounded bg-ink/10" />

                <span className="block h-2 w-full rounded bg-ember/25" />

                <span className="block h-2 w-3/5 rounded bg-ink/10" />

              </div>

            </div>


            <div className="space-y-3">

              <div className="h-10 rounded-lg bg-ember/10" />

              <div className="grid grid-cols-3 gap-2">

                <div className="h-16 rounded-lg bg-violet-200/35" />

                <div className="h-16 rounded-lg bg-blue-200/35" />

                <div className="h-16 rounded-lg bg-orange-200/35" />

              </div>

              <div className="h-20 rounded-lg bg-ink/[.035]" />

            </div>

          </div>

        </motion.div>


        {/* Floating icon */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            z-10
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            border
            border-white/70
            bg-white/70
            shadow-xl
            backdrop-blur
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:rotate-6
          "
        >

          <Layers3
            size={30}
            className={accent.icon}
          />

        </motion.div>

      </motion.div>


      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 25,
              }
        }
        whileInView={
          shouldReduceMotion
            ? undefined
            : {
                opacity: 1,
                y: 0,
              }
        }
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mt-8"
      >

        <span className="font-mono text-[9px] uppercase tracking-[.22em] text-ink/40">
          {project.category}
        </span>


        <h3
          className="
            mt-3
            max-w-2xl
            font-display
            text-3xl
            font-bold
            tracking-tight
            text-ink
            sm:text-4xl
          "
        >
          {project.title}
        </h3>


        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/55">
          {project.description}
        </p>


        {/* Technologies */}

        <div className="mt-6 flex flex-wrap gap-2">

          {project.tech.map((technology, techIndex) => (

            <motion.span
              key={technology}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.85,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                delay: 0.45 + techIndex * 0.05,
              }}
              className="
                rounded-full
                border
                border-ink/10
                bg-white/40
                px-3
                py-2
                text-[10px]
                font-medium
                text-ink/55
                transition-all
                duration-300
                group-hover:border-ember/20
              "
            >
              {technology}
            </motion.span>

          ))}

        </div>


        {/* =================================================
            LINKS
        ================================================= */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.live && (

            <motion.a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-ink
                px-5
                py-3
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-paper
                transition-colors
                duration-300
                hover:bg-ember
                hover:text-ink
              "
            >
              Live project
              <Globe2 size={13} />
            </motion.a>

          )}


          {project.github && (

            <motion.a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-ink/10
                bg-white/40
                px-5
                py-3
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-ink/65
                transition-all
                duration-300
                hover:border-ink/25
                hover:bg-white/70
              "
            >
              Source
              <Github size={13} />
            </motion.a>

          )}

        </div>

      </motion.div>


      {/* =====================================================
          CORNER ARROW
      ===================================================== */}

      <motion.div
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                rotate: 45,
                scale: 1.1,
              }
        }
        className="
          absolute
          bottom-8
          right-8
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-ink/10
          bg-white/40
          transition-colors
          duration-500
          group-hover:border-ember/30
          group-hover:bg-ember
        "
      >

        <ArrowUpRight
          size={17}
          className="
            text-ink/40
            transition
            group-hover:text-white
          "
        />

      </motion.div>

    </motion.article>
  );
}