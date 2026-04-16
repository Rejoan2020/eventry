'use server'
import { redirect } from "next/navigation";
import { createUser } from "../db/queries";

export async function registerUser(formData){
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect('/login');
}