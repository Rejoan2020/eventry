import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import LogInOut from '@/app/components/Auth/LogInOut'

export default function Navbar() {
    return (
        <div>
            <div className="container flex justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image src="/logo.svg" width={150} height={150} alt="Eventry" className="h-11.25" />
                    </Link>
                </div>

                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>
                        <LogInOut/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
