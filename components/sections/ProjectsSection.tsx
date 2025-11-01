"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import Link from "next/link";
import { Resume } from "@/types/resume";

export function ProjectsSection({ resume }: { resume: Resume }) {
  const projects = resume?.projects ?? [];

  return (
    <Section id="projects" title="Projects" eyebrow="Selected work">
      <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0)}>
        {projects.length === 0 ? (
          <p className="text-[hsl(var(--muted))]">
            No projects added to the resume yet.
          </p>
        ) : (
          projects.map((p, idx) => (
            <motion.div
              key={p.title ?? idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card className="h-full flex flex-col hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {p.title ?? "Untitled project"}
                    </h3>
                    {p.period ? (
                      <p className="text-[hsl(var(--muted))]">{p.period}</p>
                    ) : null}
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {(p.stack ?? []).map((s) => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                  </div>
                </div>

                {p.description ? (
                  <p className="mt-3 leading-7 text-[hsl(var(--foreground))]/90">
                    {p.description}
                  </p>
                ) : null}

                <div className="mt-4 flex gap-3 flex-wrap">
                  {p.url ? (
                    <Link
                      href={p.url}
                      className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </Link>
                  ) : null}

                  {p.repo ? (
                    <Link
                      href={p.repo}
                      className="btn-ghost hover:-translate-y-0.5 transition-transform duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </Link>
                  ) : null}
                </div>
              </Card>
            </motion.div>
          ))
        )}
      </motion.div>
    </Section>
  );
}
