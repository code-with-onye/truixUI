import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import "./index.css"
import styled from 'styled-components'
export interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  /**  Provide  a text*/
  children: ReactNode;

  /**  Which variant look do you like to use*/

  variant: 'text' | 'contained' | "outlined";
}

/**  Button  a text*/

const styleButton ={
  text: ` text-gray-600 text-blue-500 font-semi-bold`,
  contained: ` bg-blue-500  `,
  outlined: `ring  text-gray-400 ring-offset-2 text-blue-500 bg-gray-100`,
}

export const Button = ({ children, variant = 'contained', ...props }: Props) => {
  return (
    <button
      {...props}
      className={`${variant === 'text' ? styleButton.text : variant=== "contained" ? styleButton.contained : styleButton.outlined} text-gray-200 px-6 py-3 rounded-md text-sm  shadow-lg focus:shadow font-semi-bold`}
    >
      {children}
    </button>
  );
};

