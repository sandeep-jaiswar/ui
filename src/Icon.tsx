import React from "react"

export interface IconProps {
  /** Icon name or custom SVG element */
  name?: string
  /** Custom SVG element */
  children?: React.ReactNode
  /** Icon size */
  size?: "small" | "medium" | "large" | "xlarge" | number
  /** Icon color */
  color?: "primary" | "secondary" | "tertiary" | "system" | "success" | "warning" | "error" | "custom"
  /** Custom color value */
  customColor?: string
  /** Additional CSS classes */
  className?: string
  /** Test ID for testing */
  testId?: string
}

/** iOS-inspired icon component with system icons and custom SVG support */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, children, size = "medium", color = "primary", customColor, className = "", testId, ...props }, ref) => {
    const sizeMap = {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 32,
    }

    const iconSize = typeof size === "number" ? size : sizeMap[size]

    const colorStyles = {
      primary: "text-label-primary dark:text-label-primary-dark",
      secondary: "text-label-secondary dark:text-label-secondary-dark",
      tertiary: "text-label-tertiary dark:text-label-tertiary-dark",
      system: "text-systemBlue-500 dark:text-systemBlue-400",
      success: "text-systemGreen-500 dark:text-systemGreen-400",
      warning: "text-systemOrange-500 dark:text-systemOrange-400",
      error: "text-systemRed-500 dark:text-systemRed-400",
      custom: "",
    }

    /**
     * Collection of system icons
     */
    const systemIcons = {
      chevron: (
        <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06L7.28 12.78a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
      ),
      plus: (
        <path d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z" />
      ),
      minus: <path d="M4 8a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 014 8z" />,
      close: (
        <path d="M4.293 4.293a1 1 0 011.414 0L8 6.586l2.293-2.293a1 1 0 111.414 1.414L9.414 8l2.293 2.293a1 1 0 01-1.414 1.414L8 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L6.586 8 4.293 5.707a1 1 0 010-1.414z" />
      ),
      check: (
        <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
      ),
      search: (
        <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
      ),
      heart: (
        <path d="M8 14.25l-.345-.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 9.731 0 7.693 0 5.25 0 2.908 1.875 1 4.25 1S8.5 2.908 8.5 5.25c0-2.342 1.875-4.25 4.25-4.25S16 2.908 16 5.25c0 2.443-2.045 4.481-3.885 5.736a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345-.666a.752.752 0 01-.69 0L8 14.25z" />
      ),
      star: (
        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
      ),
      home: (
        <path d="M8.707 1.5a1 1 0 00-1.414 0L.646 8.146a.5.5 0 00.708.708L2 8.207V13.5A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5V8.207l.646.647a.5.5 0 00.708-.708L8.707 1.5zM13 7.207V13.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V7.207l5-5 5 5z" />
      ),
      settings: (
        <path d="M8 4.754a3.246 3.246 0 100 6.492 3.246 3.246 0 000-6.492zM5.754 8a2.246 2.246 0 114.492 0 2.246 2.246 0 01-4.492 0z" />
      ),
    }

    /**
     * Renders the appropriate icon based on props
     */
    const renderIcon = () => {
      if (children) {
        return children
      }

      if (name && systemIcons[name as keyof typeof systemIcons]) {
        return systemIcons[name as keyof typeof systemIcons]
      }

      // Default icon if name not found
      return systemIcons.settings
    }

    return (
      <svg
        ref={ref}
        width={iconSize}
        height={iconSize}
        viewBox="0 0 16 16"
        fill="currentColor"
        className={`${colorStyles[color]} ${className}`.trim()}
        style={color === "custom" && customColor ? { color: customColor } : undefined}
        data-testid={testId}
        {...props}
      >
        {renderIcon()}
      </svg>
    )
  }
)

Icon.displayName = "Icon"