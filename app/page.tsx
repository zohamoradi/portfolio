"use client";

import { resume } from "@/lib/resume";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { ExtraSection } from "@/components/sections/ExtraSection";
import { ReferencesSection } from "@/components/sections/RefrenceSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";

export default function Home() {
  const CV_URL = resume?.links?.cv ?? "/cv_Moradi.pdf";
  const isExternalCV = typeof CV_URL === "string" && CV_URL.startsWith("http");

  const PHOTO_URL = resume?.photo ?? "/me.jpg";

  return (
    <main className="space-y-24">
      <HeroSection
        photo={PHOTO_URL}
        cvUrl={CV_URL}
        isExternalCV={isExternalCV}
        resume={resume}
      />

      <AboutSection resume={resume} />

      <EducationSection resume={resume} />

      <ExperienceSection resume={resume} />

      <ProjectsSection resume={resume} />

      <SkillsSection resume={resume} />

      <ExtraSection resume={resume} />
      {/* <ReferencesSection resume={resume} /> */}
      <HobbiesSection resume={resume} />
    </main>
  );
}
