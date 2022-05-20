import React, { HtmlHTMLAttributes, ReactNode } from 'react';

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
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
