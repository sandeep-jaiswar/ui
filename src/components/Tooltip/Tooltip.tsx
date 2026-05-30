import React, { createContext, useContext, useState, useRef, type ReactNode } from "react"
import { cn } from "../../utils/cn"
import "./tooltip.css"

interface TooltipContextType {
  open: boolean
  openTooltip: () => void
  closeTooltip: () => void
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

const useTooltip = () => {
  const ctx = useContext(TooltipContext)
  if (!ctx) throw new Error("useTooltip must be used within a Tooltip")
  return ctx
}

/** Pass-through provider for grouping tooltips. Optional. */
export const TooltipProvider = ({ children }: { children: ReactNode }) => <>{children}</>

interface TooltipProps {
  children: ReactNode
  delayDuration?: number
}

/**
 * Tooltip component for floating informational content.
 * Uses relative positioning — no portal or external library needed.
 * Zero external dependencies.
 *
 * @example
 * <Tooltip>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent>I am a tooltip</TooltipContent>
 * </Tooltip>
 */
export const Tooltip = ({ children, delayDuration = 300 }: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openTooltip = () => {
    timeoutRef.current = setTimeout(() => setOpen(true), delayDuration)
  }

  const closeTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(false)
  }

  return (
    <TooltipContext.Provider value={{ open, openTooltip, closeTooltip }}>
      <div
        className="tooltip-root"
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onFocus={openTooltip}
        onBlur={closeTooltip}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

export const TooltipTrigger = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={cn("tooltip-trigger", className)}>{children}</div>
)

interface TooltipContentProps {
  children: ReactNode
  className?: string
  side?: "top" | "bottom" | "left" | "right"
}

export const TooltipContent = ({ children, className, side = "top" }: TooltipContentProps) => {
  const { open } = useTooltip()
  if (!open) return null

  return (
    <div role="tooltip" data-side={side} className={cn("tooltip-content", className)}>
      {children}
    </div>
  )
}
