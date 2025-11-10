"use client";

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerParent, staggerChild } from "@/lib/motionPresets";
import { Badge } from "@/components/Badge";
import { Resume } from "@/types/resume";

export function HeroSection({
  photo,
  cvUrl,
  isExternalCV,
  resume,
}: {
  photo: string;
  cvUrl: string;
  isExternalCV: boolean;
  resume: Resume;
}) {
  const fullName = resume?.name || "Your Name";
  const [firstName, ...rest] = fullName.split(" ");
  const lastName = rest.join(" ");

  const linkedin = resume?.links?.linkedin;
  const github = resume?.links?.github;
  const email = resume?.contact?.email;

  // تگ‌ها رو از رزومه بگیریم و اگه نبود، یه fallback بذاریم
  const tags = resume?.skills?.slice(0, 6) || [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Optimization",
    "AI",
  ];

  return (
    <section className="relative pt-10 pb-16">
      {/* background aura behind hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex justify-center z-0"
      >
        <div className="h-[400px] w-[600px] max-w-full rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--brand)/0.18)_0%,transparent_70%)] dark:opacity-30" />
      </div>

      {/* content */}
      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[280px,1fr]">
        {/* Portrait */}
        <motion.div
          className="mx-auto md:mx-0 w-48 h-48 md:w-64 md:h-64 relative"
          {...fadeUp(0)}
        >
          {/* Glow frame */}
          <div
            aria-hidden
            className="absolute -inset-3 rounded-[2rem] blur-2xl bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.12),_transparent_60%)]"
          />
          <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <Image
              src={photo}
              alt={`Portrait of ${fullName}`}
              width={1600}
              height={1500}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="text-center md:text-left space-y-6"
          {...fadeUp(0.05)}
        >
          <div className="inline-flex items-center gap-2 badge">
            <span className="size-2 rounded-full bg-[hsl(var(--brand))] shadow-[0_0_8px_hsl(var(--brand)/0.8)]" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {firstName}{" "}
            {lastName ? (
              <span className="text-[hsl(var(--brand))]">{lastName}</span>
            ) : null}
          </h1>

          <p className="text-lg sm:text-xl text-[hsl(var(--muted))] max-w-3xl md:max-w-2xl md:pr-6 mx-auto md:mx-0 leading-relaxed">
            {/* اولویت با summary */}
            {resume.summary
              ? resume.summary
              : resume.title
              ? `${resume.title} focused on AI, optimization, and modern web.`
              : "Computer Science graduate interested in AI, optimization, and web development."}
          </p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-3"
            variants={staggerParent}
            // initial="initial"
            // whileInView="whileInView"
            // viewport={{ once: false, amount: 0.2 }}
          >
            {/* CV download: internal files use <a download>, external links open in new tab */}
            <motion.div variants={staggerChild}>
              {isExternalCV ? (
                <Link
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Download className="size-4" aria-hidden /> Download CV
                </Link>
              ) : (
                <a href={cvUrl} download className="btn-primary">
                  <Download className="size-4" aria-hidden /> Download CV
                </a>
              )}
            </motion.div>

            {linkedin ? (
              <motion.div variants={staggerChild}>
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <Linkedin className="size-4" aria-hidden />{" "}
                  <span>LinkedIn</span>
                </Link>
              </motion.div>
            ) : null}

            {github ? (
              <motion.div variants={staggerChild}>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <Github className="size-4" aria-hidden /> <span>GitHub</span>
                </Link>
              </motion.div>
            ) : null}

            {email ? (
              <motion.div variants={staggerChild}>
                <Link
                  href={`mailto:${email}`}
                  className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <Mail className="size-4" aria-hidden /> <span>Email</span>
                </Link>
              </motion.div>
            ) : null}

            <motion.div variants={staggerChild}>
              <Link
                href="#projects"
                className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
              >
                <span>See projects</span>{" "}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick tags */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-2 pt-1"
            {...fadeUp(0.15)}
          >
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
