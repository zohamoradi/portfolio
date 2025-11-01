"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Resume } from "@/types/resume";

export function HobbiesSection({ resume }: { resume: Resume }) {
  const hobbies = resume?.hobbies ?? [];

  return (
    <Section id="hobbies" title="Hobbies & Interests" eyebrow="Beyond work">
      {hobbies.length === 0 ? (
        <p className="text-[hsl(var(--muted))]">
          No hobbies listed in the resume.
        </p>
      ) : (
        <motion.div
          className="flex flex-wrap gap-3 justify-center md:justify-start"
          {...fadeUp(0)}
        >
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              viewport={{ once: false }}
            >
              <Card className="px-4 py-2 text-sm font-medium text-center bg-gradient-to-b from-gray-50/40 to-white/5 dark:from-gray-900/40 dark:to-gray-800/20 hover:-translate-y-0.5 transition-transform duration-200">
                {hobby}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </Section>
  );
}
