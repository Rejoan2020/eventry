'use client'
import { checkCred } from '@/app/actions';
import { useAuth } from '@/app/hooks'; 

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

export default function Login() {
    const [error, setError] = useState("");
    const [auth, setAuth] = useAuth();
    const router = useRouter();
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const data = Object.fromEntries(formData.entries()); 
            const res = await checkCred(data); 
            setAuth(res);
            router.push('/');
        }
        catch (err) {
            setError(err.message);
        }

    }
    return (
        <section className="h-screen grid place-items-center">
            <div
                className="max-w-112.5 w-full mx-auto p-6 border border-gray-700/20 rounded-md"
            >
                <h4 className="font-bold text-2xl">Sign in</h4>
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* <!-- email --> */}
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    {/* <!-- password --> */}
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    {error?<div className='text-red-500'>Invalid Credentials</div>:""}
                    <button
                        type="submit"
                        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                    >
                        Login
                    </button>
                </form>

                <span className="text-center text-xs text-gray-500">
                    Don't have an account?
                    <Link className="underline hover:text-indigo-600" href="/register"
                    >Register</Link>
                </span>
            </div>
        </section>
    )
}
