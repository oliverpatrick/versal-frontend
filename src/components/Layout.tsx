import React, { ReactNode } from 'react';
import Navbar from './Navbar/Navbar';

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar user='Test' />
      <main className='pt-12 '>
        <div className='w-full p-5 flex flex-row justify-center'>
          <div className='w-full md:w-[800px]'>{children}</div>
          <aside className='lg:flex hidden ml-6'>
            <footer className='mt-4 flex h-fit flex-col w-80 border border-[#424242] bg-[#242424] rounded-md'>
              <div className='border-b b-[#f4f4f4] flex py-2 mx-3'>
                <div className='text-sm flex flex-col w-1/2 px-1'>
                  <a>User Agreement</a>
                  <a>Privacy Policy</a>
                </div>
                <div className='text-sm flex flex-col w-1/2 px-1'>
                  <a>Content Policy</a>
                  <a>Modern Code Of Conduct</a>
                </div>
              </div>
              <div className='border-b b-[#f4f4f4] flex py-2 mx-3'>
                <div className='text-sm flex flex-col w-1/2 px-1'>
                  <a>English</a>
                  <a>Francais</a>
                  <a>Italiano</a>
                </div>
                <div className='text-sm flex flex-col w-1/2 px-1'>
                  <a>Deutsch</a>
                  <a>Espanol</a>
                  <a>Portugues</a>
                </div>
              </div>
              <div className='p-3 text-[12px]'>
                Versal Storied © 2022. All rights reserved
              </div>
            </footer>
          </aside>
        </div>
      </main>
    </>
  );
}

export default Layout;
