import React, { ReactNode } from 'react';

function DropdownItem({ children }: { children: ReactNode }) {
  return (
    <a href='#' className='hover:bg-[#424242] p-4'>
      {children}
    </a>
  );
}

export default DropdownItem;
