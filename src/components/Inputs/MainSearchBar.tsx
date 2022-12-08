import React, { useState } from 'react';
import { useDebouncedValue } from '../../hooks/useDebounced';

function MainSearchBar() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(debounced);
  };

  return (
    <form
      className='flex items-center h-auto mx-4 flex-grow min-w-0'
      onSubmit={handleSubmit}
    >
      <label htmlFor='nav-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-[#616161]'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <input
          type='text'
          id='nav-search'
          className='flex flex-grow outline-none border border-transparent hover:border-[#7e7e7e] bg-[#313131] placeholder:text-[#7a7a7a] text-sm rounded-3xl w-full pl-10 p-2 focus:rounded-b-none'
          placeholder='Search Versal'
          required
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </div>
    </form>
  );
}

export default MainSearchBar;
