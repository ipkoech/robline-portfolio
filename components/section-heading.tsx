import type { ReactNode } from "react"

interface SectionHeadingProps {
  children: ReactNode
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{children}</h2>
      <div className="w-24 h-1 bg-primary rounded-full"></div>
    </div>
  )
}

