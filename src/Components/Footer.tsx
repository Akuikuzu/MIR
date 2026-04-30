import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <div className="w-full absolute grid h-auto bottom-0 bg-black text-white text-center p-3 justify-center">
        <h1 className="text-6xl text-red-600 font-bold uppercase tracking-wider p-2">Musik I Rønde</h1>
        <div className="flex border-b-2 w-lg justify-center p-2 pb-5">
            <div className="border-r-2 p-4 text-left">
                <p className="font-bold pb-5 pr-6">Navigation</p>
                <p className="">Events</p>
                <p className="">Bliv medlem</p>
                <p className="">Om Os</p>
                <p className="">Kontakt</p>
                <p className="">Info</p>
                <p className="">Galleri</p>
                <p className="">Billetter</p>
            </div>
            <div className="border-r-2 p-4 text-left">
                <p className="font-bold pb-5 pr-6">Følg Med</p>
                <p className="">Events</p>
                <p className="">Bliv medlem</p>
            </div>
            <div className="p-4 text-left">
                <p className="font-bold pb-5 pr-6">Kontakt</p>
                <p className="">Events</p>
                <p className="">Bliv medlem</p>
                <p className="">Om Os</p>
                <p className="">Kontakt</p>
                <p className="">Info</p>
                <p className="">Galleri</p>
                <p className="">Billetter</p>
            </div>
        </div>
        <h1 className="text-4xl text-red-600 font-bold uppercase tracking-wider p-4">Sponsorer</h1>
        
        <p>© 2004–2026 Musik i Rønde · Alle rettigheder forbeholdes</p>
    </div>
  )
}

export default Footer