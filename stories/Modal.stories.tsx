import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../src/Modal';
import { Typography } from '../src/Typography';
import { Button } from '../src/Button';
import { Input } from '../src/Input';

// Mock function for onClick handlers
const fn = () => { };

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired modal component with backdrop, animations, and focus management. Perfect for dialogs, forms, and overlays.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Is the modal open?',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'fullscreen'],
      description: 'Modal size',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Close on backdrop click',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close on escape key',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    children: {
      control: 'text',
      description: 'Modal content',
    },
  },
  args: {
    onClose: fn,
    open: true,
    children: 'Modal content goes here',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Default: Story = {
  args: {
    title: 'Default Modal',
  },
};

export const WithoutTitle: Story = {
  args: {
    children: (
      <div>
        <Typography variant="headline">Custom Header</Typography>
        <Typography variant="body" color="secondary">
          This modal doesn't use the built-in title prop.
        </Typography>
      </div>
    ),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    title: 'No Close Button',
    showCloseButton: false,
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    title: 'Small Modal',
    children: 'This is a small modal with limited content.',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    title: 'Medium Modal',
    children: 'This is a medium-sized modal with moderate content.',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    title: 'Large Modal',
    children: (
      <div className="space-y-4">
        <Typography variant="body">
          This is a large modal that can contain more extensive content.
        </Typography>
        <Typography variant="body">
          It's perfect for forms, detailed information, or complex interactions.
        </Typography>
      </div>
    ),
  },
};

export const Fullscreen: Story = {
  args: {
    size: 'fullscreen',
    title: 'Fullscreen Modal',
    children: (
      <div className="space-y-6">
        <Typography variant="body">
          This fullscreen modal takes up the entire viewport.
        </Typography>
        <Typography variant="body">
          It's ideal for mobile experiences or when you need maximum space.
        </Typography>
      </div>
    ),
  },
};

// Behavior variants
export const NoBackdropClose: Story = {
  args: {
    title: 'No Backdrop Close',
    closeOnBackdrop: false,
    children: 'This modal won\'t close when clicking the backdrop.',
  },
};

export const NoEscapeClose: Story = {
  args: {
    title: 'No Escape Close',
    closeOnEscape: false,
    children: 'This modal won\'t close when pressing the Escape key.',
  },
};

// Content examples
export const ConfirmationDialog: Story = {
  args: {
    size: 'small',
    title: 'Delete Item',
    children: (
      <div className="space-y-6">
        <Typography variant="body" color="secondary">
          Are you sure you want to delete this item? This action cannot be undone.
        </Typography>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost" size="small">Cancel</Button>
          <Button variant="destructive" size="small">Delete</Button>
        </div>
      </div>
    ),
  },
};

export const FormModal: Story = {
  args: {
    title: 'Add New Contact',
    children: (
      <div className="space-y-6">
        <div className="space-y-4">
          <Input label="First Name" placeholder="Enter first name" />
          <Input label="Last Name" placeholder="Enter last name" />
          <Input label="Email" type="email" placeholder="Enter email" />
          <Input label="Phone" type="tel" placeholder="Enter phone number" />
        </div>
        <div className="flex gap-3 justify-end">
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Save Contact</Button>
        </div>
      </div>
    ),
  },
};

export const InfoModal: Story = {
  args: {
    title: 'About This App',
    children: (
      <div className="space-y-4">
        <Typography variant="body">
          This is a sample application built with our iOS-inspired component library.
        </Typography>
        <Typography variant="body">
          The library includes buttons, inputs, modals, and many other components
          that follow Apple's Human Interface Guidelines.
        </Typography>
        <div className="pt-4 border-t border-separator-nonOpaque dark:border-separator-nonOpaque-dark">
          <Typography variant="footnote" color="tertiary">
            Version 1.0.0 • Built with React and TypeScript
          </Typography>
        </div>
      </div>
    ),
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [modalType, setModalType] = React.useState<'info' | 'form' | 'confirm'>('info');

    const modalContent = {
      info: {
        title: 'Information',
        content: (
          <Typography variant="body">
            This is an informational modal with some details.
          </Typography>
        ),
      },
      form: {
        title: 'Quick Form',
        content: (
          <div className="space-y-4">
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Message" placeholder="Enter a message" />
          </div>
        ),
      },
      confirm: {
        title: 'Confirm Action',
        content: (
          <div className="space-y-4">
            <Typography variant="body" color="secondary">
              Are you sure you want to proceed with this action?
            </Typography>
            <div className="flex gap-2 justify-end">
              <Button variant="ghost" size="small" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="small" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </div>
          </div>
        ),
      },
    };

    return (
      <div className="space-y-4">
        <Typography variant="headline">Modal Examples</Typography>

        <div className="flex gap-2">
          <Button
            size="small"
            onClick={() => { setModalType('info'); setIsOpen(true); }}
          >
            Info Modal
          </Button>
          <Button
            size="small"
            variant="secondary"
            onClick={() => { setModalType('form'); setIsOpen(true); }}
          >
            Form Modal
          </Button>
          <Button
            size="small"
            variant="destructive"
            onClick={() => { setModalType('confirm'); setIsOpen(true); }}
          >
            Confirm Modal
          </Button>
        </div>

        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title={modalContent[modalType].title}
        >
          {modalContent[modalType].content}
        </Modal>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing different modal types and behaviors.',
      },
    },
  },
};