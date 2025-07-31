"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./section-heading"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "NoteBook+ AI Platform",
    description:
      "Co-founded and developed NoteBook+, an AI-powered note-taking and knowledge management platform. Built with Flask backend and Next.js frontend, featuring intelligent note summarization, semantic search, and real-time collaboration. Deployed on GCP and Azure with auto-scaling infrastructure serving thousands of users.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Flask", "Next.js", "Python", "TypeScript", "GCP", "Azure", "OpenAI API", "PostgreSQL", "Redis"],
    demoLink: "https://notebookplusai.com",
    codeLink: "#",
  },
  {
    title: "AI-Driven Recommendation Engine",
    description:
      "Designed a machine learning-based recommendation system to analyze user viewing patterns and provide personalized content suggestions on a streaming platform. This AI-driven feature improved user engagement by delivering more relevant content and increasing time spent on the platform.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL", "AWS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Ndiziflix Streaming Platform",
    description:
      "Key developer for Ndiziflix, a streaming service for African original films and series. Implemented the backend in Laravel and front-end in Angular, handling user accounts, media library management, and real-time video streaming. Deployed the platform on AWS for scalability and reliability, supporting a growing base of active subscribers.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Laravel", "Angular", "AWS", "CloudFront", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Retail POS System",
    description:
      "Developed a cloud-based Point of Sale application for a multi-store retailer, including modules for inventory management, sales tracking, and real-time analytics. Utilized Django and React to create a responsive, intuitive interface, which streamlined checkout processes and improved sales reporting efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Django", "React", "Redux", "MySQL", "Docker"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Custom ERP Solution",
    description:
      "Implemented a tailored ERP system for a mid-sized enterprise by customizing ERPNext (Python-based). Configured modules for finance, HR, and supply chain, and integrated additional features per client needs. The solution automated previously manual processes and improved cross-department data visibility and coordination.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "ERPNext", "JavaScript", "MariaDB", "Docker"],
    demoLink: "#",
    codeLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading>Featured Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-40 md:h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              {(project.demoLink !== "#" || project.codeLink !== "#") && (
                <div className="p-6 pt-0">
                  <div className="flex gap-2">
                    {project.demoLink !== "#" && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          View Live
                        </a>
                      </Button>
                    )}
                    {project.codeLink !== "#" && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

