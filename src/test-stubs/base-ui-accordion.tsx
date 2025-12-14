import * as React from "react"

type AccordionType = "single" | "multiple"

type AccordionContextValue = {
  type: AccordionType
  value: string | null | string[]
  setValue: (next: string | null | string[]) => void
  collapsible: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const ctx = React.useContext(AccordionContext)
  if (!ctx) throw new Error("Accordion components must be used within <Accordion />")
  return ctx
}

type AccordionItemContextValue = {
  value: string
  open: boolean
  disabled: boolean
  triggerId: string
  contentId: string
}

const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null)

function useAccordionItemContext() {
  const ctx = React.useContext(AccordionItemContext)
  if (!ctx) throw new Error("AccordionItem components must be used within <AccordionItem />")
  return ctx
}

function normalizeDefaultValue(type: AccordionType, defaultValue: unknown) {
  if (type === "multiple") return Array.isArray(defaultValue) ? defaultValue : []
  return typeof defaultValue === "string" ? defaultValue : null
}

function normalizeControlledValue(type: AccordionType, value: unknown) {
  if (type === "multiple") return Array.isArray(value) ? value : []
  return typeof value === "string" ? value : value === null ? null : null
}

export const Accordion = ({
  type = "single",
  collapsible = true,
  value,
  defaultValue,
  onValueChange,
  children,
  ...props
}: any) => {
  const isControlled = value !== undefined

  const [uncontrolledValue, setUncontrolledValue] = React.useState(() => normalizeDefaultValue(type, defaultValue))

  const currentValue = isControlled ? normalizeControlledValue(type, value) : uncontrolledValue

  const setValue = React.useCallback(
    (next: any) => {
      if (!isControlled) setUncontrolledValue(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange]
  )

  const ctx = React.useMemo<AccordionContextValue>(
    () => ({ type, value: currentValue, setValue, collapsible }),
    [type, currentValue, setValue, collapsible]
  )

  return (
    <AccordionContext.Provider value={ctx}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem = ({ value, disabled = false, children, ...props }: any) => {
  const { type, value: rootValue } = useAccordionContext()

  const open = type === "multiple" ? (rootValue as string[]).includes(value) : rootValue === value

  const reactId = React.useId()
  const triggerId = `accordion-trigger-${reactId}`
  const contentId = `accordion-content-${reactId}`

  const ctx = React.useMemo<AccordionItemContextValue>(
    () => ({ value, open, disabled, triggerId, contentId }),
    [value, open, disabled, triggerId, contentId]
  )

  return (
    <AccordionItemContext.Provider value={ctx}>
      <div data-state={open ? "open" : "closed"} data-disabled={disabled ? "" : undefined} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export const AccordionTrigger = ({ onClick, children, ...props }: any) => {
  const { type, value: rootValue, setValue, collapsible } = useAccordionContext()
  const { value, open, disabled, triggerId, contentId } = useAccordionItemContext()

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (disabled) return

    if (type === "multiple") {
      const values = new Set(rootValue as string[])
      if (open) values.delete(value)
      else values.add(value)
      setValue(Array.from(values))
      return
    }

    if (open) {
      if (collapsible) setValue(null)
      return
    }

    setValue(value)
  }

  return (
    <button
      type="button"
      id={triggerId}
      aria-expanded={open}
      aria-controls={contentId}
      data-state={open ? "open" : "closed"}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}

export const AccordionContent = ({ children, ...props }: any) => {
  const { open, triggerId, contentId, disabled } = useAccordionItemContext()

  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      data-state={open ? "open" : "closed"}
      data-disabled={disabled ? "" : undefined}
      hidden={!open}
      {...props}
    >
      {children}
    </div>
  )
}

export default Accordion
