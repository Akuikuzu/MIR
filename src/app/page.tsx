import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex-1 bg-brown text-white">
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
      <section className="relative w-full overflow-hidden flex gap-2">
        <Image
          src="/group 35.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={200}
          className="object-cover object-center"
        />
        <Image
          src="/group 36.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={200}
          className="object-cover object-center"
        />
        <Image
          src="/group 37.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={200}
          className="object-cover object-center"
        />
        <Image
          src="/group 38.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={200}
          className="object-cover object-center"
        />
        <Image
          src="/group 40.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={200}
          className="object-cover object-center"
        />
        <div className="gallery-bg w-xs flex flex-col items-center justify-center text-center gallery-text font-bold text-3xl">
          <p className="text-5xl pb-2">+</p>
          <p className="uppercase">Se flere</p>
        </div>
      </section>
    </main>
  );
}
