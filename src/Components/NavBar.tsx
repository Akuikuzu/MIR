import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="relative grid grid-flow-col w-full h-auto bg-black justify-center items-center">
            <Image
            src={"/logo-1.png"}
            alt="Picture of the author"
            width={200}
            height={200}
            className="block p-2"
            loading="eager"
            />
            <ul className="grid grid-flow-col m-4 p-3 list-none text-white">
                <li className="pl-10 pr-10 text-2xl uppercase">events</li>
                <li className="pl-10 pr-10 text-2xl uppercase">Bliv Medlem</li>
                <li className="pl-10 pr-10 text-2xl uppercase">Om Os</li>
                <li className="pl-10 pr-10 text-2xl uppercase">Kontakt</li>
                <li className="pl-10 pr-10 text-2xl uppercase">Info</li>
            </ul>
            <button className="button-bg butt-text-col p-3 rounded-lg button-shadow">
                Køb Billeter
            </button>
        </nav>
    )
}

export default Navbar