"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Resume } from "@/types/resume";

export function ExtraSection({ resume }: { resume: Resume }) {
  const languages = resume?.languages ?? [];
  const certifications = resume?.certifications ?? [];

  return (
    <Section id="extra" title="Languages & Certifications" eyebrow="More">
      <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0)}>
        {/* Languages */}
        <Card className="hover:-translate-y-1 transition-transform duration-200">
          <h3 className="font-semibold mb-2">Languages</h3>
          {languages.length > 0 ? (
            <ul className="space-y-1 text-sm leading-relaxed">
              {languages.map((lang, i) => (
                <li key={i}>
                  {lang.name} — {lang.level}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-[hsl(var(--muted))]">
              No language data available.
            </p>
          )}
        </Card>

        {/* Certifications */}
        <Card className="hover:-translate-y-1 transition-transform duration-200">
          <h3 className="font-semibold mb-2">Certifications</h3>
          {certifications.length > 0 ? (
            <ul className="space-y-1 text-sm leading-relaxed">
              {certifications.map((cert, i) => (
                <li key={i}>
                  {cert.name}
                  {cert.issuer ? ` — ${cert.issuer}` : ""}
                  {cert.date ? ` (${cert.date})` : ""}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-[hsl(var(--muted))]">
              No certifications listed.
            </p>
          )}
        </Card>
      </motion.div>
    </Section>
  );
}
