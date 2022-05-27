import React, { HtmlHTMLAttributes, ReactNode } from 'react';
export interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  /**  Provide  a text*/
  children: ReactNode;

  /**  Which variant look do you like to use*/
  variant: 'dark' | 'default' | "light";
  size: 'small'| "medium" | "large" | "x-large";
}

/**  Button  a text*/

const styleButton ={
  dark: ` text-white bg-gray-800 hover:bg-gray-900   focus:ring-gray-300    dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`,
  default: `text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300     dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800`,
  light: `   text-gray-900 bg-white  border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`,
}


export const Button = ({ children, variant = 'default', size, ...props }: Props) => {
const buttonSize = `${size === "small" ? "px-4 py-2": "px-6 py-3"}`
const buttonColor = `${variant === 'dark' ? styleButton.dark : variant=== "default" ? styleButton.default : styleButton.light}`
  
  return (
    <button
      {...props}
      className={`${buttonColor} ${buttonSize} focus:outline-none focus:ring-4 font-medium rounded-lg text-sm`}
    >
      {children}
    </button>
  );
};
