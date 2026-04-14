import { eventModel } from "../models/event-models";

async function getAllEvents(){
    const allEvents = await eventModel.find();
    console.log(allEvents);
    return allEvents;
}

export {getAllEvents};