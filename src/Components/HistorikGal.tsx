import React from 'react'
import Image from 'next/image'

const HistorikGal = () => {
    return (
        <>
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
                            width={400}
                            height={400}
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
                            width={400}
                            height={400}
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
                            width={400}
                            height={400}
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
                                width={400}
                                height={400}
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
                                width={400}
                                height={400}
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
                                width={400}
                                height={400}
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
        </>
    )
}

export default HistorikGal