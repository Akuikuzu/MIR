import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="relative grid w-full h-auto bg-black justify-center">
            <ul className="grid grid-flow-col m-4 p-0 list-none text-white">
                <li className="pl-10 pr-10 text-2xl font-bold uppercase">events</li>
                <li className="pl-10 pr-10 text-2xl font-bold uppercase">Bliv Medlem</li>
                <li className="pl-10 pr-10 text-2xl font-bold uppercase">Om Os</li>
                <li className="pl-10 pr-10 text-2xl font-bold uppercase">Kontakt</li>
                <li className="pl-10 pr-10 text-2xl font-bold uppercase">Info</li>
            </ul>
        </nav>
    )
}

export default Navbar