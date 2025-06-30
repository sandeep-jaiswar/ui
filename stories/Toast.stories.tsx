import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../src/Toast';
import { Button } from '../src/Button';

const meta = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired toast notification component.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    visible: true,
    message: 'This is a toast notification',
    onClose: () => { },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Information',
    message: 'This is an informational message',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    message: 'Please check your input',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    message: 'Something went wrong',
  },
};

export const Interactive: Story = {
  render: () => {
    const [toasts, setToasts] = React.useState<Array<{ id: number, type: 'info' | 'success' | 'warning' | 'error', message: string }>>([]);

    const showToast = (type: 'info' | 'success' | 'warning' | 'error') => {
      const id = Date.now();
      const messages = {
        info: 'Information message',
        success: 'Success message',
        warning: 'Warning message',
        error: 'Error message',
      };

      setToasts(prev => [...prev, { id, type, message: messages[type] }]);

      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 4000);
    };

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button size="small" onClick={() => showToast('info')}>Info</Button>
          <Button size="small" onClick={() => showToast('success')}>Success</Button>
          <Button size="small" onClick={() => showToast('warning')}>Warning</Button>
          <Button size="small" onClick={() => showToast('error')}>Error</Button>
        </div>

        {toasts.map(toast => (
          <Toast
            key={toast.id}
            visible={true}
            type={toast.type}
            message={toast.message}
            onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
          />
        ))}
      </div>
    );
  },
};