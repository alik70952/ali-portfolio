export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Mobile",
    skills: ["Flutter basics", "React Native / Expo experiments", "Capacitor Android"],
  },
  {
    title: "Backend & Data",
    skills: ["Python", "SQLite", "pandas", "Excel Processing"],
  },
  {
    title: "CMS & eCommerce",
    skills: ["WordPress", "WooCommerce"],
  },
  {
    title: "IoT & Embedded",
    skills: ["ESP32", "Arduino", "RF433", "OLED", "Relay Control"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Codex"],
  },
];
