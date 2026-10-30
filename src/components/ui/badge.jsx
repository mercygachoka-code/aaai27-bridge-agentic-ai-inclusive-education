import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = ({ className, variant = "default", ...props }) => {
  const variants = {
    default: "bg-[#243B6B] text-white",
    secondary: "bg-[#159A9C] text-white",
    gold: "bg-[#F2B84B] text-[#1C2E52]",
    outline: "text-[#243B6B] border border-gray-300 bg-white",
    subtle: "bg-[#243B6B]/10 text-[#243B6B]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
