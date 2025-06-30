import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/components/Alert';
import { Typography } from '../src/components/Typography';
import { Button } from '../src/components/Button';

// Mock function for action handlers
const fn = () => {};

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'iOS-inspired alert component following Apple\'s alert design patterns. Supports both alert dialogs and action sheets.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Is the alert visible?',
    },
    type: {
      control: 'select',
      options: ['alert', 'actionSheet'],
      description: 'Alert type',
    },
    title: {
      control: 'text',
      description: 'Alert title',
    },
    message: {
      control: 'text',
      description: 'Alert message',
    },
  },
  args: {
    visible: true,
    onClose: fn,
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const SimpleAlert: Story = {
  args: {
    title: 'Alert Title',
    message: 'This is a simple alert message.',
    actions: [
      { label: 'OK', onPress: fn },
    ],
  },
};

export const ConfirmationAlert: Story = {
  args: {
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    actions: [
      { label: 'Cancel', style: 'cancel', onPress: fn },
      { label: 'Delete', style: 'destructive', onPress: fn },
    ],
  },
};

export const MultipleActions: Story = {
  args: {
    title: 'Choose Action',
    message: 'What would you like to do with this file?',
    actions: [
      { label: 'View', onPress: fn },
      { label: 'Edit', onPress: fn },
      { label: 'Share', onPress: fn },
      { label: 'Delete', style: 'destructive', onPress: fn },
      { label: 'Cancel', style: 'cancel', onPress: fn },
    ],
  },
};

export const ActionSheet: Story = {
  args: {
    type: 'actionSheet',
    title: 'Photo Options',
    message: 'Choose how you want to add a photo.',
    actions: [
      { label: 'Take Photo', onPress: fn },
      { label: 'Choose from Library', onPress: fn },
      { label: 'Browse Files', onPress: fn },
      { label: 'Cancel', style: 'cancel', onPress: fn },
    ],
  },
};

export const DestructiveActionSheet: Story = {
  args: {
    type: 'actionSheet',
    title: 'Account Actions',
    actions: [
      { label: 'Edit Profile', onPress: fn },
      { label: 'Change Password', onPress: fn },
      { label: 'Privacy Settings', onPress: fn },
      { label: 'Delete Account', style: 'destructive', onPress: fn },
      { label: 'Cancel', style: 'cancel', onPress: fn },
    ],
  },
};

// Without title or message
export const ActionsOnly: Story = {
  args: {
    type: 'actionSheet',
    actions: [
      { label: 'Option 1', onPress: fn },
      { label: 'Option 2', onPress: fn },
      { label: 'Option 3', onPress: fn },
      { label: 'Cancel', style: 'cancel', onPress: fn },
    ],
  },
};

export const MessageOnly: Story = {
  args: {
    message: 'Your changes have been saved successfully.',
    actions: [
      { label: 'OK', onPress: fn },
    ],
  },
};

// Interactive examples
export const InteractiveAlert: Story = {
  render: () => {
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertType, setAlertType] = React.useState<'simple' | 'confirm' | 'actionSheet'>('simple');

    const showAlert = (type: 'simple' | 'confirm' | 'actionSheet') => {
      setAlertType(type);
      setAlertVisible(true);
    };

    const getAlertProps = () => {
      switch (alertType) {
        case 'simple':
          return {
            title: 'Success',
            message: 'Your action was completed successfully.',
            actions: [
              { label: 'OK', onPress: () => setAlertVisible(false) },
            ],
          };
        case 'confirm':
          return {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this item? This action cannot be undone.',
            actions: [
              { label: 'Cancel', style: 'cancel' as const, onPress: () => setAlertVisible(false) },
              { label: 'Delete', style: 'destructive' as const, onPress: () => setAlertVisible(false) },
            ],
          };
        case 'actionSheet':
          return {
            type: 'actionSheet' as const,
            title: 'Share Options',
            message: 'Choose how you want to share this content.',
            actions: [
              { label: 'Copy Link', onPress: () => setAlertVisible(false) },
              { label: 'Share via Email', onPress: () => setAlertVisible(false) },
              { label: 'Share on Social Media', onPress: () => setAlertVisible(false) },
              { label: 'Cancel', style: 'cancel' as const, onPress: () => setAlertVisible(false) },
            ],
          };
      }
    };

    return (
      <div className="space-y-4">
        <Typography variant="headline">Alert Examples</Typography>
        
        <div className="flex gap-3">
          <Button size="small" onClick={() => showAlert('simple')}>
            Simple Alert
          </Button>
          <Button size="small" variant="destructive" onClick={() => showAlert('confirm')}>
            Confirm Alert
          </Button>
          <Button size="small" variant="secondary" onClick={() => showAlert('actionSheet')}>
            Action Sheet
          </Button>
        </div>

        <Alert
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
          {...getAlertProps()}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing different alert types.',
      },
    },
  },
};

export const FormValidationAlert: Story = {
  render: () => {
    const [showAlert, setShowAlert] = React.useState(false);
    const [formData, setFormData] = React.useState({ email: '', password: '' });

    const handleSubmit = () => {
      if (!formData.email || !formData.password) {
        setShowAlert(true);
        return;
      }
      // Handle successful submission
    };

    return (
      <div className="space-y-6 max-w-sm">
        <Typography variant="headline">Login Form</Typography>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full p-3 border rounded-ios"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            className="w-full p-3 border rounded-ios"
          />
          <Button fullWidth onClick={handleSubmit}>
            Sign In
          </Button>
        </div>

        <Alert
          visible={showAlert}
          title="Missing Information"
          message="Please fill in all required fields before continuing."
          actions={[
            { label: 'OK', onPress: () => setShowAlert(false) },
          ]}
          onClose={() => setShowAlert(false)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example form validation with alert feedback.',
      },
    },
  },
};