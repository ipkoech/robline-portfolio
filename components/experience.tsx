"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Co-founder & Lead Developer",
    company: "NoteBook+",
    period: "May 2025 – Present",
    location: "Kenya",
    link: "https://www.notebookplusai.com",
    description: [
      "Led the launch of Notebook†, an AI-powered study assistant built for university and college students in Kenya, focusing on accessibility for low-resource settings.",
      "Developed a lightweight, mobile-first platform enabling students to record live lectures, auto-generate notes, summaries, and questions, and upload PDFs/images for instant AI-generated notes.",
      "Integrated features such as an AI Copilot for deeper note understanding, AI-generated podcasts for revision, and tools for managing study schedules and reminders—all in one app.",
      "Designed the system to address challenges unique to local students, such as missed lectures and unreliable power, ensuring the platform works seamlessly in real-world conditions.",
      "Launched a special offer providing free credits to early users, driving adoption and gathering feedback from students and ambassadors across Kenyan campuses.",
      "Oversaw the full product lifecycle, from ideation and user research to deployment and iteration, ensuring the platform met the needs of its target audience.",
    ],
    skills: [
      "AI/ML",
      "Next.js",
      "TypeScript",
      "Python",
      "Flask",
      "OpenAI API",
      "Gemini API",
      "GCP",
      "Azure",
      "PostgreSQL",
      "Redis",
    ],
    type: "current",
  },
  {
    title: "Lead Software Engineer",
    company: "Revenue Catalyst Ltd.",
    period: "Aug 2023 – Feb 2025",
    location: "Remote",
    description: [
      "Architected and developed backend systems using PHP (Laravel), Python (Flask), and Ruby on Rails, designing APIs and services for a hospitality and travel technology platform.",
      "Built and maintained dynamic front-end applications with Angular and React, creating intuitive user interfaces and improving client-side performance.",
      "Optimized PostgreSQL databases for scalability and speed, refining queries and indexing which improved data retrieval times by ~30%.",
      "Managed cloud infrastructure on AWS and GCP, deploying containerized applications and implementing monitoring to ensure high availability and security compliance.",
      "Provided technical leadership and mentorship to a development team, establishing coding best practices and performing code reviews that elevated code quality and team productivity.",
    ],
    skills: ["Laravel", "Flask", "Ruby on Rails", "Angular", "React", "PostgreSQL", "AWS", "GCP"],
    type: "previous",
  },
  {
    title: "Full Stack Engineer",
    company: "Toltech",
    period: "Oct 2022 – Jul 2023",
    location: "Remote",
    description: [
      "Developed and maintained full-stack web applications using Python (Django/Flask) and PHP (Laravel) for backend logic, and Angular/React for rich front-end interfaces.",
      "Integrated the WhatsApp Business API into client systems to enable automated customer notifications and two-way communication, streamlining customer engagement channels.",
      "Customized an open-source ERP solution (ERPNext) to fit specific business workflows, developing additional modules and scripts that improved process automation for finance and inventory management.",
      "Deployed applications on AWS and GCP cloud services, configuring CI/CD pipelines and Docker containers to ensure smooth releases and reliable performance across multiple environments.",
    ],
    skills: ["Django", "Flask", "Laravel", "Angular", "React", "WhatsApp API", "ERPNext", "AWS", "GCP", "Docker"],
    type: "previous",
  },
  {
    title: "Full Stack Engineer",
    company: "Ndiziflix Limited",
    period: "Jul 2022 – Oct 2022",
    location: "Kenya",
    description: [
      "Built and launched a video streaming platform for African original content using PHP (Laravel) and Angular, implementing core features such as user authentication, content catalog browsing, and subscription management.",
      "Implemented secure payment integration and content delivery mechanisms, enabling subscribers to seamlessly stream premium content across web and mobile devices.",
      "Managed AWS cloud resources (EC2, S3, CloudFront) for media storage and distribution, ensuring low latency streaming and scaling the platform to handle thousands of concurrent users.",
    ],
    skills: ["Laravel", "Angular", "AWS EC2", "AWS S3", "CloudFront", "Payment Integration"],
    type: "previous",
  },
  {
    title: "Full Stack Engineer",
    company: "Icons Hub Limited",
    period: "Dec 2021 – Jun 2022",
    location: "Kenya",
    description: [
      "Developed multiple web applications in an innovation hub/incubator environment, using Python (Django) for robust backend APIs and Angular/React for modern, responsive front-end interfaces.",
      "Collaborated with startup teams and entrepreneurs to translate ideas into functional prototypes, delivering high-quality MVPs within tight deadlines for user testing and feedback.",
      "Implemented end-to-end solutions (database design, server-side logic, and UI/UX) following best practices, ensuring the applications were scalable, maintainable, and easily extensible for future growth.",
    ],
    skills: ["Django", "Angular", "React", "Database Design", "UI/UX", "MVP Development"],
    type: "previous",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading>Work Experience</SectionHeading>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mt-16"
      >
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0

            return (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10">
                  <div className="absolute inset-1 bg-primary/20 rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:flex md:items-start md:gap-12 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`md:w-1/2 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-background to-muted/20">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all duration-300">
                                {exp.title}
                              </CardTitle>
                              <div className="flex items-center gap-2 mt-2">
                                <CardDescription className="text-lg font-semibold text-primary">
                                  {exp.company}
                                </CardDescription>
                                {exp.link && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    asChild
                                  >
                                    <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-3 w-3" />
                                    </a>
                                  </Button>
                                )}
                              </div>
                            </div>
                            {exp.type === "current" && (
                              <Badge
                                variant="default"
                                className="bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20"
                              >
                                Current
                              </Badge>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          <div className="space-y-3">
                            {exp.description.map((item, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                                <p>{item}</p>
                              </motion.div>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-border/50">
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: i * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge
                                    variant="secondary"
                                    className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors duration-200 text-xs font-medium"
                                  >
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}


interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
        {children}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"></div>
    </motion.div>
  )
}
