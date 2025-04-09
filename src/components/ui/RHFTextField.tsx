import { InputHTMLAttributes, ReactNode } from "react";
import {
  UseFormRegister,
  FieldErrors,
  RegisterOptions,
  FieldPath,
} from "react-hook-form";

// More generic form values type
export type FormValues = {
  [key: string]: unknown;
};

// Make the component generic with type parameter T
type RHFTextFieldProps<T extends FormValues = FormValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: FieldPath<T>;
    dir?: "rtl" | "ltr";
    register: UseFormRegister<T>;
    errors?: FieldErrors<T>;
    validationSchema?: RegisterOptions<T, FieldPath<T>>;
  };

// Make the component function generic as well
export default function RHFTextField<T extends FormValues = FormValues>({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  validationSchema = {},
  className = "",
  ...rest
}: RHFTextFieldProps<T>) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-gray-700 font-medium">
        {label}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`w-full p-3 border ${
          hasError ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span className="text-red-600 text-xs mt-1 block">
          {errorMessages?.message as ReactNode}
        </span>
      )}
    </div>
  );
}
