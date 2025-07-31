"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "./section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Award, Users, Code2, Rocket, Brain, Globe, Target, Heart } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: "4+",
    label: "Years Experience",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Code2,
    value: "50+",
    label: "Projects Delivered",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Users Served",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Award,
    value: "99.9%",
    label: "Uptime Achieved",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
]

const highlights = [
  {
    icon: Rocket,
    title: "Co-founder & Technical Leader",
    description: "Successfully co-founded NoteBook+, an AI-powered knowledge management platform",
    color: "text-blue-500",
  },
  {
    icon: Globe,
    title: "Multi-Cloud Architecture",
    description: "Expert in AWS, GCP, and Azure with scalable, fault-tolerant system design",
    color: "text-green-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Leveraging cutting-edge AI technologies to create innovative business solutions",
    color: "text-purple-500",
  },
  {
    icon: Target,
    title: "Performance Optimization",
    description: "Specialized in CI/CD pipelines and ensuring mission-critical application reliability",
    color: "text-orange-500",
  },
]

const technologies = [
  { name: "Python", category: "Backend", proficiency: 95 },
  { name: "JavaScript", category: "Frontend", proficiency: 90 },
  { name: "PHP", category: "Backend", proficiency: 88 },
  { name: "Ruby", category: "Backend", proficiency: 85 },
  { name: "React/Next.js", category: "Frontend", proficiency: 92 },
  { name: "Django/Flask", category: "Framework", proficiency: 94 },
  { name: "Laravel", category: "Framework", proficiency: 87 },
  { name: "AWS/GCP", category: "Cloud", proficiency: 89 },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <SectionHeading>About Me</SectionHeading>

      <div className="relative z-10 space-y-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-lg"></div>

              {/* Main Image Container */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dp.jpg-jiwYr0ifIvvm8E8Yf5Jw6ChmfESn5z.jpeg"
                  alt="Robline Kipkoech Yegon"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Overlay with Location */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border/50">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-medium">Nairobi, Kenya</span>
                    <div className="ml-auto flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-muted-foreground">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Code2 className="h-6 w-6 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-secondary/10 backdrop-blur-sm rounded-full p-3 border border-secondary/20"
                animate={{
                  rotate: [360, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Rocket className="h-6 w-6 text-secondary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Title with Enhanced Typography */}
            <div className="space-y-4">
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Technical Leader &
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Entrepreneur
                </span>
              </motion.h3>

              <motion.div
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Based in Nairobi, Kenya</span>
              </motion.div>
            </div>

            {/* Description with Better Formatting */}
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p variants={itemVariants} className="text-base md:text-lg">
                I'm an accomplished <span className="text-primary font-semibold">Full Stack Developer</span> and
                <span className="text-secondary font-semibold"> Co-founder</span> with over 4 years of experience
                building scalable, enterprise-grade applications. My expertise spans Python, PHP, JavaScript, and Ruby
                ecosystems, with deep proficiency in modern frameworks.
              </motion.p>

              <motion.p variants={itemVariants} className="text-base md:text-lg">
                As a technical leader and entrepreneur, I've successfully co-founded{" "}
                <span className="text-primary font-semibold">NoteBook+</span>, an AI-powered knowledge management
                platform, while leading cross-functional development teams and delivering complex applications that
                serve <span className="text-secondary font-semibold">thousands of users</span>.
              </motion.p>

              <motion.p variants={itemVariants} className="text-base md:text-lg">
                My technical expertise extends to architecting highly scalable, fault-tolerant systems deployed across
                multiple cloud platforms. I specialize in performance optimization, implementing CI/CD pipelines, and
                ensuring <span className="text-green-500 font-semibold">99.9% uptime</span> for mission-critical
                applications.
              </motion.p>

              <motion.p variants={itemVariants} className="text-base md:text-lg">
                I'm passionate about leveraging{" "}
                <span className="text-purple-500 font-semibold">cutting-edge technologies</span>, including AI and
                machine learning, to create innovative solutions that solve complex business challenges and deliver
                exceptional user experiences.
              </motion.p>
            </motion.div>

            {/* Passion Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-4 rounded-lg border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="font-semibold text-foreground">My Passion</span>
              </div>
              <p className="text-muted-foreground italic">
                "Building user-centric applications that not only meet technical requirements but also deliver
                exceptional experiences and measurable business value."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`${stat.bgColor} border ${stat.borderColor} hover:scale-105 transition-transform duration-300`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h4 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Key Highlights
            </span>
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br from-${highlight.color.split("-")[1]}-500/10 to-${highlight.color.split("-")[1]}-500/5 border border-${highlight.color.split("-")[1]}-500/20`}
                      >
                        <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground mb-2">{highlight.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Proficiency */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h4 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Technology Proficiency
            </span>
          </motion.h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{tech.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{tech.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
