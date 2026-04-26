'use client'
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import '@/app/globals.css'
import { interestedFeat } from '../actions';
import { useAuth } from '../hooks';
import { useRouter } from 'next/navigation';

export default function Buttons({ eventId, interested_ids }) {
    const [auth, setAuth] = useAuth();
    const router = useRouter();
    const [pending, startTransition] = useTransition();
    let exist = false;
    if (auth && interested_ids) exist = interested_ids?.find(id => id.toString() === auth?.id.toString());
    const [isPresent, setIsPresent] = useState(exist);
    const handleInterest = async () => {
        if (auth) {
            console.log(isPresent);
            startTransition(async () => await interestedFeat(auth?.id, eventId.toString()));
            setIsPresent(!isPresent)
        }
        else {
            router.push('/login')
        }
    }
    const handleGoing = ()=>{
        if(auth){
            router.push('/payment');
        }
        else router.push('/login');
    }
    return (
        <>
            <button className={`w-full ${isPresent ? "bg-indigo-600 hover:bg-indigo-600" : ""}`} onClick={handleInterest} >{pending ? 'updating' : 'Interested'}</button>
            <button
                className="w-full bg-[#464849] py-2 px-2 rounded-md shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-transform active:translate-y-1 flex items-center justify-center"
                onClick={handleGoing}
            >
                Going
            </button>
        </>
    )
}
