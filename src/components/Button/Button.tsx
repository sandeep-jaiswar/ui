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

function getFocusRingClasses(intent: NonNullable<ButtonProps["intent"]>) {
  switch (intent) {
    case "primary":
      return "focus-visible:ring-blue-500"
    case "secondary":
      return "focus-visible:ring-gray-500"
    case "tertiary":
      return "focus-visible:ring-gray-500"
    case "danger":
      return "focus-visible:ring-red-500"
    case "success":
      return "focus-visible:ring-green-500"
    case "warning":
      return "focus-visible:ring-amber-500"
  }
}

function getIntentVariantClasses(
  intent: NonNullable<ButtonProps["intent"]>,
  variant: NonNullable<ButtonProps["variant"]>
) {
  if (variant === "link") {
    switch (intent) {
      case "danger":
        return "text-red-700 hover:text-red-800 underline underline-offset-4"
      case "success":
        return "text-green-700 hover:text-green-800 underline underline-offset-4"
      case "warning":
        return "text-amber-700 hover:text-amber-800 underline underline-offset-4"
      case "secondary":
      case "tertiary":
        return "text-gray-700 hover:text-gray-900 underline underline-offset-4"
      case "primary":
        return "text-blue-700 hover:text-blue-800 underline underline-offset-4"
    }
  }

  if (variant === "ghost") {
    switch (intent) {
      case "danger":
        return "text-red-700 hover:bg-red-50 active:bg-red-100"
      case "success":
        return "text-green-700 hover:bg-green-50 active:bg-green-100"
      case "warning":
        return "text-amber-800 hover:bg-amber-50 active:bg-amber-100"
      case "secondary":
        return "text-gray-900 hover:bg-gray-100 active:bg-gray-200"
      case "tertiary":
        return "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
      case "primary":
        return "text-blue-700 hover:bg-blue-50 active:bg-blue-100"
    }
  }

  if (variant === "outline") {
    switch (intent) {
      case "danger":
        return "border border-red-600 text-red-700 hover:bg-red-50 active:bg-red-100"
      case "success":
        return "border border-green-600 text-green-700 hover:bg-green-50 active:bg-green-100"
      case "warning":
        return "border border-amber-600 text-amber-800 hover:bg-amber-50 active:bg-amber-100"
      case "secondary":
        return "border border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100"
      case "tertiary":
        return "border border-gray-200 text-gray-700 hover:bg-gray-50 active:bg-gray-100"
      case "primary":
        return "border border-blue-600 text-blue-700 hover:bg-blue-50 active:bg-blue-100"
    }
  }

  // solid
  switch (intent) {
    case "danger":
      return "bg-red-600 text-white hover:bg-red-700 active:bg-red-800"
    case "success":
      return "bg-green-600 text-white hover:bg-green-700 active:bg-green-800"
    case "warning":
      return "bg-amber-500 text-black hover:bg-amber-600 active:bg-amber-700"
    case "secondary":
      return "bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950"
    case "tertiary":
      return "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300"
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
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
    "relative inline-flex select-none items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

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
      autoFocus={autoFocus}
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
