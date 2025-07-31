"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Star, ArrowUpRight, Bookmark, Eye } from "lucide-react"
import SectionHeading from "./section-heading"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "NoteBook+ AI Platform",
    description:
      "Co-founded and developed NoteBook+, an AI-powered note-taking and knowledge management platform. Built with Flask backend and Next.js frontend, featuring intelligent note summarization, semantic search, and real-time collaboration. Deployed on GCP and Azure with auto-scaling infrastructure serving thousands of users.",
    image: "/notebook.png?height=600&width=800",
    technologies: ["Flask", "Next.js", "Python", "TypeScript", "GCP", "Azure", "OpenAI API", "PostgreSQL", "Redis"],
    demoLink: "https://notebookplusai.com",
    codeLink: "#",
    featured: true,
    year: "2023",
    category: "AI Platform",
  },
  {
    title: "AI-Driven Recommendation Engine",
    description:
      "Designed a machine learning-based recommendation system to analyze user viewing patterns and provide personalized content suggestions on a streaming platform. This AI-driven feature improved user engagement by delivering more relevant content and increasing time spent on the platform.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Python", "TensorFlow", "Flask", "PostgreSQL", "AWS"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    year: "2022",
    category: "Machine Learning",
  },
  {
    title: "Ndiziflix Streaming Platform",
    description:
      "Key developer for Ndiziflix, a streaming service for African original films and series. Implemented the backend in Laravel and front-end in Angular, handling user accounts, media library management, and real-time video streaming. Deployed the platform on AWS for scalability and reliability, supporting a growing base of active subscribers.",
    image: "/ndiziflix.png?height=600&width=800",
    technologies: ["Laravel", "Angular", "AWS", "CloudFront", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    year: "2022",
    category: "Streaming Platform",
  },
  {
    title: "Retail POS System",
    description:
      "Developed a cloud-based Point of Sale application for a multi-store retailer, including modules for inventory management, sales tracking, and real-time analytics. Utilized Django and React to create a responsive, intuitive interface, which streamlined checkout processes and improved sales reporting efficiency.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Django", "React", "Redux", "MySQL", "Docker"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    year: "2021",
    category: "Enterprise Software",
  },
  {
    title: "Custom ERP Solution",
    description:
      "Implemented a tailored ERP system for a mid-sized enterprise by customizing ERPNext (Python-based). Configured modules for finance, HR, and supply chain, and integrated additional features per client needs. The solution automated previously manual processes and improved cross-department data visibility and coordination.",
    image: "/erpnext.png?height=600&width=800",
    technologies: ["Python", "ERPNext", "JavaScript", "MariaDB", "Docker"],
    demoLink: "#",
    codeLink: "#",
    featured: false,
    year: "2021",
    category: "Enterprise Software",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedTech, setExpandedTech] = useState<number | null>(null)

  // Get featured project if any
  const featuredProject = projects.find((project) => project.featured)
  const regularProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <SectionHeading>Featured Projects</SectionHeading>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        {/* Featured Project (if any) */}
        {featuredProject && (
          <motion.div variants={itemVariants} className="relative">
            <Card className="overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image Section */}
                <div className="relative h-64 lg:h-full overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-primary/90 hover:bg-primary text-white border-none backdrop-blur-sm">
                      <Star className="h-3 w-3 mr-1" />
                      Featured Project
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                      {featuredProject.year}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col">
                  <div className="mb-2">
                    <Badge variant="secondary" className="mb-4">
                      {featuredProject.category}
                    </Badge>
                    <CardTitle className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {featuredProject.title}
                    </CardTitle>
                  </div>

                  <CardDescription className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {featuredProject.description}
                  </CardDescription>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3 flex items-center">
                        <Code className="h-4 w-4 mr-2 text-primary" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {featuredProject.demoLink !== "#" && (
                        <Button asChild className="group">
                          <a href={featuredProject.demoLink} target="_blank" rel="noopener noreferrer">
                            View Live
                            <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                      {featuredProject.codeLink !== "#" && (
                        <Button asChild variant="outline" className="group bg-transparent">
                          <a href={featuredProject.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {regularProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/20">
                {/* Image Container with Overlay */}
                <div className="relative h-48 w-full overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
                  ></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                      {project.year}
                    </Badge>
                  </div>
                  {/* Hover Actions */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}
                  >
                    {project.demoLink !== "#" && (
                      <Button size="sm" variant="secondary" asChild className="rounded-full w-10 h-10 p-0">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">View Live</span>
                        </a>
                      </Button>
                    )}
                    {project.codeLink !== "#" && (
                      <Button size="sm" variant="secondary" asChild className="rounded-full w-10 h-10 p-0">
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">View Code</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-lg md:text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full opacity-50 hover:opacity-100 transition-opacity"
                    >
                      <Bookmark className="h-4 w-4" />
                      <span className="sr-only">Bookmark</span>
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {project.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex flex-col items-start gap-4 pt-0">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-medium text-muted-foreground">Technologies</h4>
                      {project.technologies.length > 3 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs p-0"
                          onClick={() => setExpandedTech(expandedTech === index ? null : index)}
                        >
                          {expandedTech === index ? "Show less" : "Show all"}
                        </Button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(expandedTech === index ? project.technologies : project.technologies.slice(0, 3)).map(
                        (tech, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ),
                      )}
                      {project.technologies.length > 3 && expandedTech !== index && (
                        <Badge
                          variant="outline"
                          className="text-xs cursor-pointer"
                          onClick={() => setExpandedTech(index)}
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {(project.demoLink !== "#" || project.codeLink !== "#") && (
                    <div className="flex gap-3 w-full">
                      {project.demoLink !== "#" && (
                        <Button asChild size="sm" variant="default" className="flex-1 group">
                          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                            View Live
                            <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                      )}
                      {project.codeLink !== "#" && (
                        <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                          <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
