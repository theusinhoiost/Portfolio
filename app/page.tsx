"use client";

import { motion } from "framer-motion";
import { VscGear } from "react-icons/vsc";
import {
  FaDocker,
  FaLinux,
  FaReact,
  FaTerminal,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiSpringboot,
  SiRabbitmq,
  SiRedis,
} from "react-icons/si";
import { ThemeToggle } from "./components/ThemeToggle";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-(--accent) selection:text-white">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 nav-blur border-b border-(--border-color)/50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tight text-(--accent)"
          >
            Matheus
            <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
          </motion.div>

          <div className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-8 font-medium text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-(--accent) transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
      >
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl w-full rounded-xl overflow-hidden bg-[#1e1e1e] border border-slate-800 shadow-xl"
        >
          <div className="bg-[#2d2d2d] px-4 py-2.5 border-b border-slate-800 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-slate-400 text-xs ml-2 font-mono">
              bash - matheus@linux-mint
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-emerald-400 text-sm"
            >
              $ whoami
            </motion.p>

            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-sans tracking-tight">
              Matheus Luiz Iost
            </h1>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Software Engineer focused on{" "}
              <span className="text-emerald-400 font-medium">React / Next.js</span>,{" "}
              <span className="text-emerald-400 font-medium">NestJS</span>, and the{" "}
              <span className="text-emerald-400 font-medium">Java / Spring Boot</span> ecosystem.
              I build secure REST APIs, event-driven distributed systems (RabbitMQ),
              caching solutions (Redis), and containerized deployments with{" "}
              <span className="text-emerald-400 font-medium">Docker</span>.
            </p>

            <p className="text-xs text-slate-400 pt-1 font-sans">
              Current focus: Clean Architecture, Event-Driven Systems & Observability • Fluent in English
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 flex flex-wrap gap-3 font-sans text-sm"
            >
              <a
                href="#projects"
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-medium transition-all"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-5 py-2 border border-slate-700 text-slate-300 hover:bg-slate-800 rounded font-medium transition-all"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 border-t border-(--border-color)/40">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-2xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            <FaTerminal className="text-emerald-500 text-xl" />
            Tech Radar
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 1. Development & Backend */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-l-2 border-emerald-500 pl-3">
                <h3 className="text-lg font-bold">Development & Backend</h3>
              </div>
              <p className="text-xs text-(--text-muted)">Core languages and frameworks</p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaReact className="text-2xl text-[#00d8ff]" />
                  <span className="text-sm font-semibold">React</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiNextdotjs className="text-2xl" />
                  <span className="text-sm font-semibold">Next.js</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiNestjs className="text-2xl text-[#e0234e]" />
                  <span className="text-sm font-semibold">NestJS</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiSpringboot className="text-2xl text-[#6db33f]" />
                  <span className="text-sm font-semibold">Spring Boot</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaJava className="text-2xl text-[#f89820]" />
                  <span className="text-sm font-semibold">Java 25</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiPostgresql className="text-2xl text-[#336791]" />
                  <span className="text-sm font-semibold">PostgreSQL</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3 col-span-2">
                  <SiTailwindcss className="text-2xl text-cyan-400" />
                  <span className="text-sm font-semibold">Tailwind + shadcn/ui</span>
                </div>
              </div>
            </div>

            {/* 2. Infrastructure & DevOps */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-l-2 border-purple-500 pl-3">
                <h3 className="text-lg font-bold">DevOps, Messaging & Cloud</h3>
              </div>
              <p className="text-xs text-(--text-muted)">Distributed systems and infrastructure</p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaDocker className="text-2xl text-[#2496ed]" />
                  <span className="text-sm font-semibold">Docker</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiRabbitmq className="text-2xl text-[#ff6600]" />
                  <span className="text-sm font-semibold">RabbitMQ</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiRedis className="text-2xl text-[#dc382d]" />
                  <span className="text-sm font-semibold">Redis</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaLinux className="text-2xl text-orange-500" />
                  <span className="text-sm font-semibold">Linux</span>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3 col-span-2">
                  <VscGear className="text-2xl text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">CI/CD & Observability</span>
                    <span className="text-[10px] text-(--text-muted)">Prometheus, Grafana & Vercel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 border-t border-(--border-color)/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FoodRush API - Featured Microservice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between group md:col-span-2"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                      FoodRush API
                    </h3>
                    <span className="text-xs text-(--text-muted)">
                      Event-Driven Delivery Microservice & Observability
                    </span>
                  </div>

                  <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                    Java 25 & Spring Boot 4
                  </span>
                </div>

                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                  High-resilience, high-concurrency food delivery backend. Implements an event-driven architecture
                  with <strong>RabbitMQ</strong> (Topic Exchange and Dead Letter Queues for decoupled asynchronous dispatch of restaurants and couriers),
                  strategic caching with <strong>Redis</strong> (Cache-Aside pattern), database versioning via <strong>Flyway</strong>,
                  and concurrency control using optimistic and pessimistic locks. Includes comprehensive observability powered
                  by <strong>Prometheus</strong> with custom business metrics (Micrometer) and pre-provisioned <strong>Grafana</strong> dashboards.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {[
                    "Java 25",
                    "Spring Boot 4",
                    "RabbitMQ",
                    "Redis",
                    "PostgreSQL",
                    "Prometheus",
                    "Grafana",
                    "Flyway",
                    "Docker Compose",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono bg-(--bg-main) text-emerald-400 px-2.5 py-0.5 rounded border border-(--border-color)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/theusinhoiost/foodrush-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> View Code on GitHub
                </a>
              </div>
            </motion.div>

            {/* Bearlivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                    BearDelivery
                  </h3>

                  <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
                    In Production
                  </span>
                </div>

                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                  Full-stack food delivery platform running live in production. Built real-time order tracking
                  leveraging polling and WebSockets, resolved critical stale cart bugs (obsolete orderId desync)
                  that disrupted checkout, and fixed geolocation restaurant search queries.
                  Eliminated 200+ build/lint errors to achieve rock-solid deployment pipelines.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["React", "Next.js", "NestJS", "PostgreSQL", "WebSocket", "TypeScript"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono bg-(--bg-main) text-emerald-400 px-2.5 py-0.5 rounded border border-(--border-color)"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://beardelivery.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>

            {/* PetTracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-orange-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
                    PetTracker
                  </h3>

                  <span className="text-[11px] font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20 px-2 py-0.5 rounded">
                    Repository & Case Study
                  </span>
                </div>

                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                  Robust backend built with NestJS, TypeScript, TypeORM, and PostgreSQL.
                  Features secure JWT authentication with refresh token rotation and role-based access control (RBAC),
                  AWS S3 cloud storage integration for image uploads, and an interactive dashboard crafted with Next.js,
                  Tailwind CSS, and shadcn/ui.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {[
                    "NestJS",
                    "Next.js",
                    "PostgreSQL",
                    "TypeORM",
                    "JWT",
                    "AWS S3",
                    "shadcn/ui",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono bg-(--bg-main) text-orange-400 px-2.5 py-0.5 rounded border border-(--border-color)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/theusinhoiost/pet-tracker-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> View Code on GitHub (Frontend)
                </a>
                                <a
                  href="https://github.com/theusinhoiost/Pet-Tracker-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> View Code on GitHub (Backend)
                </a>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-(--bg-secondary)/30 py-12 border-t border-(--border-color)/50 text-center"
      >
        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a
            href="https://github.com/theusinhoiost"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-(--text-muted) hover:text-(--text-main) transition-colors"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/matheusiost/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-(--text-muted) hover:text-[#0a66c2] transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-xs text-(--text-muted)">
          © 2026 Matheus Luiz Iost — Built with Next.js & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}