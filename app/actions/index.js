'use server'
import { redirect } from "next/navigation";
import { createUser, findUserWithCred, handleGoing, handleInterested } from "../db/queries";
import { revalidatePath } from "next/cache";

export async function registerUser(formData) {
    const user = Object.fromEntries(formData);
    const created = await createUser(user);
    redirect('/login');
}

export async function checkCred(formData) {
    const check = await findUserWithCred(formData);
    const credentials = {};
    credentials.email = check.email;
    credentials.password = check.password;
    credentials.name = check.name;
    credentials.id = check._id.toString();
    return credentials;
}

export async function interestedFeat(authId, eventId) {
    try {
        await handleInterested(authId, eventId);
    }
    catch (error) {
        throw error;
    }
    revalidatePath('/')
}

export async function GoingFeat(authId, eventId){
    try{
        await handleGoing(authId, eventId);
    }
    catch(error){
        throw error;
    }
    revalidatePath('/');
}