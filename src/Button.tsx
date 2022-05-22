import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import "./index.css"
export interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  /**  Provide  a text*/
  children: ReactNode;

  /**  Which variant look do you like to use*/

  variant: 'primary' | 'secondary';
}

/**  Button  a text*/

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      
      className={`${variant === 'primary' ? 'bg-blue-500': 'bg-gray-800'} text-gray-200 px-4 py-2 rounded-lg`}
    >
      {children}
    </button>
  );
};
