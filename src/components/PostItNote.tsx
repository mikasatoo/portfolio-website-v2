import Link from "next/link";

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
        // **TODO: Use the Image component (also in Frame.tsx and CodingIcon.tsx)
        <div className={rotation}>
            <Link href={path}>
                <div className={`flex w-2xs md:w-xs aspect-square items-center justify-center gap-x-4 p-6 rounded-br-3xl ${color} shadow-lg ${inlineAxis} shrink transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}>
                    <img className={`w-1/3 shrink-0 ${rotation}`} src={imgPath} alt={imgAlt} />
                    <div className="font-handwritten flex-row w-1/2">
                        <div className="text-2xl font-bold text-black mb-2">{title}</div>
                        <p>{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
