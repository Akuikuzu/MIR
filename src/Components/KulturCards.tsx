import React from 'react'
import Image from 'next/image'

const KulturCards = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-items-center">
                <div className="mt-3 relative inline-block overflow-hidden rounded-lg text-center">
                    <Image
                        src="/musikfestival1.jpg" // put your image in public/hero.jpg
                        alt="Live music performance"
                        width={400}
                        height={400}
                        className="object-fill object-center brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <p className="uppercase text-3xl font-bold mb-3">Ungdomskoret AMOK</p>
                            <p>Ungdomskoret AMOK synger nyere dansk rytmisk musik, som blandt andet Andreas Odbjerg.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3 relative inline-block overflow-hidden rounded-lg text-center">
                    <Image
                        src="/musikfestival2.jpg" // put your image in public/hero.jpg
                        alt="Live music performance"
                        width={400}
                        height={400}
                        className="block object-cover object-center brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <p className="uppercase text-3xl font-bold mb-3">Snake Stew</p>
                            <p>Snake Stew er navnet på en duo, som udgav i januar deres første split-single Babbling Fool / Withered Plants.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3 relative inline-block overflow-hidden rounded-lg text-center">
                    <Image
                        src="/musikfestival3.jpg" // put your image in public/hero.jpg
                        alt="Live music performance"
                        width={400}
                        height={400}
                        className="block object-cover object-center brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <p className="uppercase text-3xl font-bold mb-3">De Fermenterede</p>
                            <p>De Fermenterede spiller et varieret  repertoire af covernumre inden for rock, soul og pop - og vi spiller  sammen, fordi det at spille musik.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-3 justify-items-center">
                <div className="mt-3 relative inline-block overflow-hidden rounded-lg text-center">
                    <Image
                        src="/musikfestival4.jpg" // put your image in public/hero.jpg
                        alt="Live music performance"
                        width={400}
                        height={400}
                        className="block object-cover object-center brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <p className="uppercase text-3xl font-bold mb-3">Jazz på første</p>
                            <p>Vi spiller vores guitar-baserede  versioner af jazz-standards, bossaer m.v. på en lidt tilbagelænet og  forhåbentlig hyggebefordrende facon.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3 relative inline-block overflow-hidden rounded-lg text-center">
                    <Image
                        src="/musikfestival5.jpg" // put your image in public/hero.jpg
                        alt="Live music performance"
                        width={400}
                        height={400}
                        className="block object-cover object-center brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <p className="uppercase text-3xl font-bold mb-3">Svenke viser</p>
                            <p>Vores program har ekko fra min svenske  musikarv fra barndommen og opvæksten i Sverige, ikke mindst sangene  skrevet af folk som Evert Taube, Dan Anderson og Cornelis Wreesvijk</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3 relative inline-block overflow-hidden rounded-lg text-center">
                    <Image
                        src="/musikfestival6.jpg" // put your image in public/hero.jpg
                        alt="Live music performance"
                        width={400}
                        height={400}
                        className="block object-cover object-center brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div>
                            <p className="uppercase text-3xl font-bold mb-3">Smalltown</p>
                            <p>Vi er et lokalt band fra Thorsager bestående af 7 medlemmer. Vores repertoire er covernumre, og det bevæger sig primært inden for pop, rock og country.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KulturCards