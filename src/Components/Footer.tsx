import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <div className="w-full grid h-auto bottom-0 bg-black text-white text-center p-3 justify-center">
        <h1 className="text-6xl butt-text-col font-bold uppercase tracking-wider p-2">Musik I Rønde</h1>
        <div className="flex w-full max-w-5xl border-b-2 justify-center p-2 pb-5">
            <div className="flex-1 basis-0 border-r-2 p-4 pl-6 text-left">
                <p className="font-bold pb-5 pr-6">Navigation</p>
                <p className="">Events</p>
                <p className="">Bliv medlem</p>
                <p className="">Om Os</p>
                <p className="">Kontakt</p>
                <p className="">Info</p>
                <p className="">Galleri</p>
                <p className="">Billetter</p>
            </div>
            <div className="flex-1 bassis-0 border-r-2 p-4 text-left">
                <p className="font-bold pb-5 pr-6">Følg Med</p>
                <p className="">Følg os på sociale medier:</p>
                <p className="">media logos</p>
            </div>
            <div className="flex-1 basis-0 p-4 text-left">
                <p className="font-bold pb-5 pr-6">Kontakt</p>
                <p className="">Kulturhotellet</p>
                <p className="">Hovedgaden 10</p>
                <p className="">8410 Rønde</p>
                <p className="">info@musikiroende.dk</p>
                <p className="">CVR: 27590969</p>
            </div>
        </div>
        <h1 className="text-4xl butt-text-col font-bold uppercase tracking-wider p-4 text-center">Sponsorer</h1>
        <div className="flex items-center justify-center p-2 pb-5">
                    <Image
                        src={"/image1.png"}
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="block p-2"
                        loading="eager"
                    />
                    <Image
                        src={"/image3.png"}
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="block p-2"
                        loading="eager"
                    />
        </div>
        <p>© 2004–2026 Musik i Rønde · Alle rettigheder forbeholdes</p>
    </div>
  )
}

export default Footer