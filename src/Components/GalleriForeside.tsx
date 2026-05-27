import React from 'react'
import Image from 'next/image'

const Galleri = () => {
  
  return (
    <section className="relative w-full overflow-hidden flex gap-2">
            <Image
              src="/group35.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={300}
              height={300}
              className="object-cover object-center"
            />
            <Image
              src="/group36.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={300}
              height={300}
              className="object-cover object-center"
            />
            <Image
              src="/group37.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={300}
              height={300}
              className="hidden sm:block object-cover object-center"
            />
            <Image
              src="/group38.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={300}
              height={300}
              className="hidden lg:block object-cover object-center"
            />
            <Image
              src="/group40.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={300}
              height={300}
              className="hidden lg:block object-cover object-center"
            />
            <div className="gallery-bg w-xs flex flex-col items-center justify-center text-center gallery-text font-bold text-3xl">
              <p className="text-5xl pb-2">+</p>
              <p className="uppercase">Se flere</p>
            </div>
          </section>
  )
}

export default Galleri