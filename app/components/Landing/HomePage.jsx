import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Buttons from '../Buttons';
import { getAllEvents } from '@/app/db/queries';

export default async function HomePage() {
    const events = await getAllEvents();
    return (
        <div className="py-8 px-8">
            <div className="container">
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl">Discover Events</h1>
                    <div>
                        <input type="text" placeholder="Search..."
                            className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {events.map((event) => (
                        <div key={event._id.toString()} className="overflow-hidden rounded-md bg-[#242526]">
                            <div className="w-full h-48 relative">
                                <Image
                                    src={event.imageUrl}
                                    alt="Event"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-3">
                                <Link href={`/details/${event._id.toString()}`} className="font-bold text-lg">{event.name}</Link>

                                <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
                                <div className="text-[#737373] text-sm mt-1">
                                    <span>{event.interested_ids?.length}</span>
                                    <span>|</span>
                                    <span>{event.going_ids?.length}</span>
                                </div>

                                {/* <!-- Buttons --> */}
                                <div className="w-full flex gap-4 mt-4">
                                    <Buttons
                                        eventId={event._id.toString()}
                                        interested_ids={event.interested_ids.map(id => id.toString())}
                                        going_ids={event.going_ids.map(id => id.toString())} />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
