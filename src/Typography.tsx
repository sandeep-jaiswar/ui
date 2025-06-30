import React from "react"

export interface TypographyProps {
  /** Typography variant following iOS text styles */
  variant?:
    | "largeTitle"
    | "title1"
    | "title2"
    | "title3"
    | "headline"
    | "body"
    | "callout"
    | "subhead"
    | "footnote"
    | "caption1"
    | "caption2"
  /** Text color variant */
  color?: "primary" | "secondary" | "tertiary" | "quaternary" | "system" | "custom"
  /** Custom color value when color is 'custom' */
  customColor?: string
  /** Font weight override */
  weight?: "regular" | "medium" | "semibold" | "bold"
  /** Text alignment */
  align?: "left" | "center" | "right" | "justify"
  /** Text transform */
  transform?: "none" | "uppercase" | "lowercase" | "capitalize"
  /** Text decoration */
  decoration?: "none" | "underline" | "line-through"
  /** Truncate text with ellipsis */
  truncate?: boolean
  /** Number of lines to clamp (requires truncate) */
  lineClamp?: number
  /** HTML element to render */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label"
  /** Typography content */
  children: React.ReactNode
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired typography component following Apple's text style guidelines */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "body",
      color = "primary",
      customColor,
      weight,
      align = "left",
      transform = "none",
      decoration = "none",
      truncate = false,
      lineClamp,
      as,
      children,
      className = "",
      testId,
      ...props
    },
    ref
  ) => {
    // Map variants to iOS text styles and default HTML elements
    const variantConfig = {
      largeTitle: {
        className: "text-ios-large-title",
        defaultElement: "h1" as const,
        defaultWeight: "regular" as const,
      },
      title1: {
        className: "text-ios-title-1",
        defaultElement: "h1" as const,
        defaultWeight: "regular" as const,
      },
      title2: {
        className: "text-ios-title-2",
        defaultElement: "h2" as const,
        defaultWeight: "regular" as const,
      },
      title3: {
        className: "text-ios-title-3",
        defaultElement: "h3" as const,
        defaultWeight: "regular" as const,
      },
      headline: {
        className: "text-ios-headline",
        defaultElement: "h4" as const,
        defaultWeight: "semibold" as const,
      },
      body: {
        className: "text-ios-body",
        defaultElement: "p" as const,
        defaultWeight: "regular" as const,
      },
      callout: {
        className: "text-ios-callout",
        defaultElement: "p" as const,
        defaultWeight: "regular" as const,
      },
      subhead: {
        className: "text-ios-subhead",
        defaultElement: "p" as const,
        defaultWeight: "regular" as const,
      },
      footnote: {
        className: "text-ios-footnote",
        defaultElement: "p" as const,
        defaultWeight: "regular" as const,
      },
      caption1: {
        className: "text-ios-caption-1",
        defaultElement: "span" as const,
        defaultWeight: "regular" as const,
      },
      caption2: {
        className: "text-ios-caption-2",
        defaultElement: "span" as const,
        defaultWeight: "regular" as const,
      },
    }

    const config = variantConfig[variant]
    const Element = as || config.defaultElement

    // Color classes
    const colorClasses = {
      primary: "text-label-primary dark:text-label-primary-dark",
      secondary: "text-label-secondary dark:text-label-secondary-dark",
      tertiary: "text-label-tertiary dark:text-label-tertiary-dark",
      quaternary: "text-label-quaternary dark:text-label-quaternary-dark",
      system: "text-systemBlue-500 dark:text-systemBlue-400",
      custom: "",
    }

    // Weight classes
    const weightClasses = {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }

    // Alignment classes
    const alignClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    }

    // Transform classes
    const transformClasses = {
      none: "",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    }

    // Decoration classes
    const decorationClasses = {
      none: "",
      underline: "underline",
      "line-through": "line-through",
    }

    // Build className
    const finalWeight = weight || config.defaultWeight
    const baseClasses = [
      config.className,
      colorClasses[color],
      weightClasses[finalWeight],
      alignClasses[align],
      transformClasses[transform],
      decorationClasses[decoration],
      truncate && !lineClamp ? "truncate" : "",
      lineClamp ? `line-clamp-${lineClamp}` : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    // Custom styles for custom color
    const customStyles = color === "custom" && customColor ? { color: customColor } : {}

    return (
      <Element ref={ref as any} className={baseClasses} style={customStyles} data-testid={testId} {...props}>
        {children}
      </Element>
    )
  }
)

Typography.displayName = "Typography"
