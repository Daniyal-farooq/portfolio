import projectsData from "@/data/projects.json"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const featuredProjects = projectsData.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A selection of recent work showcasing design and development across various industries
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} featured={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
