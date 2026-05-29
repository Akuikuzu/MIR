"use client";
import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@/api/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ArtistCards = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["events"],
        queryFn: getEvents,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <p>Loading...</p>;

    const activeEvents = Object.values(data ?? {})
        .flat()
        .filter((event: any) => Number(event.is_active) === 1);

    return (
        <section className="w-full text-white text-center p-3">
            <div className="flex flex-wrap justify-center gap-6">
                {activeEvents.map((g: any) => {
                    const formattedDate = new Date(g.event_date).toLocaleDateString('da-DK', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    });

                    return (
                        <div className="w-full max-w-[420px] list-none overflow-hidden" key={g.id}>
                            <li className="basis-0 p-4 text-left">
                                <div className="bg-[#1e1612] mt-3 border rounded-lg">
                                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border-b-2 border-gray-400">
                                        <Image
                                            src={API_URL + g.image_url}
                                            alt="Live music performance"
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <p className="uppercase text-1xl font-bold mb-3">{g.title}</p>
                                        <p className='mb-3'>{formattedDate}</p>
                                        <p className='text-gray-400'>"{g.subtitle}"</p>
                                        <div className="mt-4 flex justify-center gap-4">
                                            <button className="button-transparent-bg butt-text-col border-2 p-2 rounded-lg button-shadow">
                                                læs mere
                                            </button>
                                            <a href={g.ticket_url} className="butt-text-col button-bg p-3 rounded-lg button-shadow">
                                                Køb Billeter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    );
                })}
            </div>

            <div className='mt-6 flex justify-center'>
                <button className="text-2xl border-2 rounded-lg m-2 p-3">Se mere</button>
            </div>
        </section>
    );
}


export default ArtistCards