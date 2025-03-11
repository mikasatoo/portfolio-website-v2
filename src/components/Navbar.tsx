"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PiHandPeace } from "react-icons/pi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-stone-200 border-b-2 border-stone-300 text-gray-700">
            <div className="mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <PiHandPeace />
                    Mika Sato
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 font-semibold">
                    <NavLink href="/education" label="Education" />
                    <NavLink href="/experience" label="Experience" />
                    <NavLink href="/projects" label="Projects" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 px-6 py-4 bg-white shadow-lg">
                    <NavLink href="/experience" label="Experience" onClick={() => setIsOpen(false)} />
                    <NavLink href="/projects" label="Projects" onClick={() => setIsOpen(false)} />
                    <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
                </div>
            )}
        </nav>
    );
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
    return (
        <Link href={href} className="text-gray-700 hover:text-blue-500" onClick={onClick}>
            {label}
        </Link>
    );
}
