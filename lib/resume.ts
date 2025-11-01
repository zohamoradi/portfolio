// lib/resume.ts
import type { Resume } from "@/types/resume";

export const resume: Resume = {
  photo: "/me.jpg",
  name: "Zoha Moradi",
  title: "Computer Science Graduate",

  contact: {
    email: "zoha.a.moradi@gmail.com",
    phone: "+989108082577",
    location: "Tehran, Iran",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/zohamoradi",
    website: "https://zohamoradi.info",
    github: "https://github.com/zohamoradi/portfolio",
    cv: "/cv.pdf",
  },

  summary:
    "Computer Science graduate with a strong foundation in programming (Python, C++), databases, and mathematical/combinatorial optimization. Passionate about AI, data-driven systems, and applying optimization models to real-world problems.",

  projects: [
    {
      title: "Personal Portfolio Website",
      period: "2024",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      description:
        "Responsive personal website to showcase academic background, projects, skills, and research interests. Focused on clean UI, smooth navigation, and performance.",
      url: "https://zohamoradi.vercel.app",
    },
    {
      title: "Library Database Management",
      period: "2022",
      stack: ["SQL", "Database Design"],
      description:
        "Designed and implemented a database for a library to manage loans, check book availability, and organize records.",
    },
    {
      title: "Academic Presentations (AI & Optimization)",
      period: "2021 — 2023",
      stack: ["Research", "Optimization"],
      description:
        "Prepared and presented topics such as applications of AI in network optimization, GPU processors in ML, and Data Envelopment Analysis (DEA) in computer science.",
    },
  ],

  skills: [
    "Python",
    "C++",
    "SQL / MySQL",
    "Web Development",
    "Data Analysis",
    "Mathematical Optimization",
    "Combinatorial Optimization",
    "AI (introductory applications)",
    "Git",
  ],

  skillGroups: [
    {
      label: "Programming",
      skills: ["Python", "C++", "SQL / MySQL"],
    },

    {
      label: "Data & Optimization",
      skills: [
        "Data Analysis",
        "Mathematical Optimization",
        "Combinatorial Optimization",
        "DEA (Data Envelopment Analysis)",
      ],
    },
    {
      label: "Tools",
      skills: ["Git"],
    },
    {
      label: "Interests",
      skills: [
        "Applied Machine Learning",
        "Project Scheduling",
        "Resource Allocation Models",
        "Software Engineering & Systems Design",
      ],
    },
  ],

  experience: [
    {
      title: "Teaching Assistant – Fundamentals of Entrepreneurship",
      org: "Islamic Azad University, Science & Research Branch (SRBIAU)",
      location: "Tehran, Iran",
      period: "2022 — 2023",
      bullets: [
        "Reviewed student assignments and projects and provided constructive feedback.",
        "Supported students by answering questions and clarifying course concepts.",
        "Assisted the course instructor in preparing and organizing course materials.",
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
        "Strong performance in Computer Networks, Nonlinear Optimization, Combinatorial Optimization, Advanced Programming Concepts (C++), and Database.",
        "Presentations: Applications of AI in Network Optimization; GPU processors in ML; DEA and its applications in computer science.",
        "Contributed to Persian translation of selected chapters of 'Basic Linear Algebra' and translated multiple academic essays (EN → FA).",
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
    { name: "English", level: "C1–C2 (listening C2, other skills C1)" },
  ],

  certifications: [
    {
      name: "Python Programming",
      issuer: "Amanj Academy (Presential)",
      date: "Dec 31, 2019",
    },
    {
      name: "Web Development",
      issuer: "Amanj Academy (Presential)",
      date: "Dec 31, 2020",
    },
  ],

  hobbies: [
    "Yoga",
    "Badminton",
    "Gym & fitness",
    "Long walks and outdoor activities",
  ],

  references: [
    {
      name: "Assoc. Prof. Mohsen Rostamy-Malkhalifeh",
      org: "SRBIAU, Tehran, Iran",
      email: "rostamy.m.malkhalifeh@gmail.com",
      note: "Supervised courses: Entrepreneurship Fundamentals, Undergraduate Project, Combinatorial Optimization.",
    },
    {
      name: "Asst. Prof. Dr. Zahra Cheraghali",
      org: "SRBIAU, Tehran, Iran",
      email: "zcheraghali.zahra@gmail.com",
      note: "Courses: Dynamic Optimization, Nonlinear Optimization, Database.",
    },
  ],
} as const;
