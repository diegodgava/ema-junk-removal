// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-between px-4 py-3 text-white">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-customRed" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>

      <div className="flex-1 text-center ml-12">
        <img src="/images/logo.jpeg" alt="Logo" className="h-8 mx-auto" />
      </div>
      
      <div className="flex items-center flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-600 mr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        <div>
          <span className="text-customRed text-xs font-semibold">(415) 226-9674</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
