import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../utils/cn";
import { MotionPrimitive } from "../../ux";

// --- Drawer Context ---
interface DrawerContextType {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

// --- Drawer Root ---
interface DrawerProps {
    children: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

/**
 * Drawer component for sliding panels.
 * Supports positioning on all four sides.
 *
 * @example
 * <Drawer>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent side="right">Content</DrawerContent>
 * </Drawer>
 */
export const Drawer = ({ children, open: controlledOpen, onOpenChange }: DrawerProps) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : uncontrolledOpen;
    const setOpen = isControlled ? onOpenChange! : setUncontrolledOpen;

    return (
        <DrawerContext.Provider value={{ open, setOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};

// --- Drawer Trigger ---
export const DrawerTrigger = ({ children, className }: { children: ReactNode; className?: string }) => {
    const { setOpen } = useContext(DrawerContext)!;
    return (
        <div
            onClick={() => setOpen(true)}
            className={cn("inline-flex cursor-pointer", className)}
        >
            {children}
        </div>
    );
};

// --- Drawer Content ---
interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
    side?: "left" | "right" | "top" | "bottom";
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
    ({ children, className, side = "right", ...props }, ref) => {
        const { open, setOpen } = useContext(DrawerContext)!;
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            if (open) setIsVisible(true);
            // Delay unmounting for animation? 
            // Simple approach: render if open or fading out.
            // Using MotionPrimitive handles entry/exit if configured.
        }, [open]);

        if (!open && !isVisible) return null;
        if (typeof document === "undefined") return null;

        const sideClasses = {
            right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
            left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
            top: "inset-x-0 top-0 h-96 w-full border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 h-96 w-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        };

        return createPortal(
            <>
                {open && (
                    <div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
                        onClick={() => setOpen(false)}
                        data-state={open ? "open" : "closed"}
                    />
                )}
                <div
                    ref={ref}
                    className={cn(
                        "fixed z-50 grid gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out duration-300 dark:bg-gray-950 sm:max-w-sm",
                        sideClasses[side],
                        className
                    )}
                    data-state={open ? "open" : "closed"}
                    {...props}
                    onAnimationEnd={() => {
                        if (!open) setIsVisible(false);
                    }}
                >
                    {open && children}
                </div>
            </>,
            document.body
        );
    }
);
DrawerContent.displayName = "DrawerContent";

// --- Drawer Header/Footer/Title/Desc ---
export const DrawerHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
        {...props}
    />
)
DrawerHeader.displayName = "DrawerHeader"

export const DrawerFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
)
DrawerFooter.displayName = "DrawerFooter"

export const DrawerTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("text-lg font-semibold text-gray-950 dark:text-gray-50", className)}
        {...props}
    />
))
DrawerTitle.displayName = "DrawerTitle"

export const DrawerDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
        {...props}
    />
))
DrawerDescription.displayName = "DrawerDescription"
