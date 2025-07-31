"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code,
  Layers,
  Zap,
  Play,
  Terminal,
  Sparkles,
  Download,
  MapPin,
  Calendar,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Enhanced Code Editor Component with Modern Design
const CodeEditor = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [output, setOutput] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [manualRun, setManualRun] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const developer = {
    name: "Robline Kipkoech Yegon",
    skills: ["Python", "PHP", "JavaScript", "Ruby"],
    frameworks: ["Flask", "Django", "Laravel", "React", "Angular", "Node.js"],
    passion: "Building exceptional digital experiences",
    experience: "4+ years",
    projects: "50+ projects delivered",
    location: "Nairobi, Kenya",
    availability: "Available for Projects",
  }

  const codeLines = [
    "// Full Stack Developer & Technical Leader",
    "class Developer {",
    "  constructor() {",
    "    this.name = 'Robline Kipkoech Yegon';",
    "    this.role = 'Full Stack Developer & Co-founder';",
    "    this.experience = '4+ years';",
    "    this.location = 'Nairobi, Kenya';",
    "    this.skills = ['Python', 'PHP', 'JavaScript', 'Ruby'];",
    "    this.frameworks = ['Flask', 'Django', 'Laravel', 'React'];",
    "    this.passion = 'Building exceptional digital experiences';",
    "    this.availability = 'Available for Projects';",
    "  }",
    "",
    "  introduce() {",
    "    return `Hi! I'm ${this.name}, a ${this.role}`;",
    "  }",
    "",
    "  getStats() {",
    "    return { projects: '50+', clients: '25+', uptime: '99.9%' };",
    "  }",
    "}",
    "",
    "const robline = new Developer();",
    "console.log(robline.introduce());",
    "console.log(robline.getStats());",
  ]

  const [typedCode, setTypedCode] = useState<string[]>(Array(codeLines.length).fill(""))

  const handleRunClick = () => {
    if (!isFlipped && currentLine >= codeLines.length && output) {
      // If typing is complete and we have output, flip the card
      setIsFlipped(true)
      setTimeout(() => {
        setShowDetails(true)
      }, 600)
    } else if (!isFlipped && currentLine < codeLines.length) {
      // If still typing, speed up the animation
      setManualRun(true)
    }
  }

  useEffect(() => {
    const typingSpeed = manualRun ? 3 : 25 // Speed up if manually triggered

    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setTypedCode((prev) => {
            const newTyped = [...prev]
            newTyped[currentLine] = line.substring(0, currentChar + 1)
            return newTyped
          })
          setCurrentChar((prev) => prev + 1)
        }, typingSpeed)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(
          () => {
            setCurrentLine((prev) => prev + 1)
            setCurrentChar(0)
          },
          manualRun ? 30 : 150,
        )
        return () => clearTimeout(timer)
      }
    } else if (currentLine === codeLines.length && !output) {
      setIsRunning(true)
      const timer = setTimeout(() => {
        setOutput(
          `Hi! I'm ${developer.name}, a Full Stack Developer & Co-founder\n{ projects: '50+', clients: '25+', uptime: '99.9%' }`,
        )
        setIsRunning(false)
        if (manualRun) {
          // If manually triggered, flip immediately after output
          setTimeout(() => {
            setIsFlipped(true)
            setTimeout(() => {
              setShowDetails(true)
            }, 600)
          }, 800)
        } else {
          // Original auto-flip behavior
          const flipTimer = setTimeout(() => {
            setIsFlipped(true)
            const detailsTimer = setTimeout(() => {
              setShowDetails(true)
            }, 600)
            return () => clearTimeout(detailsTimer)
          }, 2500)
          return () => clearTimeout(flipTimer)
        }
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, codeLines, output, manualRun])

  return (
    <div className="w-full h-full perspective-1000 group pt-4">
      <motion.div
        className="relative w-full h-full duration-700 preserve-3d cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        onClick={() => isFlipped && setIsFlipped(false)}
        whileHover={{ scale: isFlipped ? 1 : 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Front side - Enhanced Code Editor */}
        <div className="absolute w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div className="w-full h-full flex flex-col rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm">
            {/* Enhanced Editor Header */}
            <div className="bg-gradient-to-r from-muted/80 via-muted to-muted/80 px-4 py-3 flex items-center justify-between border-b border-border/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">developer.js</span>
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    Active
                  </Badge>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {isRunning && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Executing...
                  </div>
                )}
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-7 px-3 text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={handleRunClick}
                >
                  <Play className="h-3 w-3 mr-1" />
                  Run Code
                </Button>
              </div>
            </div>

            {/* Enhanced Code Area */}
            <div className="flex-grow p-4 font-mono text-sm overflow-auto bg-gradient-to-br from-muted/10 to-background relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 text-6xl text-primary/20 font-bold">{"</>"}</div>
                <div className="absolute bottom-4 left-4 text-4xl text-primary/10 font-bold">{"{ }"}</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-secondary/5 font-bold">
                  {"⚡"}
                </div>
              </div>

              <pre className="relative z-10">
                {typedCode.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex hover:bg-muted/20 rounded px-2 py-0.5 transition-colors group"
                  >
                    <span className="inline-block w-8 text-muted-foreground text-right mr-4 select-none text-xs">
                      {index + 1}
                    </span>
                    <span
                      className={`${line?.includes("'Robline Kipkoech Yegon'") ||
                        line.includes("'Full Stack Developer'") ||
                        line.includes("'Nairobi, Kenya'")
                        ? "text-emerald-600 dark:text-emerald-400"
                        : line.includes("class") ||
                          line.includes("constructor") ||
                          line.includes("return") ||
                          line.includes("console") ||
                          line.includes("const")
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : line.includes("//")
                            ? "text-gray-500 dark:text-gray-400 italic"
                            : line.includes("this.")
                              ? "text-purple-600 dark:text-purple-400"
                              : line.includes("getStats") || line.includes("introduce")
                                ? "text-orange-600 dark:text-orange-400"
                                : "text-foreground"
                        }`}
                    >
                      {line}
                      {index === currentLine && currentChar === line.length && (
                        <motion.span
                          className="inline-block w-2 h-5 bg-primary ml-1 rounded-sm"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </span>
                  </motion.div>
                ))}
              </pre>
            </div>

            {/* Enhanced Output Area */}
            {output && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 border-t border-border/50 bg-gradient-to-r from-muted/30 to-muted/50 backdrop-blur-sm"
              >
                <div className="flex items-center text-muted-foreground mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Console Output</span>
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs">
                    Success
                  </Badge>
                </div>
                <motion.pre
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-green-600 dark:text-green-400 text-sm font-medium whitespace-pre-wrap"
                >
                  {output}
                </motion.pre>
              </motion.div>
            )}
          </div>
        </div>

        {/* Back side - Enhanced Developer Card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-indigo-900/20 rounded-2xl overflow-hidden border border-primary/20 shadow-2xl backdrop-blur-sm">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-xl"></div>
              {mounted &&
                Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary/5 text-2xl font-mono font-bold"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  >
                    {["</>", "{}", "[]", "=>", "fn", "++", "&&", "||", "API", "DB", "UI", "AI"][i]}
                  </motion.div>
                ))}
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    {developer.name}
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg font-medium mb-3">Full Stack Developer & Co-founder</p>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {developer.experience}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {developer.location}
                  </span>
                </div>
                <Badge className="mt-3 bg-green-500/10 text-green-600 border-green-500/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  {developer.availability}
                </Badge>
              </motion.div>

              {/* Enhanced Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: showDetails ? 1 : 0, x: showDetails ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-background/70 backdrop-blur-sm p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <Code className="text-primary mr-2 h-5 w-5" />
                    <h3 className="font-semibold text-foreground">Core Skills</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developer.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: showDetails ? 1 : 0, scale: showDetails ? 1 : 0.8 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: showDetails ? 1 : 0, x: showDetails ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-background/70 backdrop-blur-sm p-4 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <Layers className="text-secondary mr-2 h-5 w-5" />
                    <h3 className="font-semibold text-foreground">Frameworks</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developer.frameworks.slice(0, 4).map((framework, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: showDetails ? 1 : 0, scale: showDetails ? 1 : 0.8 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="px-2 py-1 bg-secondary/10 text-secondary rounded-md text-xs font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors"
                      >
                        {framework}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 w-full max-w-md mb-6"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">25+</div>
                  <div className="text-xs text-muted-foreground">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </motion.div>

              {/* Passion Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-background/70 backdrop-blur-sm p-4 rounded-lg border border-border/50 w-full max-w-md"
              >
                <div className="flex items-center mb-3">
                  <Zap className="text-yellow-500 mr-2 h-5 w-5" />
                  <h3 className="font-semibold text-foreground">Mission</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{developer.passion}</p>
              </motion.div>

              {/* Flip Back Instruction */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: showDetails ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 text-muted-foreground text-xs flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full"
                />
                Click anywhere to return to code
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-12 sm:py-16 md:py-20 lg:py-0 overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/8 to-secondary/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/8 to-primary/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/3 via-secondary/3 to-primary/3 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column - Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Enhanced Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
                className="text-2xl"
              >
                👋
              </motion.div>
              <div>
                <span className="text-primary font-semibold text-lg">Hello, I'm Robline</span>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                    Available for Projects
                  </Badge>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Full Stack
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
            >
              & Technical Leader
            </motion.h2>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Accomplished Full Stack Developer and Co-founder with{" "}
              <span className="text-primary font-semibold">4+ years of experience</span> leading high-impact software
              development projects. Proven expertise in architecting scalable enterprise solutions and successfully
              founding technology ventures that serve{" "}
              <span className="text-secondary font-semibold">thousands of users</span> across cloud platforms.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="text-base font-medium group shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#contact">
                  Get in Touch
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    →
                  </motion.div>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base font-medium group bg-transparent shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="#projects">
                  View Projects
                  <Code className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4 pt-4"
            >
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-all bg-transparent shadow-md hover:shadow-lg hover:text-gray-900 dark:hover:text-white"
              >
                <Link href="https://github.com/ipkoech" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-all bg-transparent shadow-md hover:shadow-lg hover:text-blue-600"
              >
                <Link
                  href="https://www.linkedin.com/in/robline-yegon-142631339/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-all bg-transparent shadow-md hover:shadow-lg hover:text-green-600"
              >
                <Link href="mailto:roblineyegon@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </motion.div>

            {/* Location & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-2 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <span>•</span>
              <span>20+ Projects Delivered</span>
              <span>•</span>
              <span>99.9% Uptime</span>
            </motion.div>
          </motion.div>

          {/* Right column - Enhanced Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] w-full max-w-[700px] mx-auto"
          >
            <CodeEditor />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <Button
          variant="outline"
          size="icon"
          asChild
          className="rounded-full group hover:scale-110 transition-all bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl"
        >
          <Link href="#about">
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-2 text-center font-medium">Scroll to explore</p>
      </motion.div>
    </section>
  )
}
