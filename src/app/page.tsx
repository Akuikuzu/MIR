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
          className="object-cover object-center"
        />
        <Image
          src="/group38.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={300}
          className="object-cover object-center"
        />
        <Image
          src="/group40.jpg" // put your image in public/hero.jpg
          alt="Live music performance"
          width={300}
          height={300}
          className="object-cover object-center"
        />
        <div className="gallery-bg w-xs flex flex-col items-center justify-center text-center gallery-text font-bold text-3xl">
          <p className="text-5xl pb-2">+</p>
          <p className="uppercase">Se flere</p>
        </div>
      </section>
      <section className="w-full grid h-auto bottom-0 text-white text-center p-3 justify-center">
        <div className="flex w-full max-w-5xl overflow-hidden gap-2 list-none justify-center p-2 pb-5">
          <li className="flex-1 basis-0 p-4 text-left"> <p className="bg-amber-600 p-4 ">Diving Ducks</p>
            <div className="bg-gray-600 mt-3 border rounded-lg">
              <Image
                src="/group35.jpg" // put your image in public/hero.jpg
                alt="Live music performance"
                width={700}
                height={700}
                className="object-cover object-center rounded-lg border-b-2 border-gray-400"
              />
              <div className="p-3">
                <p className="uppercase text-3xl font-bold mb-3">title</p>
                <p>dato</p>
                <p>genre</p>
                <button className="button-transparent-bg butt-text-col border-2 p-2 ml-7 mt-4 rounded-lg button-shadow">
                  læs mere
                </button>
                <button className="butt-text-col button-bg p-3 rounded-lg ml-7 button-shadow">
                  Køb Billeter
                </button>
              </div>
            </div>
          </li>
          <li className="flex-1 bassis-0 p-4 text-left"> <p className="bg-amber-800 p-4">Diving Ducks</p>
            <div className="bg-gray-600 p-0 mt-3 border rounded-lg">
              <Image
                src="/group35.jpg" // put your image in public/hero.jpg
                alt="Live music performance"
                width={700}
                height={700}
                className="object-cover object-center rounded-lg border-b-2 border-gray-400"
              />
              <div className="p-3">
                <p className="uppercase text-3xl font-bold mb-3">title</p>
                <p>dato</p>
                <p>genre</p>
                <button className="button-transparent-bg butt-text-col border-2 p-2 ml-7 mt-4 rounded-lg button-shadow">
                  læs mere
                </button>
                <button className="butt-text-col button-bg p-3 rounded-lg ml-7 button-shadow">
                  Køb Billeter
                </button>
              </div>
            </div>
          </li>
          <li className="flex-1 basis-0 p-4 text-left"> <p className="bg-amber-800 p-4">Diving Ducks</p>
            <div className="bg-gray-600 mt-3 border rounded-lg">
              <Image
                src="/group35.jpg" // put your image in public/hero.jpg
                alt="Live music performance"
                width={700}
                height={700}
                className="object-cover object-center rounded-lg border-b-2 border-gray-400"
              />
              <div className="p-3">
                <p className="uppercase text-3xl font-bold mb-3">title</p>
                <p>dato</p>
                <p>genre</p>
                <button className="button-transparent-bg butt-text-col border-2 p-2 ml-7 mt-4 rounded-lg button-shadow">
                  læs mere
                </button>
                <button className="butt-text-col button-bg p-3 rounded-lg ml-7 button-shadow">
                  Køb Billeter
                </button>
              </div>
            </div>
          </li>
        </div>
        <div>
          <button className="text-2xl border-2 rounded-lg m-2 p-3">Se mere</button>
        </div>
      </section>
      <section className="flex gap-6 mb-14 justify-center">
        <div className="shrink-0 flex items-center">
          <div className="bg-amber-800 text-white font-bold p-6 vertical-rl text-5xl rounded-lg">
            2026
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="mt-3 rounded-lg text-center relative">
            <Image
              src="/group35.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={500}
              height={500}
              className="object-cover object-center rounded-lg"
            />
            <div className="absolute inset-4">
              <div className="bg-black/60 px-9 py-9 rounded-lg drop-shadow-2xl">
                <p className="uppercase text-3xl font-bold mb-3">title</p>
                <p>dato</p>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-lg text-center relative">
            <Image
              src="/group37.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={500}
              height={500}
              className="object-cover object-center rounded-lg"
            />
            <div className="absolute inset-4">
              <div className="bg-black/60 px-9 py-9 rounded-lg drop-shadow-2xl">
                <p className="uppercase text-3xl font-bold mb-3">title</p>
                <p>dato</p>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-lg text-center relative">
            <Image
              src="/group36.jpg" // put your image in public/hero.jpg
              alt="Live music performance"
              width={500}
              height={500}
              className="object-cover object-center rounded-lg"
            />
            <div className="absolute inset-4">
              <div className="bg-black/60 px-9 py-9 rounded-lg drop-shadow-2xl">
                <p className="uppercase text-3xl font-bold mb-3">title</p>
                <p>dato</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 mb-14">
        <div className="flex gap-6 mb-1 justify-center">
          <div className="shrink-0 flex items-center">
            <div className="bg-amber-800 text-white font-bold p-6 vertical-rl text-5xl rounded-lg">
              2025
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-end">
            <div className="mt-3 rounded-lg text-center relative">
              <Image
                src="/group35.jpg" // put your image in public/hero.jpg
                alt="Live music performance"
                width={500}
                height={500}
                className="object-cover object-center rounded-lg"
              />
              <div className="absolute inset-4">
                <div className="bg-black/60 px-9 py-9 rounded-lg drop-shadow-2xl">
                  <p className="uppercase text-3xl font-bold mb-3">title</p>
                  <p>dato</p>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg text-center relative">
              <Image
                src="/group37.jpg" // put your image in public/hero.jpg
                alt="Live music performance"
                width={500}
                height={500}
                className="object-cover object-center rounded-lg"
              />
              <div className="absolute inset-4">
                <div className="bg-black/60 px-9 py-9 rounded-lg drop-shadow-2xl">
                  <p className="uppercase text-3xl font-bold mb-3">title</p>
                  <p>dato</p>
                </div>
              </div>
            </div>
            <div className="mt-3 rounded-lg text-center relative">
              <Image
                src="/group36.jpg" // put your image in public/hero.jpg
                alt="Live music performance"
                width={500}
                height={500}
                className="object-cover object-center rounded-lg"
              />
              <div className="absolute inset-4">
                <div className="bg-black/60 px-9 py-9 rounded-lg drop-shadow-2xl">
                  <p className="uppercase text-3xl font-bold mb-3">title</p>
                  <p>dato</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="text-2xl border-2 rounded-lg p-3">Se mere</button>
        </div>
      </section>
    </main>
  );
}
