import { eventModel } from "../models/event-models";
import { userModel } from "../models/auth-models";

async function getAllEvents(){
    const allEvents = await eventModel.find(); 
    return allEvents;
}

async function getEvent(id){
    const event = await eventModel.findById(id); 
    return event;
}

async function createUser(user){
    return await userModel.create(user);
}

export {getAllEvents, getEvent, createUser};