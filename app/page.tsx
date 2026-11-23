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
  FaAngular,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
  SiSpringboot,
  SiRabbitmq,
  SiRedis,
  SiTypescript,
  SiPrometheus,
} from "react-icons/si";
import { ThemeToggle } from "./components/ThemeToggle";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
              bash - matheus@fedora-linux
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

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-100 font-sans tracking-tight">
                Matheus Luiz Iost
              </h1>
              <p className="text-sm text-emerald-400 font-sans font-medium mt-1">
                Lead Frontend & Full-Stack Software Engineer
              </p>
            </div>

            <p className="text-base text-slate-300 font-sans leading-relaxed">
              Full-Stack Engineer specializing in{" "}
              <span className="text-emerald-400 font-medium">Java 25 / Spring Boot 4</span>,{" "}
              <span className="text-emerald-400 font-medium">NestJS 11</span>,{" "}
              <span className="text-emerald-400 font-medium">React 19 / Next.js</span>, and{" "}
              <span className="text-emerald-400 font-medium">Angular 22 (SSR)</span>.
              I architect high-concurrency REST APIs, event-driven distributed systems (
              <span className="text-emerald-400 font-medium">RabbitMQ</span>), distributed
              caching (<span className="text-emerald-400 font-medium">Redis</span>), cloud storage (
              <span className="text-emerald-400 font-medium">AWS S3</span>), and full-stack
              observability (<span className="text-emerald-400 font-medium">Prometheus & Grafana</span>).
            </p>

            <p className="text-xs text-slate-400 pt-1 font-sans">
              Focus: Clean Architecture, Event-Driven Microservices, Security Hardening & CI/CD • Fluent in English
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

              <a
                href="https://github.com/theusinhoiost"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-slate-700 text-slate-300 hover:bg-slate-800 rounded font-medium transition-all inline-flex items-center gap-2"
              >
                <FaGithub /> GitHub
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
            {/* 1. Development, Frontend & Backend */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-l-2 border-emerald-500 pl-3">
                <h3 className="text-lg font-bold">Languages, Frontend & Backend</h3>
              </div>
              <p className="text-xs text-(--text-muted)">
                Strongly typed full-stack frameworks and persistence
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaJava className="text-2xl text-[#f89820]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Java 25</span>
                    <span className="text-[10px] text-(--text-muted)">JVM & Concurrency</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiSpringboot className="text-2xl text-[#6db33f]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Spring Boot 4</span>
                    <span className="text-[10px] text-(--text-muted)">Security, JPA & Flyway</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiNestjs className="text-2xl text-[#e0234e]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">NestJS 11</span>
                    <span className="text-[10px] text-(--text-muted)">TypeORM, RBAC & Cron</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiTypescript className="text-2xl text-[#3178c6]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">TypeScript 5/6</span>
                    <span className="text-[10px] text-(--text-muted)">Node.js & Strict Typing</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaReact className="text-2xl text-[#00d8ff]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">React 19</span>
                    <span className="text-[10px] text-(--text-muted)">TanStack Query & Zustand</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiNextdotjs className="text-2xl" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Next.js 15 / 16</span>
                    <span className="text-[10px] text-(--text-muted)">App Router & SSR</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaAngular className="text-2xl text-[#dd0031]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Angular 22</span>
                    <span className="text-[10px] text-(--text-muted)">Signals, SSR & Spartan UI</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiPostgresql className="text-2xl text-[#336791]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">PostgreSQL 17</span>
                    <span className="text-[10px] text-(--text-muted)">Locks, Indexes & Relational</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3 col-span-2">
                  <SiTailwindcss className="text-2xl text-cyan-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      Tailwind CSS v4 + shadcn/ui + Radix UI
                    </span>
                    <span className="text-[10px] text-(--text-muted)">
                      Accessible Design Systems, Recharts & next-intl (i18n)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Infrastructure, Messaging & DevOps */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-l-2 border-purple-500 pl-3">
                <h3 className="text-lg font-bold">DevOps, Messaging, Cloud & QA</h3>
              </div>
              <p className="text-xs text-(--text-muted)">
                Distributed systems, telemetry, security, and automated pipelines
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiRabbitmq className="text-2xl text-[#ff6600]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">RabbitMQ</span>
                    <span className="text-[10px] text-(--text-muted)">Topic Exchange & DLQ</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiRedis className="text-2xl text-[#dc382d]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Redis 7</span>
                    <span className="text-[10px] text-(--text-muted)">Cache-Aside & Sessions</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaDocker className="text-2xl text-[#2496ed]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Docker & Nginx</span>
                    <span className="text-[10px] text-(--text-muted)">Multi-Stage & API Gateway</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaAws className="text-2xl text-[#ff9900]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">AWS S3</span>
                    <span className="text-[10px] text-(--text-muted)">Presigned URLs & Storage</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <SiPrometheus className="text-2xl text-[#e6522c]" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Observability</span>
                    <span className="text-[10px] text-(--text-muted)">Prometheus & Grafana Cloud</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3">
                  <FaLinux className="text-2xl text-orange-500" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">Linux & Security</span>
                    <span className="text-[10px] text-(--text-muted)">OAuth2, JWT, Helmet & RBAC</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-(--border-color) bg-(--bg-secondary)/20 flex items-center gap-3 col-span-2">
                  <VscGear className="text-2xl text-slate-400" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">
                      CI/CD Pipelines & Automated Testing
                    </span>
                    <span className="text-[10px] text-(--text-muted)">
                      GitHub Actions, Jenkins, Vitest, Jest, Playwright E2E, Railway & Vercel
                    </span>
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
            {/* FoodRush Ecosystem - Featured Full-Stack & Event-Driven Microservice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between group md:col-span-2"
            >
              <div>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                      FoodRush — Event-Driven Delivery Ecosystem
                    </h3>
                    <span className="text-xs text-(--text-muted)">
                      Distributed Backend (Java 25 / Spring Boot 4) + SSR Web App & KDS (Angular 22)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                      In Production
                    </span>
                    <span className="text-[11px] font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2.5 py-0.5 rounded">
                      Java 25 • Spring Boot 4.1 • Angular 22
                    </span>
                  </div>
                </div>

                <p className="text-sm text-(--text-muted) mb-4 leading-relaxed">
                  High-concurrency food delivery ecosystem engineered from the ground up. The backend features an{" "}
                  <strong>Nginx 1.27 API Gateway</strong> (rate limiting & Gzip), event-driven order routing with{" "}
                  <strong>RabbitMQ</strong> (Topic Exchanges & Dead Letter Queues for kitchen, courier, and customer timeline events),{" "}
                  <strong>Redis 7</strong> Cache-Aside, <strong>PostgreSQL 17</strong> with <strong>Flyway</strong> migrations, and{" "}
                  <strong>Pessimistic & Optimistic Locking</strong> to prevent inventory overselling. Includes{" "}
                  <strong>Haversine</strong> dynamic delivery fee calculation, <strong>OpenCage / BrasilAPI</strong> postal code geocoding,{" "}
                  multi-tenant RBAC ownership verification, <strong>RFC 7807 (ProblemDetail)</strong> error handling, and{" "}
                  <strong>Prometheus (Micrometer) + Grafana</strong> business & JVM dashboards.
                </p>

                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                  The frontend is built with <strong>Angular 22 (SSR & Signals)</strong>, <strong>Tailwind CSS v4</strong>, and{" "}
                  <strong>Spartan UI (Helm)</strong>, delivering tailored RBAC interfaces for Customers, Partner Restaurants, Couriers, and Admins, a real-time{" "}
                  <strong>Kitchen Display System (KDS)</strong>, proximity restaurant discovery (<em>Near Me</em> with Google Maps/OpenStreetMap integration), and idempotent checkout.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {[
                    "Java 25",
                    "Spring Boot 4.1",
                    "Angular 22 (SSR & Signals)",
                    "RabbitMQ (DLX/DLQ)",
                    "Redis 7",
                    "PostgreSQL 17",
                    "Flyway",
                    "Nginx Gateway",
                    "Prometheus & Grafana",
                    "OpenCage Geocoder",
                    "Docker & Railway",
                    "Vitest",
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

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <a
                  href="https://food-rush-web.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href="https://github.com/theusinhoiost/FoodRush-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> Backend (Java / Spring)
                </a>
                <a
                  href="https://github.com/theusinhoiost/FoodRush-Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> Frontend (Angular 22)
                </a>
              </div>
            </motion.div>

            {/* BearDelivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-(--border-color) bg-(--bg-secondary)/20 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                      BearDelivery SaaS
                    </h3>
                    <span className="text-xs text-(--text-muted)">
                      Lead Frontend Engineer • Multi-Restaurant Delivery Platform
                    </span>
                  </div>

                  <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                    In Production
                  </span>
                </div>

                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                  Production SaaS food delivery platform built with <strong>Next.js 15</strong> and <strong>React 19</strong>.
                  Architected real-time order tracking and Kitchen Display alerts using <strong>Socket.IO (WebSockets)</strong>,{" "}
                  <strong>TanStack React Query</strong>, and <strong>Zustand</strong>. Neutralized critical{" "}
                  <strong>SSRF security vulnerabilities</strong> in BFF API routes, resolved stale cart state desynchronization,
                  standardized paginated API adapters, and stabilized CI/CD pipelines across{" "}
                  <strong>2,020+ unit tests (Vitest)</strong> and <strong>Playwright E2E</strong> suites.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {[
                    "Next.js 15",
                    "React 19",
                    "TypeScript",
                    "TanStack Query",
                    "Zustand",
                    "Socket.IO",
                    "Tailwind CSS v4",
                    "Vitest (2020+ tests)",
                    "Playwright E2E",
                    "Sentry",
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

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://likedeliveryapp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href="https://github.com/Bear-System-Brasil/Bear-delivery-app-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> Repository
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
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
                      PetTracker SaaS
                    </h3>
                    <span className="text-xs text-(--text-muted)">
                      Pet Healthcare, Proactive Cron Engine & Cloud Telemetry
                    </span>
                  </div>

                  <span className="text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded shrink-0">
                    In Production
                  </span>
                </div>

                <p className="text-sm text-(--text-muted) mb-6 leading-relaxed">
                  Full-stack pet health management platform built with <strong>NestJS 11</strong>, <strong>Next.js 16</strong>,{" "}
                  <strong>React 19</strong>, and <strong>PostgreSQL</strong>. Features <strong>Google OAuth 2.0</strong> (single-use hashed code exchange),
                  rotating <strong>JWT Refresh Tokens</strong>, <strong>RBAC</strong>, <strong>AES-256-CTR</strong> encryption, and{" "}
                  <strong>AWS S3</strong> private storage with pre-signed URLs. Includes a daily{" "}
                  <strong>Cron Job</strong> for automated vaccine reminders, <strong>Prometheus & Grafana Cloud (Alloy)</strong> telemetry,{" "}
                  <strong>GitHub Actions CI/CD</strong>, interactive <strong>Recharts</strong> analytics, and <strong>next-intl</strong> (EN/PT) localization.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {[
                    "NestJS 11",
                    "Next.js 16",
                    "React 19",
                    "PostgreSQL",
                    "TypeORM",
                    "Google OAuth 2.0 & JWT",
                    "AWS S3",
                    "Prometheus & Grafana Cloud",
                    "GitHub Actions CI/CD",
                    "next-intl (i18n)",
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

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://pet-tracker-web.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href="https://github.com/theusinhoiost/Pet-Tracker-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> Backend (NestJS)
                </a>
                <a
                  href="https://github.com/theusinhoiost/Pet-Tracker-Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-(--accent) hover:underline font-semibold"
                >
                  <FaGithub className="text-base" /> Frontend (Next.js)
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
          © 2026 Matheus Luiz Iost — Built with Next.js 16, React 19 & Tailwind CSS v4
        </p>
      </footer>
    </div>
  );
}
