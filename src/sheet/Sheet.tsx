import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  leftTitle?: string;
  onBack?: () => void;
  children?: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  title,
  leftTitle,
  onBack,
  children,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-t-2xl bg-gray-800 text-white text-left align-middle shadow-xl transition-all flex flex-col h-[80vh]"> {/* Added dark background and flex for layout */}

                {/* Header */}
                <div className="relative flex items-center justify-between px-4 py-3 border-b border-gray-700">
                   {/* Left Section (Back Button/Title) */}
                   <div className="flex-1 flex items-center">
                      {onBack && (
                        <button
                           type="button"
                           className="flex items-center text-blue-400 hover:text-blue-300 focus:outline-none"
                           onClick={onBack}
                         >
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                           </svg>
                           {leftTitle && <span>{leftTitle}</span>}
                         </button>
                      )}
                       {!onBack && leftTitle && (
                           <span className="text-blue-400">{leftTitle}</span>
                       )}
                   </div>

                  {/* Center Section (Title) */}
                  <div className="flex-1 text-center">
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-white"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                  </div>

                  {/* Right Section (Close Button) */}
                  <div className="flex-1 flex justify-end items-center">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-300 focus:outline-none"
                      onClick={onClose}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow px-4 py-3 overflow-y-auto">
                  {children}
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
