"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { Resume } from "@/types/resume";

export function EducationSection({ resume }: { resume: Resume }) {

  const educationItems =
    resume?.education?.map((edu) => ({
      title: edu.degree,
      org: edu.org,
      location: edu.location,
      period: edu.period,
      bullets: edu.bullets ?? [],
    })) ?? [];

  return (
    <Section id="education" title="Education" eyebrow="Academic">
      <motion.div {...fadeUp(0)}>
        <Timeline items={educationItems} />
      </motion.div>
    </Section>
  );
}
