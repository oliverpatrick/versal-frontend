import React from 'react';
import { ReactComponent as ConstellationSvg } from '../../assets/constellation.svg';

function Logo() {
  return (
    <div className='flex flex-row justify-center items-center pr-2'>
      <ConstellationSvg className='w-5 h-5' />
      <span className='lg:flex hidden ml-2 font-semibold'>VERSAL</span>
    </div>
  );
}

export default Logo;
