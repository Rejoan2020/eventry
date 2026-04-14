'use client'
import React from 'react';
import Button from './Button';
import Link from 'next/link';
import '@/app/globals.css'

export default function Buttons() {
    return (
        <>
            <Button buttonClass={"w-full"} onClick={() => alert('Interested')} >Interested</Button>
            <Link 
            className="w-full bg-[#464849] py-2 px-2 rounded-md shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-transform active:translate-y-1 flex items-center justify-center" href={'/payment'}>Going</Link>
        </>
    )
}
