"use client";
import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@/api/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const ArtistCards = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["mydata"],
        queryFn: getEvents,
        //staleTime: 1000 * 60 * 5,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    console.log(Array.isArray(data), data)

    if (isLoading) return <p>Loading...</p>;

    const activeEvents = Object.values(data ?? {})
        .flat()
        .filter((event: any) => Number(event.is_active) === 1);

    return (
        <section className="w-full text-white text-center p-3">
            <div className="flex flex-wrap justify-center gap-6">
                {activeEvents.map((g: any) => (
                    <div className="w-full max-w-[420px] list-none" key={g.id}>
                        <li className="basis-0 p-4 text-left"> <p className="bg-amber-600 p-4 ">{g.title}</p>
                            <div className="bg-gray-600 mt-3 border rounded-lg">
                                <Image
                                    src={API_URL + g.image_url} // put your image in public/hero.jpg
                                    alt="Live music performance"
                                    width={700}
                                    height={700}
                                    className="object-cover object-center rounded-lg border-b-2 border-gray-400"
                                />
                                <div className="p-3">
                                    <p className="uppercase text-3xl font-bold mb-3">{g.title}</p>
                                    <p>{g.event_date}</p>
                                    <p>genre</p>
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
                ))}
            </div>

            <div className='mt-6 flex justify-center'>
                <button className="text-2xl border-2 rounded-lg m-2 p-3">Se mere</button>
            </div>
        </section>
    )
}

export default ArtistCards