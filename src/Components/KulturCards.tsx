"use client";
import React from 'react'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query';
import { getFestival } from '@/api/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const KulturCards = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["festival"],
        queryFn: getFestival,
        //staleTime: 1000 * 60 * 5,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    console.log(Array.isArray(data), data)
    const festivals = Array.isArray(data) ? data.slice(0, 6) : [];
    if (isLoading) return <p>Loading...</p>;
    return (
        <section className='w-full text-white text-center p-3'>
            <p className='text-center text-3xl font-bold mb-3 mt-3'>Deltagere ved Musikfestival 2025</p>
            <div className="flex flex-wrap justify-center gap-6">
                {festivals.map((g: any) => (
                    <div className="w-full max-w-[420px] list-none overflow-hidden" key={g.id}>
                        <div className="basis-0 relative p-4 text-center">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src={API_URL + g.image_url} // put your image in public/hero.jpg
                                alt="Live music performance"
                                fill
                                className="object-cover object-center brightness-75"
                            /></div>
                            <div className="absolute inset-0 flex items-end justify-center mb-5">
                                <div className="max-w-[90%] text-center">
                                    <p className="uppercase text-3xl font-bold mb-3">{g.title}</p>
                                    <p>{g.description?.slice(0,120)}...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default KulturCards