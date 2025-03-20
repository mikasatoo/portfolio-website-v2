"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PiHandPeace } from "react-icons/pi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-lilac text-gray-700 font-[family-name:var(--font-geist-mono)]">
            <div className="mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-4 text-xl font-bold">
                    <PiHandPeace />
                    Mika Sato
                </Link>

                {/* Medium and larger screens */}
                <div className="hidden md:flex gap-6 font-semibold md:items-center">
                    <NavLink href="/education" label="Education" />
                    <NavLink href="/experience" label="Experience" />
                    <NavLink href="/projects" label="Projects" />
                    {/* TODO: Add the "Blog" link back in once I set up this page (and in the hamburger menu dropdown below) */}
                    {/* <NavLink href="/blog" label="Blog" /> */}
                    {/* **TODO: Add a link/onClick prop to the "Contact me" button (to bring up an overlay?) */}
                    <button className="bg-pink rounded-xl p-2 px-3 hover:outline-2 hover:outline-offset-2 hover:outline-pink">Contact me</button>
                </div>

                {/* Small screens */}
                <div className="md:hidden flex items-center gap-3">
                    {/* **TODO: Add the same link/onClick prop to this one too */}
                    <button className="md:hidden bg-pink rounded-xl p-2 px-3 text-sm font-semibold">Contact me</button>

                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Hamburger menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Hamburger menu dropdown */}
            {isOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-stone-50 shadow-lg">
                    <NavLink href="/education" label="Education" onClick={() => setIsOpen(false)} />
                    <NavLink href="/experience" label="Experience" onClick={() => setIsOpen(false)} />
                    <NavLink href="/projects" label="Projects" onClick={() => setIsOpen(false)} />
                    {/* <NavLink href="/blog" label="Blog" onClick={() => setIsOpen(false)} /> */}
                </div>
            )}
        </nav>
    );
}

type NavLinkInputs = {
    href: string;
    label: string;
    onClick?: () => void
}

function NavLink({ href, label, onClick }: NavLinkInputs) {
    return (
        <Link href={href} className="text-gray-700 hover:text-blue-500" onClick={onClick}>
            {label}
        </Link>
    );
}
