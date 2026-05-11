import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] overflow-hidden">
            <Image
              src="/hero.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/45" />
    
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
                <h1 className="max-w-xl text-4xl sm:text-6xl font-bold leading-tight text-white">
                  Musik i Rønde
                </h1>
                <p className="mt-4 max-w-md text-base sm:text-xl text-white/90">
                  En lokal scene for store oplevelser - live koncerter året rundt.
                </p>
                <button className="mt-8 button-bg butt-text-col px-6 py-3 rounded-md button-shadow font-semibold">
                  SE MERE
                </button>
              </div>
            </div>
          </section>
  )
}

export default Header