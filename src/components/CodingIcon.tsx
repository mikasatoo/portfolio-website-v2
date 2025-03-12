type CodingIconInputs = {
  name: string;
  imgPath: string;
}

export function CodingIcon({ name, imgPath }: CodingIconInputs) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 shrink min-w-0">
        <img className="max-h-12 shrink" src={imgPath} alt={`${name} icon`} />
        <p className="text-xs md:text-sm">{name}</p>
      </div>
    );
}