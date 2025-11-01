"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Resume } from "@/types/resume";

export default function SkillsSection({ resume }: { resume: Resume }) {
  const skillGroups = resume?.skillGroups ?? [];
  const flatSkills = resume?.skills ?? [];

  return (
    <Section id="skills" title="Skills" eyebrow="Toolbox">
      {skillGroups.length > 0 ? (
        <div className="grid lg:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <Card
              key={group.label}
              className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl bg-gradient-to-b from-gray-50/40 to-white/5 dark:from-gray-900/40 dark:to-gray-800/20"
            >
              {/* soft radial glow in the corner */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full blur-2xl bg-[radial-gradient(circle_at_center,hsl(var(--brand)/0.18)_0%,transparent_70%)]"
              />

              {/* header */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wide text-[hsl(var(--brand))] bg-[hsl(var(--brand)/0.08)] border border-[hsl(var(--brand)/0.4)] rounded-full px-2 py-1">
                  <span className="size-1.5 rounded-full bg-[hsl(var(--brand))] shadow-[0_0_8px_hsl(var(--brand)/0.8)]" />
                  {group.label}
                </div>
              </div>

              {/* skills list */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: groupIdx * 0.1 + i * 0.03,
                      duration: 0.25,
                    }}
                    viewport={{ once: false }}
                  >
                    <Badge className="text-sm leading-none">{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        // fallback: اگه skillGroups نداشت ولی skills داشت
        <div className="flex flex-wrap gap-2">
          {flatSkills.map((skill, i) => (
            <Badge key={skill} className="text-sm leading-none">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </Section>
  );
}
