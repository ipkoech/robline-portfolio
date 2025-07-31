import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">Robline Kipkoech Yegon</h2>
            <p className="text-muted-foreground mt-2">Full Stack Developer</p>
          </div>

          <div className="flex space-x-4 md:space-x-6">
            <Link
              href="https://github.com/ipkoech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/robline-yegon-142631339/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/robby_yego"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:roblineyegon@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Evataa. All rights reserved.
          </p>

          <nav className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 justify-center">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Education
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

