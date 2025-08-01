"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Award,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle,
  Star,
  Trophy,
  BookOpen,
} from "lucide-react"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"

const educationData = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "Kisii University",
    period: "2017–2021",
    location: "Kisii, Kenya",
    description:
      "Comprehensive education in software development principles, algorithms, data structures, and software engineering methodologies. Focused on modern programming paradigms and industry best practices.",
    highlights: [
      "Software Development Lifecycle",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Software Testing & Quality Assurance",
    ],
    grade: "Second Class Honours (Upper Division)",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
]

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CCP-2023",
    description:
      "Validated knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support. Demonstrates foundational understanding of cloud computing principles.",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture", "Cost Optimization"],
    icon: Award,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    verified: true,
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud Platform",
    date: "2022",
    credentialId: "GCP-PRO-2022",
    description:
      "Advanced certification in Google Cloud Platform services, demonstrating expertise in cloud architecture and deployment strategies.",
    skills: ["GCP Services", "Cloud Architecture", "DevOps", "Kubernetes", "BigQuery"],
    icon: Award,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    verified: true,
  },
]

const affiliations = [
  {
    organization: "IEEE Computer Society",
    role: "Professional Member",
    period: "2022–Present",
    description:
      "Active member of the world's premier organization for computing professionals, participating in knowledge sharing, continuous learning, and advancing technology innovation.",
    activities: ["Technical Paper Reviews", "Industry Conferences", "Professional Development", "Networking Events"],
    icon: Users,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
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

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <SectionHeading>Education & Achievements</SectionHeading>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        {/* Education Section */}
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Education
              </span>
            </h3>
            <p className="text-muted-foreground">Academic foundation and formal learning</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {educationData.map((edu, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${edu.bgColor} border ${edu.borderColor} bg-gradient-to-br from-background to-muted/20`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {edu.degree}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary mb-2">
                          {edu.institution}
                        </CardDescription>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color}`}>
                        <edu.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        Key Areas of Study
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                      <Trophy className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-700 dark:text-green-400">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <p className="text-muted-foreground">Professional credentials and industry recognition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${cert.bgColor} border ${cert.borderColor} bg-gradient-to-br from-background to-muted/20`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-lg md:text-xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {cert.title}
                          </CardTitle>
                          {cert.verified && <CheckCircle className="h-5 w-5 text-green-500" />}
                        </div>
                        <CardDescription className="text-base font-semibold text-primary">
                          {cert.issuer}
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{cert.date}</span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color}`}>
                        <cert.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Skills Validated</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs bg-primary/5 text-primary border-primary/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">ID: {cert.credentialId}</span>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Affiliations Section */}
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Professional Affiliations
              </span>
            </h3>
            <p className="text-muted-foreground">Community involvement and professional networks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliations.map((affiliation, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${affiliation.bgColor} border ${affiliation.borderColor} bg-gradient-to-br from-background to-muted/20`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg md:text-xl mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                          {affiliation.organization}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold text-primary mb-2">
                          {affiliation.role}
                        </CardDescription>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{affiliation.period}</span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${affiliation.color}`}>
                        <affiliation.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{affiliation.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Activities</h4>
                      <div className="space-y-2">
                        {affiliation.activities.map((activity, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">1</div>
              <div className="text-sm text-muted-foreground">Degree</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">{affiliations.length}</div>
              <div className="text-sm text-muted-foreground">Affiliations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground">4+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
