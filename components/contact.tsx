"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import SectionHeading from "./section-heading"
import { useState } from "react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "roblineyegon@gmail.com",
    href: "mailto:roblineyegon@gmail.com",
    description: "Best for detailed inquiries and project discussions",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    available: "24/7",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+254701389190",
    href: "tel:+254701389190",
    description: "Available for urgent matters and consultations",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    available: "9 AM - 6 PM EAT",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+254701389190",
    href: "https://wa.me/254701389190",
    description: "Quick messages and project updates",
    color: "from-green-600 to-green-700",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-600/20",
    available: "9 AM - 9 PM EAT",
  },
  {
    icon: Globe,
    title: "Website",
    value: "notebookplusai.com",
    href: "https://notebookplusai.com",
    description: "Check out my latest project and innovations",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    available: "Always Online",
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/ipkoech",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/robline-yegon-142631339/",
    color: "hover:text-blue-600",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "#",
    color: "hover:text-blue-400",
  },
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

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(type)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-l from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
      </div>

      <SectionHeading>Get In Touch</SectionHeading>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        {/* Introduction */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with
            fellow developers and entrepreneurs. Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <Card
                className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${method.bgColor} border ${method.borderColor} bg-gradient-to-br from-background to-muted/20`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color}`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {method.available}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="font-medium text-foreground">{method.value}</span>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(method.value, method.title)}
                        className="h-8 w-8 p-0"
                      >
                        {copiedItem === method.title ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                        <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <Button asChild className="w-full group-hover:scale-105 transition-transform">
                    <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                      Contact via {method.title}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Availability */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Based in East Africa</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Nairobi, Kenya</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available for remote work globally and on-site projects within Kenya and East Africa.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>Availability</CardTitle>
                  <CardDescription>Current status and schedule</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Available for Projects</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Timezone</span>
                  <span className="text-sm font-medium">EAT (UTC+3)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="text-sm font-medium">Within 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-xl font-bold mb-6">Connect on Social Media</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                asChild
                className={`rounded-full hover:scale-110 transition-all duration-300 ${social.color}`}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a full-stack web application, AI-powered solution, or technical consultation, I'm here
                to help bring your ideas to life. Let's discuss how we can work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <a href="mailto:roblineyegon@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Start a Conversation
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="group bg-transparent">
                  <a href="https://wa.me/254701389190" target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Quick Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
