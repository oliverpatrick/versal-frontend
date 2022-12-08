import React from 'react';
import Avatar from '../Avatar';

function CreatePostSection() {
  return (
    <div className='w-full flex justify-between items-center border border-[#424242] rounded-md bg-[#242424] px-2 py-1 mb-4'>
      <Avatar width={8} height={8} />
      <input
        className='bg-[#313131] placeholder:text-[#7a7a7a] flex-grow box-border border border-solid border-[#5f5f5f] hover:border-[#929292] h-9 rounded-md w-full mr-2 text-sm outline-none text-[#7a7a7a] px-4'
        placeholder='Create Post'
      />
      <div className='flex flex-row'>
        <button className='hover:rounded-md hover:bg-[#424242] p-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-[#616161]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
        </button>
        <button className='hover:rounded-md hover:bg-[#424242] p-1.5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 text-[#616161]'
          >
            <path
              fillRule='evenodd'
              d='M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CreatePostSection;
