import type { Preview } from "@storybook/react-vite"
import "../src/styles/global.css"

import React from 'react';
import { CoreProvider } from "../src/core";

const preview: Preview = {
  decorators: [
    (Story) => (
      <CoreProvider>
      <Story />
      </CoreProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
