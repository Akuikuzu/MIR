import React from 'react'
import Image from 'next/image'

const ArtistCards = () => {
    return (
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
    )
}

export default ArtistCards