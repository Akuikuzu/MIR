"use client";
import React from 'react'
import Image from 'next/image'
import { getGallery } from '@/api/api';
import { useQuery } from '@tanstack/react-query';

const Galleri = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { data, isLoading } = useQuery({
    queryKey: ["galleri"],
    queryFn: getGallery,
    //staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  console.log(Array.isArray(data), data)
  const festivals = Array.isArray(data) ? data.slice(0, 5) : [];
  return (
    <section className="relative w-full overflow-hidden gap-2 hidden md:flex">
      {festivals.map((h) => (
        <div className="relative w-sm aspect-[4/3] overflow-hidden rounded-lg" key={h.id}>
          <Image
            src={API_URL + h.cover_image_url} // put your image in public/hero.jpg
            alt="Live music performance"
            fill
            className="object-cover object-center"
          />
        </div>
      ))}
      <div className="gallery-bg w-xs flex flex-col items-center justify-center text-center gallery-text font-bold text-3xl">
        <p className="text-5xl pb-2">+</p>
        <p className="uppercase">Se flere</p>
      </div>
    </section>
  )
}

export default Galleri