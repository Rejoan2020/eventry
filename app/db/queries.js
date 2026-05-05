import { eventModel } from "../models/event-models";
import { userModel } from "../models/auth-models";
import mongoose from "mongoose";

async function getAllEvents() {
    const allEvents = await eventModel.find();
    return allEvents;
}

async function getEvent(id) {
    const event = await eventModel.findById(id);
    console.log("Event details from query : ",id);
    return event;
}

async function createUser(user) {
    return await userModel.create(user);
}

async function findUserWithCred(cred) {
    const user = await userModel.findOne(cred);
    return user;
}

async function handleInterested(authId, eventId) {
    const event = await eventModel.findById(eventId);
    if (event.interested_ids.find(id => id.toString() === authId.toString())) {
        event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
    }
    else {
        event.interested_ids.push(new mongoose.Types.ObjectId(authId));
    }
    await event.save();
}

async function handleGoing(eventId, authId) {
    const event = await eventModel.findById(eventId); 
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    await event.save();
}
export { getAllEvents, getEvent, createUser, findUserWithCred, handleInterested, handleGoing};