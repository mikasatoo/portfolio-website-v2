"use client";

import dynamic from 'next/dynamic';

// Load react-tooltip on the client
const Tooltip = dynamic(() => import("react-tooltip").then(mod => mod.Tooltip), { ssr: false });

type CodingIconInputs = {
  name: string;
  imgPath: string;
}

export function CodingIcon({ name, imgPath }: CodingIconInputs) {
    return (
      <div>
        {/* Small and medium screens (include icon name under img) */}
        <div className="block lg:hidden flex flex-col items-center justify-center gap-2 shrink min-w-0">
          <img className="max-h-12 shrink" src={imgPath} alt={`${name} icon`} />
          <p className="text-xs md:text-sm">{name}</p>
        </div>

        {/* Large screens (use tooltip to show icon name) */}
        <div className="hidden lg:block">
          <a data-tooltip-id="icon-tooltip" data-tooltip-content={name}>
            <img className="max-h-14 shrink-0 mx-auto" src={imgPath} alt={`${name} icon`} />
          </a>
          <Tooltip id="icon-tooltip" />
        </div>
      </div>
    );
}