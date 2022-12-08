import React, { useState } from 'react';

// type Props = {}

function Post() {
  const [count, setCount] = useState(0);

  return (
    <div className='mb-4 w-full h-auto flex flex-row border border-[#424242] rounded-md bg-[#242424]'>
      <div className='flex flex-col bg-[#1c1c1c] p-2 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-[#616161] hover:text-[#15ff00]'
          onClick={() => setCount(count + 1)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
          />
        </svg>
        <span className='text-[#b8b8b8] font-semibold'>{count}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-[#616161] hover:text-[#ff0800]'
          onClick={() => setCount(count - 1)}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384'
          />
        </svg>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row items-center p-1 pl-2'>
          <span className='text-sm font-semibold pr-1 text-[#b6b6b6]'>
            MONSTER
          </span>
          <span className='text-[12px] pr-1 text-[#616161]'>
            Posted by u/TestUser
          </span>
          <span className='text-[12px] text-[#7d7d7d]'>5 minutes ago</span>
        </div>
        <div className='flex flex-row'>
          <h4 className='text-[#b6b6b6] font-semibold pl-2 pb-2'>
            Look at this randomised image!
          </h4>
        </div>
        <div className='w-full flex justify-center items-center'>
          <img src='https://picsum.photos/400/500'></img>
        </div>
        <div className='flex flex-row w-full p-1 '>
          <button className='flex flow-row justify-center items-center w-fit p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7 text-[#616161] pr-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
              />
            </svg>
            <span className='text-sm font-bold text-[#616161]'>
              200 Comments
            </span>
          </button>

          <button className='flex flow-row justify-center items-center w-fit p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7 text-[#616161] pr-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
              />
            </svg>
            <span className='text-sm font-bold text-[#616161]'>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
