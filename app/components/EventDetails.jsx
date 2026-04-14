import React from 'react';
import Image from 'next/image';
import Buttons from './Buttons';

export default function EventDetails() {
    return (
        <div>
            <section className="container">
                <div className="bg-linear-to-b from-slate-200/20 to-slate-800/30">
                    <Image
                        width={950}
                        height={500}
                        src="/google-io-2023-1.png"
                        alt="Event 1"
                        className="h-112.5 mx-auto" />
                </div>

                {/* <!-- Details --> */}
                <div className="flex items-end">
                    <div className="flex-auto py-4">
                        <h1 className="font-bold text-2xl">Google I/O Extended</h1>
                        <p className="text-[#9C9C9C] text-base mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                        <div className="text-[#737373] text-sm mt-1">
                            <span>1k Interested</span>
                            <span>|</span>
                            <span>40K Going</span>
                        </div>
                    </div>

                    <div className="w-full flex gap-4 mt-4 flex-1 ">
                        <Buttons/>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="grid grid-cols-5 gap-12 my-12">
                    <div className="col-span-3">
                        <div className="w-full h-full bg-[#242526] p-6 rounded-lg">
                            <h2 className="font-bold text-2xl">Details</h2>
                            <div className="my-2 text-[#AEAEAE] space-y-4 prose lg:prose-lg max-w-none">
                                <p className="">If you're passionate about data, coding, and everything tech-related, this is
                                    an event you
                                    won't want to
                                    miss.
                                    Whether you're a seasoned developer or just getting started, join us to discuss the latest trends in
                                    data
                                    analysis, programming, and software development. This is a fantastic opportunity to chat with fellow
                                    tech
                                    enthusiasts, exchange ideas, and maybe even spark some brilliant collaborations.
                                    Hosted in the 2nd Floor Training Room at The Power Plant Business Incubator.</p>

                                <ul className="">
                                    <li>🎉 Free Tshirt</li>
                                    <li>🕹️ Networking</li>
                                    <li>🎯 Networking</li>
                                    <li>📌 Free Foods</li>
                                    <li>🚀 Free Wifi</li>
                                </ul>
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
                            <p className="text-[#9C9C9C] text-base mt-1">Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
