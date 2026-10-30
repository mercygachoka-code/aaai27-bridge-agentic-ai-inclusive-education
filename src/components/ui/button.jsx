import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159A9C] disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
  
  const variants = {
    default: "bg-[#243B6B] text-white hover:bg-[#1C2E52] active:scale-[0.98]",
    secondary: "bg-[#159A9C] text-white hover:bg-[#0F7577] active:scale-[0.98]",
    gold: "bg-[#F2B84B] text-[#1C2E52] hover:bg-[#F5C56B] active:scale-[0.98]",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-[#243B6B]",
    ghost: "hover:bg-gray-100 text-[#243B6B]",
  }

  const sizes = {
    default: "h-11 px-5 py-2.5",
    sm: "h-9 rounded-md px-3 text-xs",
    lg: "h-12 rounded-lg px-8 text-base",
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
