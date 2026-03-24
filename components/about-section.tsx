import { LinkedinIcon, GithubIcon, MailIcon } from "./simple-icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HobbyCharacters } from "./hobby-characters"
import { IkigaiDiagram } from "./ikigai-diagram"
import { ProjectsSection } from "@/components/projects-section"


export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Text Content - 60% */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p className="text-pretty">
                I'm a passionate Full Stack Web Developer specializing in creating dynamic, feature-rich, and scalable
                websites. I transform ideas into functional digital experiences, delivering custom portfolios and web
                solutions tailored to client needs.
              </p>
              <p className="text-pretty">
                With extensive experience in modern web technologies, I've successfully delivered multiple projects
                ranging from e-commerce platforms to custom web applications. My focus is on building clean, efficient,
                and user-friendly websites that help businesses establish a strong online presence.
              </p>
              <p className="text-pretty">
                I'm passionate about creating responsive designs, implementing modern frameworks, and solving complex
                technical challenges. Whether it's building a portfolio from scratch, developing a full-stack application,
                or optimizing website performance, I bring dedication and attention to detail to every project.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/daniyal-farooq-37aaa6264/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/Daniyal-farooq" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <GithubIcon className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:mdanifarooq@gmail.con" rel="noopener noreferrer" className="gap-2">
                  <MailIcon className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image - 40% */}
          <div className="md:col-span-2">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-border shadow-2xl">
              <Image
                src="/profile-pic.png"
                alt="Daniyal Farooq - Professional portrait"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
        </div>

                <ProjectsSection />


        <div className="mt-20 space-y-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <HobbyCharacters />
          </div>

          {/* Ikigai Venn Diagram */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <IkigaiDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
