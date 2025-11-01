import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { resume } from "@/lib/resume";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="container-prose py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[hsl(var(--muted))]">
          © {new Date().getFullYear()} Zoha Moradi. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <Link href={`mailto:${resume.contact.email}`} className="btn-ghost">
            <Mail className="size-4" /> Email
          </Link>
          <Link href={resume.links.linkedin} className="btn-ghost">
            <Linkedin className="size-4" /> LinkedIn
          </Link>
          <Link href={resume.links.github} className="btn-ghost">
            <Github className="size-4" /> GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
