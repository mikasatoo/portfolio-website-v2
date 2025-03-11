import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {   
    return (
        // TODO: Make footer be at the bottom only if total height is greater than the screen height
        <footer className="bg-stone-200 border-t-2 border-stone-300 text-gray-700">
            <div className="px-6 py-4 flex items-center justify-between w-full">
                <p className="text-sm font-semibold">© {new Date().getFullYear()} Mika Sato</p>
                <div className="flex space-x-4 md:space-x-6">
                    <a
                        href="https://github.com/mikasatoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/mika-sato"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:mika99@live.com.au"
                        className="hover:text-gray-400"
                    >
                        <MdEmail className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
