import Link from "next/link";
import Image from "next/image";

type PostItNoteInputs = {
    path: string;
    color: string;
    rotation: string;
    imgPath: string;
    imgAlt: string;
    title: string;
    description: string;
    inlineAxis: string;
}

export default function PostItNote({ path, color, rotation, imgPath, imgAlt, title, description, inlineAxis }: PostItNoteInputs) {
    return (
        <div className={rotation}>
            <Link href={path}>
                <div className={`flex flex-row w-2xs md:w-xs aspect-square items-center justify-center gap-5 p-4 md:p-6 rounded-br-3xl ${color} shadow-lg ${inlineAxis} shrink transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}>
                    <Image
                        src={imgPath}
                        alt={imgAlt}
                        width={200}
                        height={200}
                        className={`w-1/3 shrink-0 ${rotation}`}
                    />
                    
                    <div className="font-fuzzy-bubbles flex flex-col w-1/2 gap-1">
                        <div className="text-2xl font-bold text-black mb-2">{title}</div>
                        <p className="text-sm text-gray-800">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
