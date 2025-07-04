// src/constants/techStack.ts


import type { ReactNode } from "react"


export const techStackIem = [
  { name: "Node.js", icon: "🟢", color: "text-green-600" },
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-700" },
  { name: "FastAPI", icon: "⚡", color: "text-green-500" },
  { name: "Tailwind", icon: "🎨", color: "text-cyan-500" },
  { name: "Docker", icon: "🐳", color: "text-blue-600" },
  { name: "GitHub", icon: "🐙", color: "text-gray-700 dark:text-gray-300" },
  { name: "TypeScript", icon: "📘", color: "text-blue-600" },
];



export interface TechStackItem {
  name: string
  color: string
  icon: ReactNode
}

export const techStack: TechStackItem[] = [
  {
    name: "Node.js",
    color: "#3C873A",
    icon: (
      <svg viewBox="0 0 128 128" width={32} height={32} fill="#3C873A">
        <path d="M64 0l55.2 31.88v64.24L64 128 8.77 96.12V31.88zM37.05 84.65..." />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    icon: (
      <svg viewBox="0 0 48 48" width={32} height={32}>
        <path
          fill="#38BDF8"
          d="M12 14c4-8 16-8 20 0 4 8-4 12-8 12-4 0-6-2-8-4..."
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 128 128" width={32} height={32} fill="black">
        <path d="M64 0C28.65 0 0 28.65 0 64s28.65 64 64 64 64-28.65..." />
      </svg>
    ),
  },
  // Add more icons similarly
]
