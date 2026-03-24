"use client"

import { useEffect, useState } from "react"
import { useSound } from "@/hooks/use-sound"

const techStack = [
  {
    name: "React",
    icon: "⚛️",
    color: "#61DAFB",
    category: "Frontend",
    description: "UI Component Library",
  },
  {
    name: "Next.js",
    icon: "▲",
    color: "#000000",
    category: "Frontend",
    description: "React Framework",
  },
  {
    name: "TypeScript",
    icon: "📘",
    color: "#3178C6",
    category: "Languages",
    description: "Type-Safe JS",
  },
  {
    name: "Node.js",
    icon: "🟢",
    color: "#339933",
    category: "Backend",
    description: "Server Runtime",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "#47A248",
    category: "Database",
    description: "NoSQL Database",
  },
  {
    name: "PostgreSQL",
    icon: "🐘",
    color: "#336791",
    category: "Database",
    description: "Relational DB",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "#06B6D4",
    category: "Styling",
    description: "Utility-First CSS",
  },
  {
    name: "Express",
    icon: "⚡",
    color: "#000000",
    category: "Backend",
    description: "Web Framework",
  },
  {
    name: "Git",
    icon: "📦",
    color: "#F05032",
    category: "Tools",
    description: "Version Control",
  },
  {
    name: "REST APIs",
    icon: "🔌",
    color: "#FF6B6B",
    category: "Backend",
    description: "API Development",
  },
  {
    name: "JavaScript",
    icon: "💛",
    color: "#F7DF1E",
    category: "Languages",
    description: "Web Programming",
  },
  {
    name: "HTML/CSS",
    icon: "🌐",
    color: "#E34F26",
    category: "Frontend",
    description: "Web Structure",
  },
]

export function HobbyCharacters() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const playSound = useSound()

  useEffect(() => {
    // Stagger animation on mount
    techStack.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index])
      }, index * 100)
    })
  }, [])

  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills & Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className={`skill-card relative group cursor-pointer transition-all duration-500 ${
              visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            onMouseEnter={() => playSound("hover")}
          >
            <div
              className="relative p-6 rounded-2xl border border-border bg-card/80 backdrop-blur-sm
                         hover:scale-105 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                         flex flex-col items-center justify-center text-center gap-3 h-full min-h-[180px]"
              style={{
                borderColor: tech.color + "40",
              }}
            >
              {/* Tech Icon */}
              <div
                className="text-5xl md:text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{
                  textShadow: `0 0 20px ${tech.color}80`,
                }}
              >
                {tech.icon}
              </div>

              {/* Tech Name & Category */}
              <div className="space-y-1">
                <h4 className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                    {tech.category}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)`,
                }}
              />

              {/* Sparkles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div
                  className="sparkle absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    top: "20%",
                    left: "20%",
                    animation: "sparkle 2s ease-in-out infinite",
                  }}
                />
                <div
                  className="sparkle absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    top: "60%",
                    right: "20%",
                    animation: "sparkle 2s ease-in-out infinite 0.5s",
                  }}
                />
                <div
                  className="sparkle absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    bottom: "20%",
                    left: "50%",
                    animation: "sparkle 2s ease-in-out infinite 1s",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
