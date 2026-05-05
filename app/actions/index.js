'use server'
import { redirect } from "next/navigation";
import { createUser, findUserWithCred, handleGoing, handleInterested } from "../db/queries";
import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { getEvent } from "../db/queries";

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

export async function GoingFeat(eventId, authId) {
    try {
        await handleGoing(eventId, authId);
        await sendEmail(eventId, authId);
    }
    catch (error) {
        throw error;
    }
    revalidatePath('/');
}

async function sendEmail(eventId, authId) {
    const event = await getEvent(eventId);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const user = await findUserWithCred({ _id: authId });
    const message = `Dear ${user.name},\n\nYou have successfully registered for the event: ${event.name}.\n\nEvent Details:\nDate: ${event.date}\nLocation: ${event.location}\n\nThank you for using our service!\n\nBest regards,\nEventry Team`;
    try {
        const sent = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: `${user.email}`,
            subject: `Registration Confirmation for ${event.name}`,
            text: message,
        });
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}