"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"
import SectionHeading from "./section-heading"

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-muted/30">
      <SectionHeading>Education & Achievements</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Education</CardTitle>
                <CardDescription>Academic background</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">B.Sc. in Software Engineering</h3>
                  <p className="text-muted-foreground">Kisii University (2017–2021)</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Comprehensive education in software development principles, algorithms, data structures, and
                    software engineering methodologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Certifications & Awards</CardTitle>
                <CardDescription>Professional achievements</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">AWS Certified Cloud Practitioner</h3>
                  <p className="text-muted-foreground">Amazon Web Services (2023)</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Validated knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Professional Affiliations</CardTitle>
                <CardDescription>Community involvement</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-base md:text-lg font-semibold">Member, IEEE Computer Society</h3>
                  <p className="text-muted-foreground">2019–Present</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Active member of the professional association for advancing technology, participating in knowledge
                    sharing and continuous learning in software engineering.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

