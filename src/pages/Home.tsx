import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Mail,
  MapPin,
  Linkedin,
} from "lucide-react";

import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";

import {
  profile,
  skills,
  projects,
  experience,
  milestones,
} from "../data/portfolio";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => {
          const category = project.category.toLowerCase();
          const selected = filter.toLowerCase();

          if (selected === "full-stack") {
            return (
              category === "full-stack" ||
              category === "full stack"
            );
          }

          return category === selected;
        });

  const filters = [
    "All",
    "Full-Stack",
    "Frontend",
    "JavaScript",
    "React",
  ];

  return (
    <main className="overflow-hidden bg-paper text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-paper
          pt-28
          lg:pt-32
        "
      >
        {/* Background atmosphere */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-orange-300/35
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-100px]
            top-[-100px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-violet-300/35
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-150px]
            left-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-200/30
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-emerald-100/25
            blur-[110px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 lg:px-8">

          {/* Availability */}

          <div className="mb-14 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-aqua" />

            <span
              className="
                font-mono
                text-[10px]
                font-bold
                uppercase
                tracking-[.28em]
                text-ink/55
              "
            >
              Available for opportunities
            </span>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

            {/* LEFT */}

            <div>

              <p
                className="
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[.3em]
                  text-ink/55
                "
              >
                Johannesburg / South Africa
              </p>

              <h1
                className="
                  mt-8
                  font-display
                  text-[clamp(5rem,11vw,10rem)]
                  font-black
                  leading-[.78]
                  tracking-[-.07em]
                  text-ink
                "
              >
                Qiyaam
                <br />
                <span className="font-serif italic font-medium">
                  Moodley.
                </span>
              </h1>

              {/* Accent dot */}

              <div
                className="
                  mt-20
                  h-8
                  w-8
                  rounded-full
                  bg-ember
                  shadow-[0_0_50px_rgba(255,96,65,.35)]
                "
              />

              <div className="mt-16 max-w-2xl">

                <p
                  className="
                    font-mono
                    text-[11px]
                    font-bold
                    uppercase
                    leading-6
                    tracking-[.28em]
                    text-ink/75
                  "
                >
                  Aspiring Full-Stack
                  <br />
                  Developer
                </p>

                <p
                  className="
                    mt-7
                    max-w-xl
                    text-lg
                    leading-8
                    text-ink/65
                    sm:text-xl
                  "
                >
                  I'm learning by building interfaces, APIs and
                  products that turn ideas into something real.
                </p>

                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-3">

                  <a
                    href="#projects"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-ink
                      px-7
                      py-4
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-paper
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-ember
                      hover:text-ink
                    "
                  >
                    Explore the work
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href="/Qiyaam-Moodley-CV.pdf"
                    download
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-ink/15
                      bg-white/45
                      px-7
                      py-4
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-ink
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-ember/40
                      hover:bg-ember/10
                    "
                  >
                    Download CV
                    <Download size={14} />
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-ink/15
                      bg-white/35
                      px-7
                      py-4
                      text-[10px]
                      font-black
                      uppercase
                      tracking-wider
                      text-ink
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-ink/30
                      hover:bg-white/60
                    "
                  >
                    GitHub
                    <Github size={14} />
                  </a>

                </div>

                {/* Contact mini links */}

                <div className="mt-10 flex flex-wrap items-center gap-5">

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-ink/55
                      transition
                      hover:text-ink
                    "
                  >
                    <Linkedin size={17} />
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-ink/55
                      transition
                      hover:text-ink
                    "
                  >
                    <Mail size={17} />
                  </a>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[.15em]
                      text-ink/45
                    "
                  >
                    <MapPin size={15} />
                    Johannesburg
                  </span>

                </div>

              </div>
            </div>

            {/* RIGHT SYSTEM CARD */}

            <div
              className="
                relative
                min-h-[560px]
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/70
                bg-white/40
                p-7
                shadow-[0_30px_100px_rgba(30,30,30,.08)]
                backdrop-blur-xl
                sm:p-9
              "
            >

              {/* Card atmosphere */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-violet-300/25
                  blur-3xl
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-100px]
                  left-[-80px]
                  h-64
                  w-64
                  rounded-full
                  bg-orange-300/20
                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* System header */}

                <div className="flex items-center justify-between border-b border-ink/10 pb-5">

                  <span className="font-mono text-[10px] tracking-[.25em] text-ink/45">
                    &gt;_ QIYAAM.SYSTEM
                  </span>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.15em]
                      text-aqua
                    "
                  >
                    • ONLINE
                  </span>

                </div>

                {/* System details */}

                <div className="mt-9 space-y-8">

                  <div>
                    <p className="font-mono text-[10px] text-ink/30">
                      $ whoami
                    </p>

                    <p className="mt-2 font-mono text-sm text-ink/70">
                      qiyaam
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] text-ink/30">
                      $ location
                    </p>

                    <p className="mt-2 font-mono text-sm text-ink/70">
                      Johannesburg, ZA
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] text-ink/30">
                      $ stack
                    </p>

                    <div className="mt-3 space-y-2 font-mono text-sm text-ember">
                      <p>React · TypeScript</p>
                      <p>Node · Express</p>
                      <p>APIs · Git · Testing</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] text-ink/30">
                      $ current_mission
                    </p>

                    <div className="mt-3 space-y-2 font-mono text-sm text-ink/65">
                      <p>Learn.</p>
                      <p>Build.</p>
                      <p>Ship.</p>
                      <p>Repeat.</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] text-ink/30">
                      $ status
                    </p>

                    <p className="mt-3 font-mono text-sm text-aqua">
                      Building...
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Scroll indicator */}

          <div className="mt-16 flex flex-col items-center justify-center">

            <span
              className="
                font-mono
                text-[9px]
                uppercase
                tracking-[.3em]
                text-ink/35
              "
            >
              Scroll to enter
            </span>

            <ArrowDown
              size={14}
              className="mt-3 animate-bounce text-ink/30"
            />

          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <Section
        id="about"
        number="01"
        label="The person behind the code"
      >

        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">

          <div>
            <h2
              className="
                font-serif
                text-6xl
                font-medium
                italic
                tracking-tight
                text-ink
                sm:text-7xl
              "
            >
              progress.
            </h2>
          </div>

          <div className="max-w-3xl">

            <div className="space-y-7 text-base leading-8 text-ink/60">

              <p>
                I'm building my way into software development
                through practical work. My current focus is
                full-stack web development, from responsive
                React interfaces to backend APIs and the tools
                that make a project maintainable.
              </p>

              <p>
                Before development, I worked in logistics, stock
                receiving, customer support and data capturing.
                Those experiences gave me a foundation in
                accuracy, communication, ownership and staying
                useful when things get busy.
              </p>

              <p>
                I'm still early in the journey, but that is part
                of the point. This website is designed to grow
                alongside me as I build more, learn more and take
                on bigger challenges.
              </p>

            </div>

            <div className="mt-9 flex flex-wrap gap-3">

              {[
                "21 years old",
                "Johannesburg",
                "Melsoft Academy",
                "Full-Stack Journey",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-ink/10
                    bg-white/30
                    px-4
                    py-2
                    text-[10px]
                    font-medium
                    text-ink/50
                  "
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </Section>


      {/* =====================================================
          SKILLS
      ===================================================== */}

      <Section
        id="skills"
        number="02"
        label="Built / learning / experimenting"
      >

        <div className="text-center">

          <h2
            className="
              font-serif
              text-6xl
              font-medium
              italic
              tracking-tight
              text-ink
              sm:text-7xl
            "
          >
            learning to master.
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-ink/50
            "
          >
            My stack is growing as I move from fundamentals
            into building complete applications and
            understanding what happens behind the screen.
          </p>

        </div>

        <div
          className="
            mt-16
            grid
            overflow-hidden
            rounded-[2.5rem]
            border
            border-ink/10
            bg-white/25
            backdrop-blur-sm
            md:grid-cols-2
          "
        >

          {Object.entries(skills).map(([group, items], index) => (

            <div
              key={group}
              className="
                min-h-[220px]
                border-ink/10
                p-9
                md:nth-[odd]:border-r
                md:nth-[n+3]:border-t
              "
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-2xl text-ember">
                  {"</>"}
                </span>

                <span className="font-mono text-[9px] text-ink/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <h3 className="mt-8 text-xl font-bold text-ink">
                {group === "StateAndLogic"
                  ? "State & Logic"
                  : group === "QualityAndTools"
                    ? "Quality & Tools"
                    : group}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">

                {items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-ink/10
                      bg-white/35
                      px-4
                      py-2
                      text-[10px]
                      font-medium
                      text-ink/55
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          ))}

        </div>

      </Section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <Section
        id="projects"
        number="03"
        label="Built / learning / experimenting"
      >

        <div>

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>

              <h2
                className="
                  font-serif
                  text-6xl
                  font-medium
                  italic
                  tracking-tight
                  text-ink
                  sm:text-7xl
                "
              >
                built.
              </h2>

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-sm
                  leading-7
                  text-ink/50
                "
              >
                A growing collection of work from my Melsoft
                journey and beyond. Every project is another rep.
              </p>

            </div>

            {/* Filters */}

            <div className="flex flex-wrap gap-2">

              {filters.map((item) => {

                const active = filter === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`
                      rounded-full
                      border
                      px-5
                      py-3
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      transition-all
                      duration-300
                      ${
                        active
                          ? "border-transparent bg-ink text-paper"
                          : "border-ink/10 bg-white/25 text-ink/45 hover:border-ember/25 hover:text-ink"
                      }
                    `}
                  >
                    {item}
                  </button>
                );

              })}

            </div>

          </div>

          {/* Project cards */}

          <div className="mt-14 space-y-10">

            {filteredProjects.map((project, index) => (

              <div
                key={project.slug}
                className="project-scroll-item"
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>

            ))}

          </div>

        </div>

      </Section>


      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <Section
        id="journey"
        number="04"
        label="From where I started → where I'm going"
      >

        <div>

          <h2
            className="
              font-serif
              text-6xl
              font-medium
              italic
              tracking-tight
              text-ink
              sm:text-7xl
            "
          >
            journey.
          </h2>

          <div
            className="
              mt-14
              grid
              gap-4
              lg:grid-cols-4
            "
          >

            {milestones.map(([year, title, description]) => (

              <article
                key={year}
                className="
                  group
                  min-h-[280px]
                  rounded-[2rem]
                  border
                  border-ink/10
                  bg-white/25
                  p-7
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-ember/25
                  hover:bg-white/45
                "
              >

                <div className="flex items-center justify-between">

                  <span className="font-mono text-xs font-bold text-ember">
                    {year}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="
                      text-ink/20
                      transition
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-ember
                    "
                  />

                </div>

                <h3
                  className="
                    mt-10
                    text-2xl
                    font-bold
                    tracking-tight
                    text-ink
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-5
                    text-sm
                    leading-7
                    text-ink/50
                  "
                >
                  {description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </Section>


      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <Section
        id="experience"
        number="04.5"
        label="Real world → software"
      >

        <div className="space-y-0">

          {experience.map((item, index) => (

            <article
              key={`${item.company}-${item.role}`}
              className="
                grid
                gap-6
                border-t
                border-ink/10
                py-10
                lg:grid-cols-[.35fr_1fr_auto]
                lg:items-center
              "
            >

              <span className="font-mono text-xs text-ember">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>

                <p className="font-mono text-[10px] uppercase tracking-[.2em] text-ember">
                  {item.company}
                </p>

                <h3 className="mt-3 text-xl font-bold text-ink">
                  {item.role}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/50">
                  {item.description}
                </p>

              </div>

              <span className="font-mono text-[10px] uppercase tracking-[.15em] text-ink/35">
                {item.dates}
              </span>

            </article>

          ))}

        </div>

      </Section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Section
        id="contact"
        number="05"
        label="Got something in mind?"
      >

        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">

          {/* Contact copy */}

          <div>

            <h2
              className="
                font-serif
                text-6xl
                font-medium
                italic
                tracking-tight
                text-ember
                sm:text-7xl
              "
            >
              next build.
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-sm
                leading-8
                text-ink/55
              "
            >
              Open to junior developer opportunities,
              placements, collaborations and projects where
              I can contribute and keep growing.
            </p>

            <div className="mt-9 space-y-5">

              <a
                href={`mailto:${profile.email}`}
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-ink/55
                  transition
                  hover:text-ink
                "
              >
                <Mail size={17} />
                {profile.email}
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-ink/55
                  transition
                  hover:text-ink
                "
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-4
                  text-sm
                  text-ink/55
                  transition
                  hover:text-ink
                "
              >
                <Github size={17} />
                GitHub
              </a>

              <div className="flex items-center gap-4 text-sm text-ink/55">
                <MapPin size={17} />
                Johannesburg, South Africa
              </div>

            </div>

          </div>

          {/* Form */}

          <ContactForm />

        </div>

      </Section>


      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-t
          border-ink/10
          bg-paper
          py-32
        "
      >

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-orange-200/15
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p
            className="
              font-mono
              text-[9px]
              uppercase
              tracking-[.3em]
              text-ink/20
            "
          >
            End of current build
          </p>

          <h2
            className="
              mt-8
              font-display
              text-6xl
              font-black
              tracking-tight
              text-ink
              sm:text-8xl
            "
          >
            More to{" "}
            <span className="font-serif italic font-medium text-ember">
              come.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-sm
              leading-8
              text-ink/45
            "
          >
            This portfolio isn't finished because neither is the
            journey. Every new project, skill and achievement
            gets another commit.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[10px] text-ink/25">

            <span>
              BUILD
            </span>

            <span className="text-ember">
              →
            </span>

            <span>
              LEARN
            </span>

            <span className="text-ember">
              →
            </span>

            <span>
              SHIP
            </span>

            <span className="text-ember">
              →
            </span>

            <span>
              REPEAT
            </span>

          </div>

        </div>

      </section>

    </main>
  );
}