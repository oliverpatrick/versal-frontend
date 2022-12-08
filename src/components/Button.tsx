import React, { ReactNode } from 'react';

interface ButtonProps {
  leftIcon?: ReactNode;
  text?: string;
  RightIcon?: ReactNode;
  children?: ReactNode;
  iconButton?: boolean;
}

function Button({
  leftIcon,
  text,
  RightIcon,
  children,
  iconButton,
}: ButtonProps) {
  if (iconButton) {
    return (
      <button className='hover:rounded-sm text-[#818181] hover:bg-[#353535] p-1 m-1 flex flex-row justify-center items-center'>
        {children}
      </button>
    );
  }

  return (
    <button className='hover:rounded-3xl text-[#818181] hover:bg-[#424242] px-2 py-1.5 flex flex-row justify-center items-center'>
      {leftIcon}
      <span className='mx-1 text-sm font-semibold'>{text}</span>
      {RightIcon}
    </button>
  );
}

export default Button;
