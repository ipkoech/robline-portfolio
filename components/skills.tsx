"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "PHP", "JavaScript (ES6+)", "TypeScript", "Ruby", "HTML5", "CSS3", "SQL"],
  },
  {
    id: "frameworks",
    name: "Frameworks & Libraries",
    skills: [
      "Flask",
      "Django",
      "Laravel",
      "Next.js",
      "Node.js (Express)",
      "React",
      "Angular",
      "Vue.js",
      "Ruby on Rails",
      "Tailwind CSS",
      "FastAPI",
    ],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite", "Firebase", "Elasticsearch"],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Google Cloud Platform",
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "CI/CD pipelines",
      "Linux administration",
      "Nginx",
      "Apache",
      "Terraform",
    ],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    skills: [
      "OpenAI API",
      "GPT Integration",
      "Natural Language Processing",
      "Machine Learning",
      "TensorFlow",
      "Scikit-learn",
      "AI-powered Applications",
    ],
  },
  {
    id: "tools",
    name: "Tools & Methodologies",
    skills: [
      "RESTful API design",
      "GraphQL",
      "Microservices architecture",
      "Agile/Scrum methodology",
      "Git version control",
      "Test-Driven Development",
      "UI/UX Design",
      "Performance Optimization",
      "Security Best Practices",
      "Code Review",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading>Technical Skills</SectionHeading>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-6 md:mb-8 h-auto p-1">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center justify-center p-3 md:p-4 bg-card rounded-lg shadow-sm border border-border hover:border-primary transition-all duration-200 hover:shadow-md"
                      >
                        <span className="font-medium text-sm md:text-base text-center">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}

