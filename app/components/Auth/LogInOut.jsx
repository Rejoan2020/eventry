'use client'
import { useAuth } from '@/app/hooks'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LogInOut() {
  const [auth, setAuth] = useAuth();
  const router = useRouter();
  const logOut = ()=>{
    setAuth(null);
    router.push('/login');
  }
  return (
    auth?
      <div>{auth.name} | <a className='cursor-pointer' onClick={logOut}>Logout</a> </div>

      :
      <Link href={"/login"}>Login</Link>
    
  )
}
