"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
  
    ref={ref}
    className={cn(
      "relative   w-full overflow-hidden rounded-full   bg-primary/20",
      className
    )}
    
    {...props}
  >
    <ProgressPrimitive.Indicator
      className=" h-[2px] w-full flex-1 bg-cyan-500 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      
    />
   
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
