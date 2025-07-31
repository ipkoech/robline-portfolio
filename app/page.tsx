import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen px-3">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

