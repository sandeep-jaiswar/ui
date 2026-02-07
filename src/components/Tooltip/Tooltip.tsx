import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../utils/cn"
// import { MotionPrimitive } from "../../ux"; // unused

// --- Tooltip Context ---
interface TooltipContextType {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLDivElement | null>
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined)

const useTooltip = () => {
  const context = useContext(TooltipContext)
  if (!context) {
    throw new Error("useTooltip must be used within a Tooltip")
  }
  return context
}

// --- Tooltip Interface ---
interface TooltipProps {
  children: ReactNode
  delayDuration?: number
}

export const TooltipProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

/**
 * Tooltip component for displaying floating content on hover/focus.
 * Uses context to share state between Trigger and Content.
 *
 * @example
 * <Tooltip>
 *   <TooltipTrigger>Hover me</TooltipTrigger>
 *   <TooltipContent>I am a tooltip</TooltipContent>
 * </Tooltip>
 */
export const Tooltip = ({ children, delayDuration = 300 }: TooltipProps) => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  const handleOpen = () => {
    timeoutRef.current = setTimeout(() => setOpen(true), delayDuration)
  }

  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(false)
  }

  return (
    <TooltipContext.Provider
      value={{
        open,
        setOpen: (val) => (val ? handleOpen() : handleClose()),
        triggerRef: triggerRef as React.RefObject<HTMLDivElement | null>,
      }}
    >
      <div
        className="relative inline-block"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onFocus={handleOpen}
        onBlur={handleClose}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  )
}

export const TooltipTrigger = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { triggerRef } = useTooltip()
  return (
    <div ref={triggerRef} className={cn("inline-flex", className)}>
      {children}
    </div>
  )
}

export const TooltipContent = ({ children, className }: { children: ReactNode; className?: string }) => {
  const { open, triggerRef } = useTooltip()
  const contentRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      // Simple top positioning logic
      setStyle({
        position: "absolute",
        top: rect.top + window.scrollY - 10 + "px", // 10px offset up
        left: rect.left + window.scrollX + rect.width / 2 + "px",
        transform: "translate(-50%, -100%)",
        zIndex: 60,
      })
    }
  }, [open, triggerRef])

  if (!open) return null
  if (typeof document === "undefined") return null

  return createPortal(
    <div
      ref={contentRef}
      style={style}
      role="tooltip"
      className={cn(
        "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border bg-gray-900 px-3 py-1.5 text-xs text-gray-50 shadow-md dark:bg-gray-50 dark:text-gray-900",
        className
      )}
    >
      {children}
      {/* Simple arrow could be added here */}
    </div>,
    document.body
  )
}
