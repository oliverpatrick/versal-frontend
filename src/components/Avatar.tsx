import React from 'react';

function Avatar({ width, height }: any) {
  return (
    <div
      className={`flex-shrink-0 overflow-hidden relative w-${width} h-${height} bg-gray-100 rounded-full dark:bg-gray-600 m-2`}
    >
      <svg
        className={`absolute -left-1 w-${width + 2} h-${
          width + 2
        } text-gray-400`}
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
          clipRule='evenodd'
        ></path>
      </svg>
    </div>
  );
}

export default Avatar;
