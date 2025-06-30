import React from 'react';
import { Icon } from './Icon';

export interface FileUploadProps {
  /** Accepted file types */
  accept?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Is the file upload disabled? */
  disabled?: boolean;
  /** Upload variant */
  variant?: 'dropzone' | 'button';
  /** Label text */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error text */
  errorText?: string;
  /** File upload state */
  state?: 'default' | 'error' | 'success';
  /** Upload progress (0-100) */
  progress?: number;
  /** File change handler */
  onChange?: (files: FileList | null) => void;
  /** Additional CSS classes */
  className?: string;
  /** Test ID for testing */
  testId?: string;
}

/** iOS-inspired file upload component with drag & drop */
export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  ({
    accept,
    multiple = false,
    maxSize,
    disabled = false,
    variant = 'dropzone',
    label,
    helperText,
    errorText,
    state = 'default',
    progress,
    onChange,
    className = '',
    testId,
    ...props
  }, ref) => {
    const [isDragOver, setIsDragOver] = React.useState(false);
    const [uploadedFiles, setUploadedFiles] = React.useState<File[]>([]);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileChange = (files: FileList | null) => {
      if (!files) return;
      
      const fileArray = Array.from(files);
      
      // Validate file size
      if (maxSize) {
        const validFiles = fileArray.filter(file => file.size <= maxSize);
        if (validFiles.length !== fileArray.length) {
          // Handle size error
          return;
        }
      }
      
      setUploadedFiles(multiple ? [...uploadedFiles, ...fileArray] : fileArray);
      onChange?.(files);
    };

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    };

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      
      if (disabled) return;
      
      const files = e.dataTransfer.files;
      handleFileChange(files);
    };

    const handleClick = () => {
      if (!disabled && fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const removeFile = (index: number) => {
      const newFiles = uploadedFiles.filter((_, i) => i !== index);
      setUploadedFiles(newFiles);
    };

    const formatFileSize = (bytes: number) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const displayText = state === 'error' && errorText ? errorText : helperText;

    const stateStyles = {
      default: 'border-separator-opaque dark:border-separator-opaque-dark',
      error: 'border-systemRed-500',
      success: 'border-systemGreen-500'
    };

    if (variant === 'button') {
      return (
        <div className={`space-y-2 ${className}`} data-testid={testId}>
          {label && (
            <label className="block text-ios-subhead font-medium text-label-primary dark:text-label-primary-dark">
              {label}
            </label>
          )}
          
          <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={`
              inline-flex items-center gap-2 px-4 py-2 text-ios-body font-medium
              bg-systemBlue-500 text-white rounded-ios transition-all duration-200 ease-ios
              ${disabled 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-systemBlue-600 active:bg-systemBlue-700'
              }
            `}
          >
            <Icon name="plus" size="medium" />
            Choose {multiple ? 'Files' : 'File'}
          </button>
          
          <input
            ref={(node) => {
              fileInputRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={(e) => handleFileChange(e.target.files)}
            className="hidden"
            {...props}
          />
          
          {displayText && (
            <p className={`text-ios-footnote ${
              state === 'error' 
                ? 'text-systemRed-500 dark:text-systemRed-400' 
                : 'text-label-tertiary dark:text-label-tertiary-dark'
            }`}>
              {displayText}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className={`space-y-3 ${className}`} data-testid={testId}>
        {label && (
          <label className="block text-ios-subhead font-medium text-label-primary dark:text-label-primary-dark">
            {label}
          </label>
        )}
        
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
          className={`
            relative border-2 border-dashed rounded-ios-lg p-8 text-center cursor-pointer
            transition-all duration-200 ease-ios
            ${stateStyles[state]}
            ${isDragOver 
              ? 'border-systemBlue-500 bg-systemBlue-50 dark:bg-systemBlue-900/20' 
              : 'hover:border-systemBlue-500 hover:bg-fill-quaternary dark:hover:bg-fill-quaternary-dark'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <input
            ref={(node) => {
              fileInputRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            type="file"
            accept={accept}
            multiple={multiple}
            disabled={disabled}
            onChange={(e) => handleFileChange(e.target.files)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            {...props}
          />
          
          <div className="space-y-3">
            <Icon name="plus" size="xlarge" color="system" />
            
            <div>
              <p className="text-ios-body font-medium text-label-primary dark:text-label-primary-dark">
                {isDragOver ? 'Drop files here' : 'Choose files or drag & drop'}
              </p>
              <p className="text-ios-footnote text-label-tertiary dark:text-label-tertiary-dark mt-1">
                {accept && `Accepted formats: ${accept}`}
                {maxSize && ` • Max size: ${formatFileSize(maxSize)}`}
              </p>
            </div>
          </div>
          
          {progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-fill-tertiary dark:bg-fill-tertiary-dark">
              <div 
                className="h-full bg-systemBlue-500 transition-all duration-300 ease-ios"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
        
        {/* File List */}
        {uploadedFiles.length > 0 && (
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-fill-quaternary dark:bg-fill-quaternary-dark rounded-ios">
                <div className="flex items-center gap-3 min-w-0">
                  <Icon name="settings" size="medium" color="system" />
                  <div className="min-w-0">
                    <p className="text-ios-footnote font-medium text-label-primary dark:text-label-primary-dark truncate">
                      {file.name}
                    </p>
                    <p className="text-ios-caption-1 text-label-tertiary dark:text-label-tertiary-dark">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="p-1 text-label-tertiary dark:text-label-tertiary-dark hover:text-systemRed-500 dark:hover:text-systemRed-400 transition-colors"
                  aria-label="Remove file"
                >
                  <Icon name="close" size="small" />
                </button>
              </div>
            ))}
          </div>
        )}
        
        {displayText && (
          <p className={`text-ios-footnote ${
            state === 'error' 
              ? 'text-systemRed-500 dark:text-systemRed-400' 
              : 'text-label-tertiary dark:text-label-tertiary-dark'
          }`}>
            {displayText}
          </p>
        )}
      </div>
    );
  }
);

FileUpload.displayName = 'FileUpload';