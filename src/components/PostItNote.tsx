export function PostItNote({ path, color, rotation, imgPath, imgAlt, title, description }) {
    return (
        <a href={path} >
            <div className={`mx-auto flex max-w-xs min-w-3xs aspect-square items-center justify-center gap-x-4 p-6 rounded-br-3xl ${color} shadow-lg ${rotation} shrink transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`}>
                <img className={`w-1/3 shrink-0 ${rotation}`} src={imgPath} alt={imgAlt} />
                <div className="font-handwritten flex-row w-1/2">
                    <div className="text-2xl font-bold text-black mb-2">{title}</div>
                    <p className="text-gray-500 dark:text-gray-600">{description}</p>
                </div>
            </div>
        </a>
    );
}
