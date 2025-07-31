"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Code, Layers, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Code Editor Component with Typing Animation and Card Flip
const CodeEditor = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [output, setOutput] = useState("")
  const [isFlipped, setIsFlipped] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before rendering random elements
  useEffect(() => {
    setMounted(true)
  }, [])

  // Developer details
  const developer = {
    name: "Robline Kipkoech Yegon",
    skills: ["Python", "PHP", "JavaScript", "Ruby"],
    frameworks: ["Flask", "Django", "Laravel", "React", "Angular", "Node.js"],
    passion: "Building exceptional digital experiences",
  }

  // Code to be typed
  const codeLines = [
    "// Full Stack Developer",
    "function introduceMyself() {",
    "  const developer = {",
    "    name: 'Robline Kipkoech Yegon',",
    "    skills: ['Python', 'PHP', 'JavaScript', 'Ruby'],",
    "    frameworks: ['Flask', 'Django', 'Laravel', 'React'],",
    "    passion: 'Building exceptional digital experiences'",
    "  };",
    "",
    "  return developer;",
    "}",
    "",
    "// Let's run the function",
    "console.log(introduceMyself());",
  ]

  // Current state of typed code
  const [typedCode, setTypedCode] = useState<string[]>(Array(codeLines.length).fill(""))

  // Typing animation
  useEffect(() => {
    if (currentLine < codeLines.length) {
      const line = codeLines[currentLine]

      if (currentChar < line.length) {
        // Type current character
        const timer = setTimeout(() => {
          setTypedCode((prev) => {
            const newTyped = [...prev]
            newTyped[currentLine] = line.substring(0, currentChar + 1)
            return newTyped
          })
          setCurrentChar((prev) => prev + 1)
        }, 20) // Typing speed

        return () => clearTimeout(timer)
      } else {
        // Move to next line
        const timer = setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setCurrentChar(0)
        }, 300) // Pause between lines

        return () => clearTimeout(timer)
      }
    } else if (currentLine === codeLines.length && !output) {
      // Show output after typing is complete
      const timer = setTimeout(() => {
        setOutput(JSON.stringify(developer, null, 2))

        // Trigger card flip after showing output
        const flipTimer = setTimeout(() => {
          setIsFlipped(true)

          // Show details with staggered animation after flip
          const detailsTimer = setTimeout(() => {
            setShowDetails(true)
          }, 500)

          return () => clearTimeout(detailsTimer)
        }, 1500)

        return () => clearTimeout(flipTimer)
      }, 800)

      return () => clearTimeout(timer)
    }
  }, [currentLine, currentChar, codeLines, output])

  return (
    <div
      className={`w-full h-full perspective-1000 ${isFlipped ? "cursor-pointer" : ""}`}
      onClick={() => isFlipped && setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full duration-1000 preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 1s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front side - Code Editor */}
        <div className="absolute w-full h-full backface-hidden" style={{ backfaceVisibility: "hidden" }}>
          <div className="w-full h-full flex flex-col rounded-lg overflow-hidden border border-border shadow-lg bg-background">
            {/* Editor header */}
            <div className="bg-muted px-4 py-2 flex items-center justify-between border-b border-border">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs font-medium">script.js</div>
              <div></div>
            </div>

            {/* Code area */}
            <div className="flex-grow p-4 font-mono text-sm overflow-auto bg-muted/30">
              <pre className="relative">
                {typedCode.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="inline-block w-8 text-muted-foreground text-right mr-4">{index + 1}</span>
                    <span
                      className={`${
                        line.includes("'Robline Kipkoech Yegon'")
                          ? "text-green-500 dark:text-green-400"
                          : line.includes("function") ||
                              line.includes("const") ||
                              line.includes("return") ||
                              line.includes("console")
                            ? "text-blue-500"
                            : line.includes("//")
                              ? "text-gray-500"
                              : ""
                      }`}
                    >
                      {line}
                      {index === currentLine && currentChar === line.length && (
                        <span className="inline-block w-2 h-4 bg-blue-500"></span>
                      )}
                    </span>
                  </div>
                ))}
              </pre>
            </div>

            {/* Output area */}
            {output && (
              <div className="p-4 border-t border-border bg-black text-white font-mono">
                <div className="flex items-center text-gray-400 mb-1">
                  <span className="text-xs">▶ Output</span>
                </div>
                <pre className="text-green-500 text-xs overflow-auto max-h-32">{output}</pre>
              </div>
            )}
          </div>
        </div>

        {/* Back side - Developer Card */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden border border-blue-500 shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-5 left-5 text-9xl opacity-20">{"{"}</div>
              <div className="absolute bottom-5 right-5 text-9xl opacity-20">{"}"}</div>
              {mounted && Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-xs opacity-30"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                >
                  {
                    ["const", "let", "function", "return", "=>", "class", "import", "export"][
                      Math.floor(Math.random() * 8)
                    ]
                  }
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {developer.name}
              </h2>
              <p className="text-blue-300 text-lg">Full Stack Developer</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: showDetails ? 1 : 0, x: showDetails ? 0 : -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-900/50 p-5 rounded-lg border border-blue-700"
              >
                <div className="flex items-center mb-3">
                  <Code className="text-blue-400 mr-2 h-5 w-5" />
                  <h3 className="font-semibold text-blue-300">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {developer.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-800/50 rounded text-sm text-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: showDetails ? 1 : 0, x: showDetails ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-purple-900/50 p-5 rounded-lg border border-purple-700"
              >
                <div className="flex items-center mb-3">
                  <Layers className="text-purple-400 mr-2 h-5 w-5" />
                  <h3 className="font-semibold text-purple-300">Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {developer.frameworks.map((framework, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-800/50 rounded text-sm text-purple-200">
                      {framework}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showDetails ? 1 : 0, y: showDetails ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 bg-indigo-900/50 p-5 rounded-lg border border-indigo-700 w-full"
            >
              <div className="flex items-center mb-3">
                <Zap className="text-indigo-400 mr-2 h-5 w-5" />
                <h3 className="font-semibold text-indigo-300">Passion</h3>
              </div>
              <p className="text-indigo-200">{developer.passion}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: showDetails ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-blue-300 text-sm"
            >
              (Click anywhere on the card to flip back)
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-20 md:py-0 overflow-hidden bg-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-blue-400">Full Stack Developer</h2>
            <p className="text-lg mb-8 text-gray-300">
              Seasoned developer with expertise in Python, PHP, JavaScript, and Ruby. Passionate about building
              exceptional digital experiences and architecting scalable, robust systems on cloud platforms.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-900/20"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
              >
                <Link href="https://github.com/ipkoech" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
              >
                <Link href="https://www.linkedin.com/in/robline-yegon-142631339/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20"
              >
                <Link href="mailto:roblineyegon@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right column - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] w-full"
          >
            <CodeEditor />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <Button variant="ghost" size="icon" asChild className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Link>
        </Button>
      </div>
    </section>
  )
}

