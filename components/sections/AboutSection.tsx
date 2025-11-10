"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motionPresets";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Resume } from "@/types/resume";

export function AboutSection({ resume }: { resume: Resume }) {
  const { summary, contact, links } = resume;

  return (
    <Section id="about" title="About me" eyebrow="Introduction">
      <div className="grid md:grid-cols-3 gap-6 relative">
        {/* soft corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-16 size-40 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,hsl(var(--brand)/0.12)_0%,transparent_70%)]"
        />

        {/* summary */}
        <motion.div className="md:col-span-2" {...fadeUp(0)}>
          <Card>
            <p className="leading-8">
              {summary ||
                "Computer Science graduate passionate about AI, data-driven systems, and optimization."}
            </p>
          </Card>
        </motion.div>

        {/* quick facts */}
        <motion.div {...fadeUp(0.05)}>
          <Card>
            <ul className="space-y-2 text-sm">
              {contact.location ? (
                <li>
                  <strong>Based:</strong> {contact.location}
                </li>
              ) : null}

              {/* ملیت توی آبجکت نبود، پس اگر خواستی بعداً به types اضافه کن */}
              {/* <li>
                <strong>Nationality:</strong> Iranian
              </li> */}

              {contact.phone ? (
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${contact.phone}`}
                    className="underline decoration-dotted"
                  >
                    {contact.phone}
                  </a>
                </li>
              ) : null}
              {contact.birth ? (
                <li>
                  <strong>Date of Birth:</strong> {contact.birth}
                </li>
              ) : null}
              {contact.email ? (
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline decoration-dotted"
                  >
                    {contact.email}
                  </a>
                </li>
              ) : null}

             

              

              
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
