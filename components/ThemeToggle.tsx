'use client';

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle(){
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(()=>{
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setDark(isDark);
  },[]);

  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    setDark(isDark);
  };

  if(!mounted) return null;

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="fixed bottom-5 right-5 btn bg-[hsl(var(--card))] shadow-soft"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      {dark ? "Light" : "Dark"}
    </button>
  );
}
