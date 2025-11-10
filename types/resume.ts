// types/resume.ts

export interface Resume {
  photo?: string;
  name: string;
  title: string;
  contact: Contact;
  links: Links;
  summary?: string;
  projects?: Project[];
  skills?: string[];
  skillGroups?: SkillGroup[];
  experience?: Experience[];
  education?: Education[];
  languages?: Language[];
  certifications?: Certification[];
  hobbies?: string[];
  references?: Reference[];
}

export interface Contact {
  email: string;
  phone?: string;
  location?: string;
  birth: string;
}

export interface Links {
  linkedin: string;
  github: string;
  website: string;
  cv: string;
}

export interface Project {
  title: string;
  period?: string;
  stack?: string[];
  description?: string;
  url?: string;
  repo?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Experience {
  title: string;
  org: string;
  location?: string;
  period?: string;
  bullets?: string[];
}

export interface Education {
  degree: string;
  org: string;
  location?: string;
  period?: string;
  bullets?: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
}

export interface Reference {
  name: string;
  org?: string;
  email?: string;
  note?: string;
}
