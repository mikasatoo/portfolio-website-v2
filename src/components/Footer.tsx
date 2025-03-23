import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {   
    return (
        <footer className="bg-turquoise text-gray-700">
            <div className="px-6 py-4 flex items-center justify-between w-full">
                <p className="text-sm font-semibold">© {new Date().getFullYear()} Mika Sato</p>
                <div className="flex gap-4 md:gap-6 items-center">
                    <Link href="https://github.com/mikasatoo" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub className="w-7 lg:w-6 h-7 lg:h-6" />
                    </Link>
                    <Link href="https://linkedin.com/in/mika-sato" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin className="w-7 lg:w-6 h-7 lg:h-6" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
