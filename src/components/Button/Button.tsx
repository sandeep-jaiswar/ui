import type { ButtonProps } from "./types"
import "./button.css"

function Spinner({ size }: { size: NonNullable<ButtonProps["size"]> }) {
  const dim = size === "xs" ? 12 : size === "sm" || size === "md" ? 16 : 20

  return (
    <svg className="btn__spinner-icon" width={dim} height={dim} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }} />
      <path fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" style={{ opacity: 0.75 }} />
    </svg>
  )
}

/**
 * Button component for user actions.
 * Supports various intents, variants, sizes and shapes including loading state.
 * Zero external dependencies — uses native <button> with full ARIA support.
 *
 * @example
 * <Button intent="primary" onClick={handleClick}>Click me</Button>
 *
 * @example
 * <Button loading>Saving...</Button>
 *
 * @example
 * <Button variant="outline" intent="danger">Delete</Button>
 */
const Button = ({
  className,
  intent = "primary",
  variant = "solid",
  size = "md",
  shape = "rounded",
  loading = false,
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  autoFocus,
  style,
  ...props
}: ButtonProps) => {
  const resolvedVariant = variant === "" ? "solid" : variant
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

  const classes = ["btn", className].filter(Boolean).join(" ")

  return (
    <button
      type="button"
      data-intent={intent}
      data-variant={resolvedVariant}
      data-size={size}
      data-shape={shape}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      className={classes}
      style={style}
      {...props}
    >
      <span className={`btn__content${loading ? " btn__content--hidden" : ""}`}>
        {leadingIcon ? <span className="btn__icon">{leadingIcon}</span> : null}
        {children ? <span>{children}</span> : null}
        {trailingIcon ? <span className="btn__icon">{trailingIcon}</span> : null}
      </span>

      {loading ? (
        <span className="btn__spinner" aria-label="Loading">
          <Spinner size={size} />
        </span>
      ) : null}
    </button>
  )
}

Button.displayName = "Button"

export default Button
