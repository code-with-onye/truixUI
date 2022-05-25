import React, { HtmlHTMLAttributes, ReactNode } from 'react';
export interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  /**  Provide  a text*/
  children: ReactNode;

  /**  Which variant look do you like to use*/

  variant: 'dark' | 'default' | "light";
}

/**  Button  a text*/

const styleButton ={
  dark: ` text-white bg-gray-800 hover:bg-gray-900  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`,
  default: `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800`,
  light: ` text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`,
}

export const Button = ({ children, variant = 'default', ...props }: Props) => {
  
  return (
    <button
      {...props}
      className={`${variant === 'dark' ? styleButton.dark : variant=== "default" ? styleButton.default : styleButton.light} py-2.5 px-5 focus:outline-none`}
    >
      {children}
    </button>
  );
};

