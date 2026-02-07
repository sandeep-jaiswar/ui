import React, { createContext, useContext, useState, ReactNode } from "react";
import { cn } from "../../utils/cn";

// --- Tabs Context ---
interface TabsContextType {
    value: string;
    onValueChange: (value: string) => void;
    orientation: "horizontal" | "vertical";
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

// --- Tabs Root ---
interface TabsProps {
    children: ReactNode;
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
    className?: string;
}

/**
 * Tabs component for organizing content into sections.
 *
 * @example
 * <Tabs defaultValue="account">
 *   <TabsList>
 *     <TabsTrigger value="account">Account</TabsTrigger>
 *     <TabsTrigger value="password">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="account">Account info</TabsContent>
 *   <TabsContent value="password">Password inputs</TabsContent>
 * </Tabs>
 */
export const Tabs = ({
    children,
    value: controlledValue,
    defaultValue,
    onValueChange,
    orientation = "horizontal",
    className
}: TabsProps) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;

    const handleValueChange = (newValue: string) => {
        if (!isControlled) {
            setUncontrolledValue(newValue);
        }
        onValueChange?.(newValue);
    };

    if (value === undefined && defaultValue === undefined && !isControlled) {
        // Should we warn? Or just let it be empty?
        // Let's assume the user handles it or we default to first item if we could know it.
        // For now, empty string is fine as "no selection" or undefined.
    }

    return (
        <TabsContext.Provider value={{ value: value || "", onValueChange: handleValueChange, orientation }}>
            <div
                className={cn("flex", orientation === "vertical" ? "flex-col" : "flex-col", className)}
                data-orientation={orientation}
            >
                {children}
            </div>
        </TabsContext.Provider>
    );
};

// --- Tabs List ---
export const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, ref) => {
        const { orientation } = useContext(TabsContext)!;
        return (
            <div
                ref={ref}
                role="tablist"
                aria-orientation={orientation}
                className={cn(
                    "inline-flex h-9 items-center justify-center rounded-lg bg-gray-100 p-1 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
TabsList.displayName = "TabsList";

// --- Tabs Trigger ---
interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ children, className, value, ...props }, ref) => {
        const { value: selectedValue, onValueChange } = useContext(TabsContext)!;
        const isSelected = selectedValue === value;

        return (
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`tabpanel-${value}`}
                data-state={isSelected ? "active" : "inactive"}
                onClick={() => onValueChange(value)}
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm dark:ring-offset-gray-950 dark:data-[state=active]:bg-gray-950 dark:data-[state=active]:text-gray-50",
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
TabsTrigger.displayName = "TabsTrigger";

// --- Tabs Content ---
interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ children, className, value, ...props }, ref) => {
        const { value: selectedValue } = useContext(TabsContext)!;
        const isSelected = selectedValue === value;

        if (!isSelected) return null;

        return (
            <div
                ref={ref}
                role="tabpanel"
                id={`tabpanel-${value}`}
                tabIndex={0}
                className={cn(
                    "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
TabsContent.displayName = "TabsContent";
