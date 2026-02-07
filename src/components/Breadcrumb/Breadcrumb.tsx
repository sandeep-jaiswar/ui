import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";

// --- Breadcrumb Root ---
interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    separator?: ReactNode;
}

/**
 * Breadcrumb component for navigation hierarchy.
 * Automatically inserts separators between items.
 *
 * @example
 * <Breadcrumb>
 *   <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
 *   <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
 * </Breadcrumb>
 */
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
    ({ children, className, separator = "/", ...props }, ref) => {
        const count = React.Children.count(children);

        return (
            <nav
                ref={ref}
                aria-label="breadcrumb"
                className={cn("flex items-center text-sm text-gray-500", className)}
                {...props}
            >
                <ol className="flex items-center gap-2">
                    {React.Children.map(children, (child, index) => {
                        if (!React.isValidElement(child)) return child;

                        // Check if child is BreadcrumbItem to inspect its props?
                        // Or just render it. The Item should handle its own content.

                        // We need to inject separator between items.
                        // But if we simply map, we can't easily inject a wrapping <li> for separator.
                        // Actually, semantic HTML for breadcrumb is usually:
                        // <ol> <li> <a href>Home</a> </li> <li aria-hidden="true">/</li> <li> Current </li> </ol>
                        // OR: <ol> <li> <a href>Home</a> <span separator>/</span> </li> ... </ol>

                        // Let's go with: Item renders <li>. If it's not the last item, we render a separator AFTER it?
                        // But React.Children.map doesn't expose "isLast" easily if children are conditional.
                        // Ideally the user passes BreadcrumbItem and BreadcrumbSeparator explicitly.
                        // BUT common pattern is auto-separator.

                        // Let's support explicit BreadcrumbSeparator first, or auto-sep?
                        // Implementation plan said "Automatic separator insertion".

                        return (
                            <>
                                {child}
                                {index < count - 1 && (
                                    <li aria-hidden="true" className="select-none text-gray-400">
                                        {separator}
                                    </li>
                                )}
                            </>
                        );
                    })}
                </ol>
            </nav>
        );
    }
);
Breadcrumb.displayName = "Breadcrumb";

// --- Breadcrumb Item ---
export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.LiHTMLAttributes<HTMLLIElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <li
                ref={ref}
                className={cn("inline-flex items-center gap-1.5", className)}
                {...props}
            >
                {children}
            </li>
        );
    }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// --- Breadcrumb Link ---
export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }>(
    ({ children, className, href, ...props }, ref) => {
        // Simple anchor for now. if asChild is needed we'd use Slot.
        const Comp = "a";
        return (
            <Comp
                ref={ref}
                href={href}
                className={cn("transition-colors hover:text-gray-950 dark:hover:text-gray-50", className)}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// --- Breadcrumb Page (Current) ---
export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
    ({ children, className, ...props }, ref) => {
        return (
            <span
                ref={ref}
                role="link"
                aria-disabled="true"
                aria-current="page"
                className={cn("font-normal text-gray-950 dark:text-gray-50", className)}
                {...props}
            >
                {children}
            </span>
        );
    }
);
BreadcrumbPage.displayName = "BreadcrumbPage";

// --- Breadcrumb Separator (Explicit) ---
export const BreadcrumbSeparator = ({ children, className }: React.HTMLAttributes<HTMLLIElement>) => (
    <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)}>
        {children || "/"}
    </li>
);
