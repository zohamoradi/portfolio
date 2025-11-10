// lib/resume.ts
import type { Resume } from "@/types/resume";

export const resume: Resume = {
  photo: "/me.jpg",
  name: "Zoha Moradi",
  title: "Computer Science Graduate • ML & Optimization Enthusiast",

  contact: {
    email: "zoha.a.moradi@gmail.com",
    phone: "+989108082577",
    location: "Tehran, Iran",
    birth: "03/12/1998",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/zohamoradi",
    website: "https://zohamoradi.info",
    github: "https://github.com/zohamoradi",
    cv: "/cv.pdf",
  },

  summary:
    "Computer Science graduate with strong analytical and programming skills, passionate about intelligent systems, data-driven technologies, and real-world problem solving. Seeking to advance my expertise in machine learning, data science, and advanced computational methods, with the goal of contributing to innovative, research-oriented developments in technology and artificial intelligence.",

  projects: [
    {
      title: "Personal Portfolio Website",
      period: "2024",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      description:
        "Responsive personal website to showcase projects, skills, and background; clean UI, smooth navigation, and performance optimizations.",
      url: "https://zohamoradi.info",
      repo: "https://github.com/zohamoradi/portfolio",
    },
    {
      title: "Library Database Management",
      period: "2022",
      stack: ["SQL", "Database Design", "MySQL"],
      description:
        "Designed and implemented a library management system to handle book loans, track availability, and organize records.",
    },
    {
      title: "Academic Presentations (AI & Optimization)",
      period: "2021 — 2023",
      stack: ["Research", "Optimization", "AI"],
      description:
        "Prepared and presented: Applications of AI in Network Optimization; GPU processors and their applications in ML; and Data Envelopment Analysis (DEA) in Computer Science.",
    },
    {
      title: "Group Therapy Startup Plan",
      period: "2019 — 2023",
      stack: ["Entrepreneurship", "Business Modeling"],
      description:
        "Developed and presented a business plan for group therapy with emphasis on community benefits and operational models (Entrepreneurship course project).",
    },
    {
      title: "Academic Translation Projects (EN → FA)",
      period: "2019 — 2023",
      stack: ["Technical Writing", "Translation"],
      description:
        "Contributed to the Persian translation of selected chapters of the textbook “Basic Linear Algebra” and translated multiple academic essays from English to Persian.",
    },
  ],

  skills: [
    // Programming & Web
    "Python",
    "C++",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    // Data & DB
    "SQL / MySQL",
    "Data Analysis",
    // Optimization & AI
    "Mathematical Optimization",
    "Combinatorial Optimization",
    "DEA (Data Envelopment Analysis)",
    "Introductory Machine Learning",
    // Tools & Workflow
    "Git",
    // Soft Skills
    "Problem Solving",
    "Teamwork",
    "Leadership",
    "Communication",
    "Attention to Detail",
  ],

  skillGroups: [
    {
      label: "Programming",
      skills: ["Python", "C++",],
    },
   
    {
      label: "Data & Optimization",
      skills: [
        "SQL / MySQL",
        "Data Analysis",
        "Mathematical Optimization",
        "Combinatorial Optimization",
        "DEA (Data Envelopment Analysis)",
        "Introductory Machine Learning",
      ],
    },
    {
      label: "Research Interests",
      skills: [
        "Applied Machine Learning",
        "Data Science",
        "Project Scheduling",
        "Resource Allocation Models",
        "Software Engineering & Systems Design",
        "Artificial Intelligence",
      ],
    },
    {
      label: "Personal skills",
      skills: [
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Communication",
        "Attention to Detail",
      ],
    },
  ],

  experience: [
    {
      title: "Teaching Assistant — Fundamentals of Entrepreneurship",
      org: "Islamic Azad University, Science & Research Branch (SRBIAU)",
      location: "Tehran, Iran",
      period: "2022 — 2023",
      bullets: [
        "Reviewed assignments and projects and provided constructive feedback.",
        "Supported students by answering questions and clarifying course concepts.",
        "Assisted the instructor in preparing and organizing course materials.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Sc. in Computer Science",
      org: "Islamic Azad University, Science & Research Branch – Tehran, Iran",
      location: "Tehran, Iran",
      period: "Sep 2018 — Jul 2023",
      bullets: [
        "Final grade: 16.05 / 20 (EQF 6).",
        "Selected courses: Computer Networks, Nonlinear Optimization, Combinatorial Optimization, Advanced Programming (C++), Database, Fundamentals of Entrepreneurship.",
        "Presentations: Applications of AI in Network Optimization; GPU processors in ML; DEA and its applications in Computer Science.",
        "Translations: Contributed to Persian translation of chapters from “Basic Linear Algebra” and translated multiple academic essays (EN → FA).",
      ],
    },
    {
      degree: "High School Diploma in Mathematics & Physics",
      org: "NODET (National Organization for Development of Exceptional Talents)",
      location: "Bojnord, Iran",
      period: "2013 — 2017",
      bullets: [],
    },
  ],

  languages: [
    { name: "Persian (Farsi)", level: "Native" },
    {
      name: "English",
      level: "Listening C2; Reading/Production/Interaction/Writing C1",
    },
  ],

  certifications: [
    {
      name: "Python Programming",
      issuer: "Amanj Academy (Presential)",
    },
    {
      name: "Web Development",
      issuer: "Amanj Academy (Presential)",
    },
  ],

  hobbies: ["Yoga", "Badminton", "Hiking", "Culinary Arts", "Music", "Film"],

  references: [
    {
      name: "Assoc. Prof. Mohsen Rostamy-Malkhalifeh",
      org: "SRBIAU, Tehran, Iran",
      email: "rostamy.m.malkhalifeh@gmail.com",
      note: "Supervised: Entrepreneurship Fundamentals, Undergraduate Project, Combinatorial Optimization.",
    },
    {
      name: "Asst. Prof. Dr. Zahra Cheraghali",
      org: "SRBIAU, Tehran, Iran",
      email: "zcheraghali.zahra@gmail.com",
      note: "Courses: Dynamic Optimization, Nonlinear Optimization, Database.",
    },
  ],
} as const;
