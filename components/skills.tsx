"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Cloud, Brain, Settings, Layers, Star, TrendingUp, Zap, Award } from "lucide-react"
import { useState } from "react"

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: Code,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "Python", level: 95, years: 4, projects: 18 },
      { name: "JavaScript (ES6+)", level: 92, years: 4, projects: 23 },
      { name: "PHP", level: 88, years: 3, projects: 20 },
      { name: "TypeScript", level: 85, years: 2, projects: 15 },
      { name: "Ruby", level: 80, years: 2, projects: 8 },
      { name: "HTML5", level: 98, years: 4, projects: 20 },
      { name: "CSS3", level: 90, years: 4, projects: 20 },
      { name: "SQL", level: 87, years: 3, projects: 16 },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    icon: Layers,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    skills: [
      { name: "Flask", level: 94, years: 4, projects: 18 },
      { name: "Django", level: 90, years: 3, projects: 6 },
      { name: "Laravel", level: 88, years: 3, projects: 8 },
      { name: "Next.js", level: 92, years: 2, projects: 14 },
      { name: "React", level: 90, years: 3, projects: 12 },
      { name: "Node.js (Express)", level: 85, years: 2, projects: 3 },
      { name: "Angular", level: 82, years: 2, projects: 10 },
      { name: "Vue.js", level: 75, years: 1, projects: 6 },
      { name: "Ruby on Rails", level: 78, years: 2, projects: 8 },
      { name: "Tailwind CSS", level: 95, years: 2, projects: 12 },
      { name: "FastAPI", level: 80, years: 1, projects: 5 },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: Database,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "PostgreSQL", level: 90, years: 3, projects: 16 },
      { name: "MySQL", level: 88, years: 4, projects: 9 },
      { name: "MongoDB", level: 82, years: 2, projects: 12 },
      { name: "Redis", level: 85, years: 2, projects: 8 },
      { name: "SQLite", level: 80, years: 3, projects: 5 },
      { name: "Firebase", level: 75, years: 1, projects: 8 },
      { name: "Elasticsearch", level: 70, years: 1, projects: 4 },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "AWS (EC2, S3, Lambda)", level: 88, years: 3, projects: 9 },
      { name: "Google Cloud Platform", level: 85, years: 2, projects: 12 },
      { name: "Microsoft Azure", level: 80, years: 2, projects: 8 },
      { name: "Docker", level: 87, years: 3, projects: 4 },
      { name: "Kubernetes", level: 75, years: 1, projects: 6 },
      { name: "CI/CD pipelines", level: 82, years: 2, projects: 4 },
      { name: "Linux administration", level: 85, years: 3, projects: 7 },
      { name: "Nginx", level: 80, years: 2, projects: 15 },
      { name: "Apache", level: 78, years: 2, projects: 12 },
      { name: "Terraform", level: 70, years: 1, projects: 4 },
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    icon: Brain,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
    skills: [
      { name: "OpenAI API", level: 92, years: 2, projects: 10 },
      { name: "GPT Integration", level: 90, years: 2, projects: 8 },
      { name: "Natural Language Processing", level: 80, years: 2, projects: 6 },
      { name: "Machine Learning", level: 75, years: 2, projects: 5 },
      { name: "TensorFlow", level: 70, years: 1, projects: 4 },
      { name: "Scikit-learn", level: 72, years: 1, projects: 3 },
      { name: "AI-powered Applications", level: 88, years: 2, projects: 12 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Methodologies",
    icon: Settings,
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    skills: [
      { name: "RESTful API design", level: 95, years: 4, projects: 13 },
      { name: "GraphQL", level: 78, years: 2, projects: 3 },
      { name: "Microservices architecture", level: 85, years: 2, projects: 12 },
      { name: "Agile/Scrum methodology", level: 90, years: 4, projects: 10 },
      { name: "Git version control", level: 95, years: 4, projects: 18 },
      { name: "Test-Driven Development", level: 82, years: 3, projects: 10 },
      { name: "UI/UX Design", level: 80, years: 3, projects: 10 },
      { name: "Performance Optimization", level: 88, years: 3, projects: 12 },
      { name: "Security Best Practices", level: 85, years: 3, projects: 4 },
      { name: "Code Review", level: 92, years: 4, projects: 20 },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("languages")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const getSkillLevel = (level: number) => {
    if (level >= 90) return { label: "Expert", color: "text-green-600", icon: Award }
    if (level >= 80) return { label: "Advanced", color: "text-blue-600", icon: TrendingUp }
    if (level >= 70) return { label: "Intermediate", color: "text-orange-600", icon: Zap }
    return { label: "Beginner", color: "text-gray-600", icon: Star }
  }

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab)

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <SectionHeading>Technical Skills</SectionHeading>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <TabsList className="flex flex-wrap justify-center lg:justify-start h-auto p-2 bg-muted/50 backdrop-blur-sm">
              {skillCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 text-sm md:text-base px-4 py-2 data-[state=active]:bg-background data-[state=active]:shadow-md"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 justify-center lg:justify-end">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "grid" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                <div className="w-4 h-4 flex flex-col gap-1">
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                  <div className="bg-current h-0.5 rounded"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Category Stats */}
          {activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Card
                className={`${activeCategory.bgColor} border ${activeCategory.borderColor} bg-gradient-to-r from-background to-muted/20`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${activeCategory.color}`}>
                      <activeCategory.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{activeCategory.name}</h3>
                      <p className="text-muted-foreground">{activeCategory.skills.length} skills in this category</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {Math.round(
                          activeCategory.skills.reduce((acc, skill) => acc + skill.level, 0) /
                          activeCategory.skills.length,
                        )}
                        %
                      </div>
                      <div className="text-xs text-muted-foreground">Avg. Proficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">
                        {Math.max(...activeCategory.skills.map((skill) => skill.years))}
                      </div>
                      <div className="text-xs text-muted-foreground">Max Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">
                        {activeCategory.skills.reduce((acc, skill) => acc + skill.projects, 0)}
                      </div>
                      <div className="text-xs text-muted-foreground">Total Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">
                        {activeCategory.skills.filter((skill) => skill.level >= 90).length}
                      </div>
                      <div className="text-xs text-muted-foreground">Expert Level</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Skills Content */}
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}
              >
                {category.skills.map((skill, index) => {
                  const skillInfo = getSkillLevel(skill.level)
                  const SkillIcon = skillInfo.icon

                  return (
                    <motion.div key={index} variants={itemVariants}>
                      {viewMode === "grid" ? (
                        <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20 hover:scale-105">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-sm">{skill.name}</h4>
                              <SkillIcon className={`h-4 w-4 ${skillInfo.color}`} />
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{skillInfo.label}</span>
                                <span>{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{skill.years} years</span>
                                <span>{skill.projects} projects</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card className="hover:shadow-md transition-all duration-200 border-0 bg-gradient-to-r from-background to-muted/10">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold">{skill.name}</h4>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className={`${skillInfo.color} text-xs`}>
                                      {skillInfo.label}
                                    </Badge>
                                    <span className="text-sm font-medium">{skill.level}%</span>
                                  </div>
                                </div>
                                <Progress value={skill.level} className="h-2 mb-2" />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                  <span>{skill.years} years experience</span>
                                  <span>{skill.projects} projects completed</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}
