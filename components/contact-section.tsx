import { Button } from "@/components/ui/button"
import { LinkedinIcon, GithubIcon, MailIcon } from "./simple-icons"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Connect</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance leading-relaxed">
          I'm always interested in hearing about new web development opportunities, freelance projects, or collaborations.
          Let's create something amazing together.
        </p>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" asChild className="gap-2 min-w-[200px]">
            <a href="mailto:mdanifarooq@gmail.con">
              <MailIcon className="w-5 h-5" />
              Send Email
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="gap-2 min-w-[200px] bg-transparent">
            <a href="https://www.linkedin.com/in/daniyal-farooq-37aaa6264/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-border">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/daniyal-farooq-37aaa6264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Daniyal-farooq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Daniyal Farooq. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
