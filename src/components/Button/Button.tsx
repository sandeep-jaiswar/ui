import { Button as BaseButton } from "@base-ui/react/button"
import { cn } from "../../utils/cn"
import type { ButtonProps } from "./types"

function getSizeClasses(size: NonNullable<ButtonProps["size"]>) {
  switch (size) {
    case "xs":
      return "h-6 px-2 text-xs"
    case "sm":
      return "h-8 px-3 text-sm"
    case "md":
      return "h-10 px-4 text-sm"
    case "lg":
      return "h-12 px-5 text-base"
    case "xl":
      return "h-14 px-6 text-base"
  }
}

function getSquareSizeClasses(size: NonNullable<ButtonProps["size"]>) {
  switch (size) {
    case "xs":
      return "h-6 w-6"
    case "sm":
      return "h-8 w-8"
    case "md":
      return "h-10 w-10"
    case "lg":
      return "h-12 w-12"
    case "xl":
      return "h-14 w-14"
  }
}

function getShapeClasses(shape: NonNullable<ButtonProps["shape"]>) {
  switch (shape) {
    case "rounded":
      return "rounded-md"
    case "pill":
      return "rounded-full"
    case "square":
      return "rounded-md"
  }
}

// Helper to get focus classes (standardized)
function getFocusRingClasses(intent: NonNullable<ButtonProps["intent"]>) {
  if (intent === "danger") return "focus-visible:ring-destructive"
  if (intent === "success") return "focus-visible:ring-green-500"
  if (intent === "warning") return "focus-visible:ring-amber-500"
  return "focus-visible:ring-ring"
}

function getIntentVariantClasses(
  intent: NonNullable<ButtonProps["intent"]>,
  variant: NonNullable<ButtonProps["variant"]>
) {
  if (variant === "link") {
    switch (intent) {
      case "danger":
        return "text-destructive underline-offset-4 hover:underline"
      case "success":
        return "text-green-600 underline-offset-4 hover:underline dark:text-green-500"
      case "warning":
        return "text-amber-600 underline-offset-4 hover:underline dark:text-amber-500"
      case "primary":
      default:
        return "text-primary underline-offset-4 hover:underline"
    }
  }

  if (variant === "ghost") {
    switch (intent) {
      case "danger":
        return "text-destructive hover:bg-destructive hover:text-destructive-foreground"
      case "success":
        return "text-green-600 hover:bg-green-100 dark:text-green-500 dark:hover:bg-green-900/20"
      case "warning":
        return "text-amber-600 hover:bg-amber-100 dark:text-amber-500 dark:hover:bg-amber-900/20"
      case "primary":
      default:
        return "hover:bg-accent hover:text-accent-foreground"
    }
  }

  if (variant === "outline") {
    switch (intent) {
      case "danger":
        return "border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
      case "success":
        return "border-green-600 text-green-600 hover:bg-green-100 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-900/20"
      case "warning":
        return "border-amber-600 text-amber-600 hover:bg-amber-100 dark:border-amber-500 dark:text-amber-500 dark:hover:bg-amber-900/20"
      case "primary":
      default:
        return "border-input bg-background hover:bg-accent hover:text-accent-foreground"
    }
  }

  // solid
  switch (intent) {
    case "danger":
      return "bg-destructive text-destructive-foreground hover:bg-destructive/90"
    case "success":
      return "bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
    case "warning":
      return "bg-amber-500 text-white hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700"
    case "secondary":
      // Keeping distinct "dark" look for legacy support, or map to 'secondary' if preferred.
      // Let's map to foreground/background inverse to keep it "dark"
      return "bg-foreground text-background hover:bg-foreground/90"
    case "tertiary":
      return "bg-secondary text-secondary-foreground hover:bg-secondary/80"
    case "primary":
    default:
      return "bg-primary text-primary-foreground hover:bg-primary/90"
  }
}

function Spinner({ size }: { size: NonNullable<ButtonProps["size"]> }) {
  const sizeClasses = size === "xs" ? "h-3 w-3" : size === "sm" ? "h-4 w-4" : size === "md" ? "h-4 w-4" : "h-5 w-5"

  return (
    <svg className={cn("animate-spin", sizeClasses)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
    </svg>
  )
}

/**
 * Button component for user actions.
 * Supports various styles, sizes, and states including loading.
 * Wraps @base-ui/react/button for accessibility.
 *
 * @example
 * <Button intent="primary" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * @example
 * <Button loading>Saving...</Button>
 */
const Button = ({
  className,
  intent = "primary",
  variant: variantProp = "solid",
  size = "md",
  shape = "rounded",
  loading = false,
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  autoFocus,
  ...props
}: ButtonProps) => {
  const variant = variantProp === "" ? "solid" : variantProp
  const isIconOnly = !children && (leadingIcon || trailingIcon)
  const isDisabled = Boolean(disabled || loading)

  if (process.env.NODE_ENV !== "production") {
    if (intent === "danger" && autoFocus) {
      // eslint-disable-next-line no-console
      console.warn('[Button] `intent="danger"` should not be default-focused. Remove `autoFocus`.')
    }
    if (isIconOnly) {
      const ariaLabel = (props["aria-label"] ?? props["aria-labelledby"]) as string | undefined
      if (!ariaLabel) {
        // eslint-disable-next-line no-console
        console.warn("[Button] Icon-only buttons must have `aria-label` or `aria-labelledby`.")
      }
      if (!props.title) {
        // eslint-disable-next-line no-console
        console.warn("[Button] Icon-only buttons should provide `title` (tooltip).")
      }
    }
  }

  const base =
    "relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background"

  const shapeClasses = getShapeClasses(shape)
  const sizeClasses = shape === "square" ? getSquareSizeClasses(size) : getSizeClasses(size)
  const focusRing = getFocusRingClasses(intent)
  const intentVariant = getIntentVariantClasses(intent, variant)

  const content = (
    <span className={cn("inline-flex items-center gap-2", loading && "opacity-0")}>
      {leadingIcon ? <span className="inline-flex shrink-0">{leadingIcon}</span> : null}
      {children ? <span className="inline-flex">{children}</span> : null}
      {trailingIcon ? <span className="inline-flex shrink-0">{trailingIcon}</span> : null}
    </span>
  )

  return (
    <BaseButton
      data-intent={intent}
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      autoFocus={autoFocus} // eslint-disable-line jsx-a11y/no-autofocus
      className={cn(
        base,
        shapeClasses,
        sizeClasses,
        focusRing,
        intentVariant,
        variant === "link" && "h-auto px-0",
        className
      )}
      {...props}
    >
      {content}
      {loading ? (
        <span className="absolute inset-0 inline-flex items-center justify-center">
          <Spinner size={size} />
        </span>
      ) : null}
    </BaseButton>
  )
}

Button.displayName = "Button"

export default Button
