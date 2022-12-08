import React, { MutableRefObject, ReactNode } from 'react';

interface DropdownMenuProps {
  dropdownStyle: 'filter-menu' | 'generic-menu';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: MutableRefObject<any>;
  children: ReactNode;
}

function DropdownMenu({
  dropdownStyle,
  reference,
  children,
}: DropdownMenuProps) {
  let className = '';

  switch (dropdownStyle) {
    case 'filter-menu':
      className = 'w-[250px] -left-[1px] top-[30px] border-r border-l border-b';
      break;
    case 'generic-menu':
      className = 'w-auto top-10 border';
      break;
    default:
      break;
  }

  return (
    <div
      className={`${className} rounded-b-md z-[100] absolute border-[#424242] bg-[#242424]`}
      ref={reference}
    >
      <div className='w-full flex flex-col'>{children}</div>
    </div>
  );
}

export default DropdownMenu;
