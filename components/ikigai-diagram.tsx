"use client"

export function IkigaiDiagram() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-6 text-center">My Ikigai - Finding Purpose</h3>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Venn Diagram */}
        <div className="relative w-full max-w-xl aspect-square flex-shrink-0">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Define gradients and filters */}
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Four circles representing Ikigai quadrants */}
            {/* Top - What You Love (Hobbies) */}
            <circle cx="200" cy="120" r="100" fill="hsl(var(--chart-1))" opacity="0.3" filter="url(#glow)" />

            {/* Right - What You're Good At (Skills) */}
            <circle cx="280" cy="200" r="100" fill="hsl(var(--chart-2))" opacity="0.3" filter="url(#glow)" />

            {/* Bottom - What the World Needs */}
            <circle cx="200" cy="280" r="100" fill="hsl(var(--chart-3))" opacity="0.3" filter="url(#glow)" />

            {/* Left - What You Can Be Paid For */}
            <circle cx="120" cy="200" r="100" fill="hsl(var(--chart-4))" opacity="0.3" filter="url(#glow)" />

            {/* Center circle for Ikigai */}
            <circle cx="200" cy="200" r="35" fill="hsl(142, 76%, 36%)" opacity="0.5" filter="url(#glow)" />

            {/* Labels */}
            <text x="200" y="60" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              What I LOVE           </text>
            <text x="200" y="80" textAnchor="middle" className="fill-muted-foreground text-xs">
              Hobbies
            </text>

            <text x="350" y="200" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              What I am  
            </text>
            <text x="350" y="215" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              GOOD AT
            </text>

            <text x="200" y="350" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              What the World NEEDS
            </text>

            <text x="50" y="200" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              What I Can
            </text>
            <text x="50" y="215" textAnchor="middle" className="fill-foreground text-sm font-semibold">
              Be PAID For
            </text>

            {/* Center Ikigai text */}
            <text x="200" y="205" textAnchor="middle" className="fill-foreground text-base font-bold">
              IKIGAI
            </text>
          </svg>
        </div>

        {/* Legend with details */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: "hsl(var(--chart-1))", opacity: 0.6 }}
              />
              <div>
                <h4 className="font-semibold mb-1">What I Love</h4>
                <p className="text-sm text-muted-foreground">
                  Building web applications, Solving complex problems, Creating intuitive UIs, Learning new technologies,
                  Open-source contributions, Clean code architecture, Tech communities
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: "hsl(var(--chart-2))", opacity: 0.6 }}
              />
              <div>
                <h4 className="font-semibold mb-1">What I'm Good At</h4>
                <p className="text-sm text-muted-foreground">
                  Full-stack development, React/Next.js, Node.js, TypeScript, Database design, API development,
                  Responsive design, Performance optimization
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: "hsl(var(--chart-3))", opacity: 0.6 }}
              />
              <div>
                <h4 className="font-semibold mb-1">What the World Needs</h4>
                <p className="text-sm text-muted-foreground">
                  Scalable web solutions, Digital transformation, Accessible websites, Fast and reliable applications,
                  User-centric experiences, Modern business tools
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                style={{ backgroundColor: "hsl(var(--chart-4))", opacity: 0.6 }}
              />
              <div>
                <h4 className="font-semibold mb-1">What I Can Be Paid For</h4>
                <p className="text-sm text-muted-foreground">
                  Custom web development, E-commerce solutions, Portfolio websites, API development, Web application
                  development, Technical consulting
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-full flex-shrink-0"
                style={{ backgroundColor: "hsl(142, 76%, 36%)", opacity: 0.7 }}
              />
              <p className="text-sm italic text-muted-foreground">
                My Ikigai lies at the intersection: Building dynamic, scalable web solutions that transform ideas into
                exceptional digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
