"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { PiHandPeace } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-lilac text-gray-700 font-[family-name:var(--font-geist-mono)]">
            {/* Navbar contents */}
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
                    <button 
                        className="bg-pink rounded-xl p-2 px-3 hover:outline-2 hover:outline-offset-2 hover:outline-pink cursor-pointer"
                        onClick={() => setIsContactOpen(true)}
                    >
                        Contact me
                    </button>
                </div>

                {/* Small screens */}
                <div className="md:hidden flex items-center gap-3">
                    <button 
                        className="md:hidden bg-pink rounded-xl p-2 px-3 text-sm font-semibold"
                        onClick={() => setIsContactOpen(true)}
                    >
                        Contact me
                    </button>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Hamburger menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Hamburger menu dropdown */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-stone-50 shadow-lg">
                    <NavLink href="/education" label="Education" onClick={() => setIsMenuOpen(false)} />
                    <NavLink href="/experience" label="Experience" onClick={() => setIsMenuOpen(false)} />
                    <NavLink href="/projects" label="Projects" onClick={() => setIsMenuOpen(false)} />
                    {/* <NavLink href="/blog" label="Blog" onClick={() => setIsMenuOpen(false)} /> */}
                </div>
            )}

            {/* "Contact me" overlay/modal */}
            {isContactOpen && (
                <div 
                    className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center"
                    onClick={() => setIsContactOpen(false)}     // (close overlay when clicking outside the modal)
                >
                    <div className=
                        "bg-stone-50 flex flex-col items-start justify-center gap-4 p-7 rounded-lg shadow-lg max-w-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-lg font-semibold mb-2">Want to get in touch?</h2>

                        <div className="flex flex-row gap-4 w-full justify-between items-center">
                            <p>Connect on LinkedIn </p>
                            <Link href="https://linkedin.com/in/mika-sato" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                                <FaLinkedin className="w-8 lg:w-7 h-8 lg:h-7" />
                            </Link>
                        </div>

                        <div className="mt-4 flex w-full justify-end">
                            <button
                                onClick={() => setIsContactOpen(false)}
                                className="bg-pink rounded p-2 px-3 text-sm hover:text-gray-400 cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
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
        <Link href={href} className="text-gray-700 hover:text-pink" onClick={onClick}>
            {label}
        </Link>
    );
}
