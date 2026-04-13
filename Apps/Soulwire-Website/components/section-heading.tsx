import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, className, centered = true }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-foreground">{title}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{subtitle}</p>
      )}
    </div>
  )
}
