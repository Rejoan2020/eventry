import React from 'react';
import Image from 'next/image';
import Buttons from './Buttons';
import { getEvent } from '../db/queries';

export default async function EventDetails({ id }) {
    const event = await getEvent(id);
    return (
        <div>
            <section className="container">
                <div className="bg-linear-to-b from-slate-200/20 to-slate-800/30">
                    <div className="w-full h-96 relative">
                        <Image
                            src={event.imageUrl}
                            alt={event.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* <!-- Details --> */}
                <div className="flex items-end">
                    <div className="flex-auto py-4">
                        <h1 className="font-bold text-2xl">{event.name}</h1>
                        <p className="text-[#9C9C9C] text-base mt-1">{event.location}</p>
                        <div className="text-[#737373] text-sm mt-1">
                            <span>{event.interested_ids.length}</span>
                            <span>|</span>
                            <span>{event.going_ids.length}</span>
                        </div>
                    </div>

                    <div className="w-full flex gap-4 mt-4 flex-1 ">
                        <Buttons eventId = {event._id.toString()} interested_ids = {event.interested_ids.map(id=>id.toString())}/>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <div className="col-span-3">
                        <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
                            <h2 className="font-bold text-2xl">Details</h2>
                            <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
                                <p className="">{event.details}</p>
                                {event.swags && <ul>
                                    {event.swags.map((item)=>  
                                        <li key={item}>{item}</li>
                                    )}
                                    </ul>
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg col-span-2 bg-[#242526]">
                        <div className="w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9563.048507081372!2d89.4311410274292!3d25.90038347256725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711180232846!5m2!1sen!2sbd"
                                width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="p-4">
                            <p className="text-[#9C9C9C] text-base mt-1">{event.location}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
