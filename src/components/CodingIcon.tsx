"use client";

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Load react-tooltip on the client
const Tooltip = dynamic(() => import("react-tooltip").then(mod => mod.Tooltip), { ssr: false });

type CodingIconInputs = {
  name: string;
  imgPath: string;
}

export default function CodingIcon({ name, imgPath }: CodingIconInputs) {
    return (
      <div className='relative'>
        {/* Small and medium screens (include icon name under img) */}
        <div className="block lg:hidden flex flex-col items-center justify-center gap-2 shrink min-w-0">
          <Image 
            src={imgPath} 
            alt={`${name} icon`} 
            height={48}
            width={48}
            className="max-h-12 object-contain"
          />
          <p className="text-xs md:text-sm">{name}</p>
        </div>

        {/* Large screens (use tooltip to show icon name) */}
        <div className="hidden lg:block">
          <a data-tooltip-id="icon-tooltip" data-tooltip-content={name}>
            <Image 
              src={imgPath} 
              alt={`${name} icon`} 
              height={56}
              width={56}
              className="max-h-14 mx-auto object-contain"
            />
          </a>
          <Tooltip id="icon-tooltip" />
        </div>
      </div>
    );
}