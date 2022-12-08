import React, { ReactNode } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import Avatar from '../Avatar';
import DropdownMenu from './DropdownMenu';

interface DropdownButtonProps {
  iconLeft?: ReactNode;
  text?: string;
  iconRight?: ReactNode;
  dropdownStyle: 'filter-menu' | 'generic-menu';
  children: ReactNode;
  type: 'filter-dropdown' | 'user-dropdown' | 'generic-dropdown';
}

function DropdownButton({
  iconLeft,
  text,
  iconRight,
  dropdownStyle,
  children,
  type,
}: DropdownButtonProps) {
  const { ref, isOpen, setIsOpen } = useClickOutside(false);

  const navFilterDropdown = (
    <div
      className={`max-w-[250px] relative px-2 flex-grow flex box-border justify-center items-center border hover:border-[#424242] ${
        isOpen ? 'border-[#424242]' : 'border-transparent'
      } rounded-md h-9`}
    >
      <button
        className='flex flex-row flex-grow justify-between items-center w-full max-w-[16.875rem]'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex flex-row justify-center items-center'>
          {iconLeft}
          <span className='text-sm hidden md:flex font-semibold text-[#b8b8b8]'>
            {text ? text : null}
          </span>
        </div>
        {iconRight}
      </button>

      {isOpen && (
        <DropdownMenu dropdownStyle={dropdownStyle} reference={ref}>
          {children}
        </DropdownMenu>
      )}
    </div>
  );

  const userDropdown = (
    <div
      className={`max-w-[200px] relative px-2 flex-grow flex box-border justify-center items-center border hover:border-[#424242] ${
        isOpen ? 'border-[#424242]' : 'border-transparent'
      } rounded-md h-11`}
    >
      <button
        className='flex flex-row flex-grow justify-between items-center w-full max-w-[16.875rem]'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex flex-row justify-center items-center'>
          <Avatar width={6} height={6} />
          <div className='md:flex hidden h-full flex-col leading-none text-[10px] items-center'>
            <span>Test</span>
            <span>18000 points</span>
          </div>
        </div>

        {iconRight}
      </button>

      {isOpen && (
        <DropdownMenu dropdownStyle={dropdownStyle} reference={ref}>
          {children}
        </DropdownMenu>
      )}
    </div>
  );

  const genericDropdown = (
    <div className='rounded-3xl hover:bg-[] '>
      <button
        className='hover:rounded-3xl text-[#818181] hover:bg-[#424242] px-2 py-1.5 flex flex-row justify-center items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        {iconLeft ? iconLeft : null}
        {text ? (
          <span className='text-sm font-semibold text-[#b8b8b8]'>{text}</span>
        ) : null}
        {iconRight ? iconRight : null}
      </button>
    </div>
  );

  switch (type) {
    case 'filter-dropdown':
      return navFilterDropdown;
    case 'user-dropdown':
      return userDropdown;
    case 'generic-dropdown':
      return genericDropdown;
  }
}

export default DropdownButton;
