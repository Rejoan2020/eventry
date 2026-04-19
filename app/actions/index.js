'use server'
import { redirect } from "next/navigation";
import { createUser, findUserWithCred } from "../db/queries";

export async function registerUser(formData){
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect('/login');
}

export async function checkCred(formData){
    const check = await findUserWithCred(formData);
    const credentials ={};
    credentials.email = check.email;
    credentials.password = check.password;
    credentials.name = check.name;
    return credentials;
}