'use server'
import { redirect } from "next/navigation";
import { createUser, findUserWithCred, handleInterested } from "../db/queries";
import { revalidatePath } from "next/cache";

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
    credentials.id = check._id.toString();
    return credentials;
}

export async function interestedFeat(authId, eventId){
    await handleInterested(authId, eventId);
    revalidatePath('/')
}