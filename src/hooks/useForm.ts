import { useState } from 'react';

type ValidationRule = 'required' | 'min' | 'max' | 'email';

type ValidationRules = {
  [key: string]: `${ValidationRule}${string}` | `${ValidationRule}:${string}`;
};

type FormErrors<T> = {
  [K in keyof T]?: string;
};

type ReturnTypes<T> = {
  values: T;
  errors: FormErrors<T>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const useForm = <T extends { [key: string]: any }>(
  initialValues: T,
  validationRules: ValidationRules
): ReturnTypes<T> => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', values);
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const validationErrors: FormErrors<T> = {};
    for (const key in validationRules) {
      if (Object.prototype.hasOwnProperty.call(validationRules, key)) {
        const rules = validationRules[key].split('|');
        for (const rule of rules) {
          const [ruleName, ruleParam] = rule.split(':');
          switch (ruleName) {
            case 'required':
              if (!values[key]) {
                validationErrors[key] = 'This field is required';
              }
              break;
            case 'min':
              if (values[key].length < parseInt(ruleParam)) {
                validationErrors[
                  key
                ] = `This field must be at least ${ruleParam} characters long`;
              }
              break;
            case 'max':
              if (values[key].length > parseInt(ruleParam)) {
                validationErrors[
                  key
                ] = `This field must be no more than ${ruleParam} characters long`;
              }
              break;
            case 'email':
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(values[key])) {
                validationErrors[key] = 'Invalid email address';
              }
              break;
            default:
              break;
          }
        }
      }
    }
    return validationErrors;
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
