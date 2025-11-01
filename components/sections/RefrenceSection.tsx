"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import Link from "next/link";
import { Resume } from "@/types/resume";

export function ReferencesSection({ resume }: { resume: Resume }) {
  const references = resume?.references ?? [];

  return (
    <Section id="references" title="References" eyebrow="Professional contacts">
      <motion.div className="grid md:grid-cols-2 gap-6" {...fadeUp(0)}>
        {references.length === 0 ? (
          <p className="text-[hsl(var(--muted))]">
            No references listed in the resume.
          </p>
        ) : (
          references.map((ref, i) => (
            <motion.div
              key={ref.email ?? i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Card className="h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200">
                <div>
                  <h3 className="text-lg font-semibold">{ref.name}</h3>
                  <p className="text-[hsl(var(--muted))] mb-2">{ref.org}</p>
                  {ref.note && (
                    <p className="text-sm leading-relaxed mb-3 text-[hsl(var(--foreground))]/90">
                      {ref.note}
                    </p>
                  )}
                </div>

                {/* {ref.email && (
                  <Link
                    href={`mailto:${ref.email}`}
                    className="text-sm underline decoration-dotted text-[hsl(var(--brand))] hover:text-[hsl(var(--brand)/0.8)]"
                  >
                    {ref.email}
                  </Link>
                )} */}
              </Card>
            </motion.div>
          ))
        )}
      </motion.div>
    </Section>
  );
}
