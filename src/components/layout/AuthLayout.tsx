import React from 'react';
import AuthNav from './AuthNav';

type AuthLayoutProps = {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className='w-full h-screen overflow-auto text-sm grid grid-cols-12'>
        <div className='cols-span-12 md:col-span-7 px-8 pt-7 pb-12'>
            <AuthNav />
            {children}
        </div>
        <div className='hidden md:block col-span-5 w-full h-full bg-blue-100'></div>
    </div>
  )
}

export default AuthLayout