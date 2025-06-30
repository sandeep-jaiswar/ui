import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { SearchField } from "../src/SearchField"

const meta = {
  title: "Form Controls/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "iOS-inspired search field component with search icon and cancel functionality.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCancel: Story = {
  args: {
    showCancel: true,
  },
}

export const WithValue: Story = {
  args: {
    value: "Search query",
    showCancel: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <SearchField size="small" placeholder="Small search" />
      <SearchField size="medium" placeholder="Medium search" />
      <SearchField size="large" placeholder="Large search" />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState<string[]>([])

    const handleSearch = (value: string) => {
      // Simulate search results
      const mockResults = ["Apple", "Banana", "Orange", "Grape"].filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      )
      setResults(mockResults)
    }

    return (
      <div className="w-80 space-y-4">
        <SearchField
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
          showCancel
          placeholder="Search fruits..."
        />
        {results.length > 0 && (
          <div className="rounded-ios bg-background-secondary p-4 dark:bg-background-secondary-dark">
            <h3 className="mb-2 font-semibold">Results:</h3>
            <ul className="space-y-1">
              {results.map((result, index) => (
                <li key={index} className="text-sm">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  },
}
