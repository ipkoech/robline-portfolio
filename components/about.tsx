"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "./section-heading"

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading>About Me</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-sm md:max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dp.jpg-jiwYr0ifIvvm8E8Yf5Jw6ChmfESn5z.jpeg"
            alt="Robline Kipkoech Yegon"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">Technical Leader & Entrepreneur based in Nairobi, Kenya</h3>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              I'm an accomplished Full Stack Developer and Co-founder with over 4 years of experience building scalable, 
              enterprise-grade applications. My expertise spans Python, PHP, JavaScript, and Ruby ecosystems, with deep 
              proficiency in modern frameworks including Flask, Django, Laravel, Next.js, React, and Angular.
            </p>
            <p>
              As a technical leader and entrepreneur, I've successfully co-founded NoteBook+, an AI-powered knowledge 
              management platform, while leading cross-functional development teams. My proven track record includes 
              delivering complex applications that serve thousands of users, consistently meeting project deadlines 
              and exceeding performance expectations.
            </p>
            <p>
              My technical expertise extends to architecting highly scalable, fault-tolerant systems deployed across 
              multiple cloud platforms including AWS, Google Cloud Platform, and Microsoft Azure. I specialize in 
              performance optimization, implementing CI/CD pipelines, and ensuring 99.9% uptime for mission-critical applications.
            </p>
            <p>
              I'm passionate about leveraging cutting-edge technologies, including AI and machine learning, to create 
              innovative solutions that solve complex business challenges. My focus is on building user-centric applications 
              that not only meet technical requirements but also deliver exceptional user experiences and measurable business value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

