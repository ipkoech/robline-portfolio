"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "./section-heading"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SectionHeading>About Me</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl"
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
          <h3 className="text-2xl font-bold mb-4">Full Stack Developer based in Nairobi, Kenya</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm a seasoned Full Stack Developer with expertise in Python, PHP, JavaScript, and Ruby, along with
              hands-on experience with frameworks like Flask, Django, Laravel, Node.js, React, and Angular.
            </p>
            <p>
              Throughout my career, I've demonstrated leadership in spearheading software development projects and
              mentoring teams, with a proven track record of delivering complex applications on time and to
              specification.
            </p>
            <p>
              My skills extend to architecting scalable, robust systems and deploying them on cloud platforms (AWS, GCP,
              Azure), with a focus on performance optimization and high availability.
            </p>
            <p>
              I'm passionate about creating efficient, user-friendly applications that solve real-world problems and
              deliver exceptional user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

