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

async function findUserWithCred(cred){
    const user = await userModel.findOne(cred); 
    return user;
}

export {getAllEvents, getEvent, createUser, findUserWithCred};