import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  theme: 'light' | 'dark';
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  isPrimary = false,
  theme,
}) => {
  const baseStyles = 'px-4 py-2 text-sm font-medium focus:outline-none';
  const themeStyles = theme === 'dark'
    ? 'text-blue-300 hover:bg-gray-700 hover:text-blue-200'
    : 'text-blue-600 hover:bg-gray-100 hover:text-blue-800';
  const primaryStyles = isPrimary
    ? (theme === 'dark' ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-white bg-blue-600 hover:bg-blue-700') // Example primary style, adjust as needed
    : '';

  return (
    <button
      type="button"
      className={`${baseStyles} ${themeStyles} ${primaryStyles} rounded-md`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
  actions?: { label: string; onClick: () => void; isPrimary?: boolean }[];
  actionLayout?: 'horizontal' | 'vertical';
  theme?: 'light' | 'dark';
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  actions,
  actionLayout = 'horizontal',
  theme = 'light',
}) => {
  const modalStyles = theme === 'dark'
    ? 'bg-gray-700 text-white'
    : 'bg-white text-gray-900';

  const titleStyles = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const messageStyles = theme === 'dark' ? 'text-gray-300' : 'text-gray-500';

  const actionContainerStyles = actionLayout === 'vertical'
    ? 'flex-col space-y-2'
    : 'flex-row space-x-2 justify-end';

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-sm transform overflow-hidden rounded-lg ${modalStyles} p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className={`text-lg font-medium leading-6 ${titleStyles}`}
                >
                  {title}
                </Dialog.Title>
                {message && (
                  <div className="mt-2">
                    <p className={`text-sm ${messageStyles}`}>{message}</p>
                  </div>
                )}

                {actions && actions.length > 0 && (
                  <div className={`mt-4 flex ${actionContainerStyles}`}>
                    {actions.map((action, index) => (
                      <ActionButton
                        key={index}
                        label={action.label}
                        onClick={action.onClick}
                        isPrimary={action.isPrimary}
                        theme={theme}
                      />
                    ))}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
