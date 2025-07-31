"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart, Code, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigationLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    {
      href: "https://github.com/ipkoech",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      href: "https://www.linkedin.com/in/robline-yegon-142631339/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      href: "https://x.com/robby_yego",
      icon: Twitter,
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      href: "mailto:roblineyegon@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-green-600",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-background via-muted/30 to-background border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-2">
                Robline Kipkoech Yegon
              </h2>
              <p className="text-lg text-primary font-semibold mb-2">Full Stack Developer & Technical Leader</p>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Building exceptional digital experiences with modern technologies. Passionate about creating scalable
                solutions that make a difference.
              </p>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for Projects
              </Badge>
              <Badge variant="outline" className="bg-background/50">
                <Coffee className="w-3 h-3 mr-1" />
                Remote Friendly
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className={`rounded-full bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${social.color}`}
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="h-5 w-5 mr-2 text-primary" />
              Quick Links
            </h3>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Email</p>
                <Link
                  href="mailto:roblineyegon@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  roblineyegon@gmail.com
                </Link>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Phone</p>
                <Link href="tel:+254701389190" className="text-foreground hover:text-primary transition-colors">
                  +254701389190
                </Link>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p className="text-foreground">Nairobi, Kenya</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Website</p>
                <Link
                  href="https://notebookplusai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  notebookplusai.com
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Robline Kipkoech Yegon. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> and{" "}
                <Coffee className="h-4 w-4 text-amber-600" />
              </span>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
              <div className="flex flex-wrap gap-4">
                <span>Built with Next.js & TypeScript</span>
                <span>•</span>
                <span>Deployed on Vercel</span>
                <span>•</span>
                <span>Designed with Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
