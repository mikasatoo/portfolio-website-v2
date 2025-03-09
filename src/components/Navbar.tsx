"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons from Lucide

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-yellow-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-black">
                    Mika Sato
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <NavLink href="/experience" label="Experience" />
                    <NavLink href="/projects" label="Projects" />
                    <NavLink href="/contact" label="Contact" />
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
