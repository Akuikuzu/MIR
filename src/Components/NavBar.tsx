"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navItems = [
        { label: "events", href: "/events" },
        { label: "Bliv Medlem", href: "/bliv-medlem" },
        { label: "Om Os", href: "/om-os" },
        { label: "Kontakt", href: "/kontakt" },
        { label: "Info", href: "/info" },
    ];
    return (
        <nav className="relative w-full bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo-2.png"
                        alt="Logo"
                        width={180}
                        height={180}
                        className="h-auto w-28 sm:w-36 md:w-44"
                        priority
                    />
                </Link>

                <div id="pc/tablet-menu" className="hidden items-center gap-8 md:flex">
                    <ul className="flex items-center gap-8 text-white">
                        {navItems.map((item) => (
                            <li key={item.label} className="uppercase text-sm tracking-wide">
                                <Link href={item.href} className="hover:opacity-70 transition">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/tickets"
                        className="button-bg butt-text-col rounded-lg px-4 py-3 button-shadow"
                    >
                        Køb Billeter
                    </Link>
                </div>

                <button
                    type="button"
                    className="md:hidden rounded text-2xl px-3 py-2 text-white cursor-pointer"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            <div
                id="mobile-menu"
                className={`md:hidden overflow-hidden bg-black transition-all duration-300 ${open
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                    }`}
            >
                <ul className="flex flex-col items-center gap-5 px-4 py-6 text-white">
                    {navItems.map((item) => (
                        <li key={item.label} className="uppercase text-sm tracking-wide">
                            <Link
                                href={item.href}
                                className="hover:opacity-70 transition"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    <li className="pt-2">
                        <Link
                            href="/events"
                            className="button-bg butt-text-col rounded-lg px-4 py-3 button-shadow"
                            onClick={() => setOpen(false)}
                        >
                            Køb Billeter
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar