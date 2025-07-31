"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote, Star, Play, Pause, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SectionHeading from "./section-heading"

const testimonialsData = [
    {
        name: "Paminus Nyamweya",
        title: "Co-founder Revenue Catalyst Limited",
        role: "CEO Tezlink Technologies",
        testimonial:
            "Working with Robline has been a game-changer for our projects. His expertise in modern web technologies and commitment to quality is truly impressive. He consistently delivers robust and scalable solutions that exceed expectations.",
        avatar: "/placeholder.svg?height=120&width=120",
        rating: 5,
        company: "Revenue Catalyst",
        project: "NoteBook+ Platform",
        color: "from-blue-500 to-purple-600",
    },
    {
        name: "Hope Ijaza",
        title: "Digital Marketing Specialist",
        role: "Brand Strategist",
        testimonial:
            "Robline developed a stunning portfolio website that has significantly boosted my online presence. His design sense and attention to detail are exceptional. The site perfectly captures my brand identity and has generated incredible results.",
        avatar: "/placeholder.svg?height=120&width=120",
        rating: 5,
        company: "Independent",
        project: "Portfolio Website",
        color: "from-pink-500 to-rose-600",
    },
    {
        name: "Gideon Kimutai",
        title: "Founder & CEO",
        role: "NextStepGlobal Limited",
        testimonial:
            "The e-commerce platform Robline built for us is fast, secure, and incredibly user-friendly. His ability to understand our complex business needs and translate them into a functional, beautiful product is remarkable. Highly recommended!",
        avatar: "/placeholder.svg?height=120&width=120",
        rating: 5,
        company: "NextStepGlobal",
        project: "E-commerce Platform",
        color: "from-green-500 to-emerald-600",
    },
    {
        name: "Kitheka John",
        title: "Senior Full Stack Developer",
        role: "Co-founder NoteBook+",
        testimonial:
            "As a fellow developer, I have immense respect for Robline's technical skills and architectural thinking. He writes clean, efficient code and is an exceptional collaborator. His knowledge of cutting-edge technologies is impressive.",
        avatar: "/placeholder.svg?height=120&width=120",
        rating: 5,
        company: "NoteBook+",
        project: "AI Platform Development",
        color: "from-indigo-500 to-blue-600",
    },
    {
        name: "Tom Maples",
        title: "Founder & Managing Director",
        role: "Revenue Catalyst Limited",
        testimonial:
            "Robline is a top-tier developer who consistently exceeds expectations. His problem-solving skills, technical expertise, and dedication to delivering quality work are second to none. It's always a pleasure collaborating with him.",
        avatar: "/placeholder.svg?height=120&width=120",
        rating: 5,
        company: "Revenue Catalyst",
        project: "Enterprise Solutions",
        color: "from-orange-500 to-red-600",
    },
]

const cardVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 400 : -400,
        opacity: 0,
        rotateY: direction > 0 ? 45 : -45,
        scale: 0.8,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 400 : -400,
        opacity: 0,
        rotateY: direction < 0 ? 45 : -45,
        scale: 0.8,
    }),
}

export default function Testimonials() {
    const [[page, direction], setPage] = useState([0, 0])
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const i = ((page % testimonialsData.length) + testimonialsData.length) % testimonialsData.length

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }

    const goToSlide = (index: number) => {
        setPage([index, index > i ? 1 : -1])
    }

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            paginate(1)
        }, 6000)

        return () => clearInterval(interval)
    }, [page, isAutoPlaying])

    const testimonial = testimonialsData[i]

    return (
        <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative overflow-hidden">
            {/* Enhanced Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/5 via-secondary/5 to-primary/5 rounded-full blur-3xl animate-spin"
                    style={{ animationDuration: "20s" }}
                ></div>
            </div>

            <SectionHeading>Client Testimonials</SectionHeading>

            <div className="relative max-w-6xl mx-auto">
                {/* Modern Navigation */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(-1)}
                            className="rounded-full w-12 h-12 border-2 hover:scale-110 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(1)}
                            className="rounded-full w-12 h-12 border-2 hover:scale-110 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Auto-play Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {isAutoPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                            {isAutoPlaying ? "Pause" : "Play"}
                        </Button>

                        {/* Counter */}
                        <div className="text-sm text-muted-foreground font-medium">
                            {String(i + 1).padStart(2, "0")} / {String(testimonialsData.length).padStart(2, "0")}
                        </div>
                    </div>
                </div>

                {/* Main Testimonial Display */}
                <div className="relative min-h-[500px] perspective-1000">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={cardVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                rotateY: { duration: 0.4 },
                                scale: { duration: 0.4 },
                            }}
                            className="absolute inset-0"
                        >
                            <Card className="h-full border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-xl overflow-hidden">
                                <CardContent className="p-0 h-full">
                                    <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                                        {/* Left Side - Content */}
                                        <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                                            {/* Header */}
                                            <div className="mb-8">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Badge
                                                        variant="secondary"
                                                        className={`bg-gradient-to-r ${testimonial.color} text-white border-none px-3 py-1`}
                                                    >
                                                        {testimonial.project}
                                                    </Badge>
                                                    <div className="flex items-center gap-1">
                                                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                                                            <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                                                    Client Testimonial
                                                </h3>
                                            </div>

                                            {/* Quote */}
                                            <div className="relative mb-8">
                                                <div
                                                    className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center opacity-10`}
                                                >
                                                    <Quote className="w-8 h-8 text-white" />
                                                </div>
                                                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground relative z-10">
                                                    "{testimonial.testimonial}"
                                                </blockquote>
                                            </div>

                                            {/* Author Info */}
                                            <div className="flex items-center gap-4">
                                                <div className="relative">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                                                        <Image
                                                            src={testimonial.avatar || "/placeholder.svg"}
                                                            alt={testimonial.name}
                                                            width={64}
                                                            height={64}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                    <div
                                                        className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${testimonial.color} rounded-full border-2 border-background`}
                                                    ></div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-foreground">{testimonial.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                    <p className="text-xs text-muted-foreground/80">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side - Visual Element */}
                                        <div className="lg:col-span-2 relative overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-90`}></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                            {/* Pattern Overlay */}
                                            <div className="absolute inset-0 opacity-10">
                                                {mounted &&
                                                    Array.from({ length: 20 }).map((_, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="absolute w-2 h-2 bg-white rounded-full"
                                                            style={{
                                                                top: `${Math.random() * 100}%`,
                                                                left: `${Math.random() * 100}%`,
                                                            }}
                                                            animate={{
                                                                opacity: [0.3, 1, 0.3],
                                                                scale: [1, 1.5, 1],
                                                            }}
                                                            transition={{
                                                                duration: 3,
                                                                repeat: Number.POSITIVE_INFINITY,
                                                                delay: index * 0.2,
                                                            }}
                                                        />
                                                    ))}
                                            </div>

                                            {/* Company Info */}
                                            <div className="absolute bottom-8 left-8 right-8">
                                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                                    <div className="text-white/90 text-sm font-medium mb-1">Company</div>
                                                    <div className="text-white text-lg font-bold">{testimonial.company}</div>
                                                </div>
                                            </div>

                                            {/* Large Quote Mark */}
                                            <div className="absolute top-8 right-8">
                                                <Quote className="w-16 h-16 text-white/20" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center items-center gap-3 mt-12">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${i === index
                                ? "w-12 h-3 bg-gradient-to-r from-primary to-secondary"
                                : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Enhanced Stats */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center group"
                    >
                        <div className="relative mb-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-2xl font-bold text-white">{testimonialsData.length}</span>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center group"
                    >
                        <div className="relative mb-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-2xl font-bold text-white">5.0</span>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-1">
                            Average Rating
                            <div className="flex ml-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center group"
                    >
                        <div className="relative mb-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-xl font-bold text-white">100%</span>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-center group"
                    >
                        <div className="relative mb-4">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="text-2xl font-bold text-white">4+</span>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
