"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Co-founder & Lead Developer",
    company: "NoteBook+",
    period: "May 2025 – Present",
    description: [
      "Co-founded and lead the development of NoteBook+, an AI-powered note-taking and knowledge management platform designed to revolutionize how professionals organize and interact with their information.",
      "Architected a scalable full-stack solution using Flask for robust backend APIs and Next.js for a responsive, modern frontend, ensuring optimal performance across all devices.",
      "Implemented advanced AI integration leveraging GPT models for intelligent note summarization, content generation, and semantic search capabilities, enhancing user productivity by 40%.",
      "Deployed and managed infrastructure on Google Cloud Platform (GCP) and Microsoft Azure, implementing auto-scaling, load balancing, and comprehensive monitoring for 99.9% uptime.",
      "Led a cross-functional development team, establishing agile methodologies, code review processes, and CI/CD pipelines that reduced deployment time by 60%.",
      "Designed and implemented secure user authentication, real-time collaboration features, and data synchronization across multiple platforms and devices.",
    ],
    skills: ["Flask", "Next.js", "Python", "TypeScript", "GCP", "Azure", "AI/ML", "OpenAI API", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
  },
  {
    title: "Lead Software Engineer",
    company: "Revenue Catalyst Ltd.",
    period: "Aug 2023 – Feb 2025",
    description: [
      "Architected and developed backend systems using PHP (Laravel), Python (Flask), and Ruby on Rails, designing APIs and services for a hospitality and travel technology platform.",
      "Built and maintained dynamic front-end applications with Angular and React, creating intuitive user interfaces and improving client-side performance.",
      "Optimized PostgreSQL databases for scalability and speed, refining queries and indexing which improved data retrieval times by ~30%.",
      "Managed cloud infrastructure on AWS and GCP, deploying containerized applications and implementing monitoring to ensure high availability and security compliance.",
      "Provided technical leadership and mentorship to a development team, establishing coding best practices and performing code reviews that elevated code quality and team productivity.",
    ],
    skills: ["Laravel", "Flask", "Ruby on Rails", "Angular", "React", "PostgreSQL", "AWS", "GCP"],
  },
  {
    title: "Full Stack Engineer",
    company: "Toltech",
    period: "Oct 2022 – Jul 2023",
    description: [
      "Developed and maintained full-stack web applications using Python (Django/Flask) and PHP (Laravel) for backend logic, and Angular/React for rich front-end interfaces.",
      "Integrated the WhatsApp Business API into client systems to enable automated customer notifications and two-way communication, streamlining customer engagement channels.",
      "Customized an open-source ERP solution (ERPNext) to fit specific business workflows, developing additional modules and scripts that improved process automation for finance and inventory management.",
      "Deployed applications on AWS and GCP cloud services, configuring CI/CD pipelines and Docker containers to ensure smooth releases and reliable performance across multiple environments.",
    ],
    skills: ["Django", "Flask", "Laravel", "Angular", "React", "WhatsApp API", "ERPNext", "AWS", "GCP", "Docker"],
  },
  {
    title: "Full Stack Engineer",
    company: "Ndiziflix Limited",
    period: "Jul 2022 – Oct 2022",
    description: [
      "Built and launched a video streaming platform for African original content using PHP (Laravel) and Angular, implementing core features such as user authentication, content catalog browsing, and subscription management.",
      "Implemented secure payment integration and content delivery mechanisms, enabling subscribers to seamlessly stream premium content across web and mobile devices.",
      "Managed AWS cloud resources (EC2, S3, CloudFront) for media storage and distribution, ensuring low latency streaming and scaling the platform to handle thousands of concurrent users.",
    ],
    skills: ["Laravel", "Angular", "AWS EC2", "AWS S3", "CloudFront", "Payment Integration"],
  },
  {
    title: "Full Stack Engineer",
    company: "Icons Hub Limited",
    period: "Dec 2021 – Jun 2022",
    description: [
      "Developed multiple web applications in an innovation hub/incubator environment, using Python (Django) for robust backend APIs and Angular/React for modern, responsive front-end interfaces.",
      "Collaborated with startup teams and entrepreneurs to translate ideas into functional prototypes, delivering high-quality MVPs within tight deadlines for user testing and feedback.",
      "Implemented end-to-end solutions (database design, server-side logic, and UI/UX) following best practices, ensuring the applications were scalable, maintainable, and easily extensible for future growth.",
    ],
    skills: ["Django", "Angular", "React", "Database Design", "UI/UX", "MVP Development"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-muted/30">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2 text-sm md:text-base text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}