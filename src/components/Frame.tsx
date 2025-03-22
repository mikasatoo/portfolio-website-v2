"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type FrameInputs = {
    name: string;
    imgPath: string;
    imgAlt: string;
    description: string;
    stack: string;
    githubLink: string;
    deployedLink: string;
}

export function Frame({ name, imgPath, imgAlt, description, stack, githubLink, deployedLink }: FrameInputs) {
    return (
        <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <div className="bg-stone-50 p-2 flex flex-col w-full max-w-[300px] h-[300px] aspect-square items-center justify-between shadow-lg border-double border-16 border-yellow-500 rounded-xl outline outline-8 outline-yellow-400 mb-4">
                        {/* Artwork name */}
                        <h3 className="text-lg lg:text-md font-bold text-black pb-2 px-2">{name}</h3>

                        {/* Image */}
                        <div className="mx-2 flex items-center justify-center overflow-hidden">
                            <Image 
                                src={imgPath}
                                alt={imgAlt}
                                width={600} 
                                height={400} 
                                layout="intrinsic"
                                className="object-contain"
                            />
                        </div>

                        {/* Links */}
                        <div className="flex flex-row gap-5 md:gap-4 self-end place-self-end items-center pt-2 mr-2">
                            {githubLink && (
                                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                                    <div className="w-7 lg:w-6">
                                        <Image
                                            src="/github.png"
                                            alt="GitHub link"
                                            width={7}
                                            height={7}
                                            layout="responsive"
                                        />
                                    </div>
                                </Link>
                            )}
                            {deployedLink && (
                                <Link href={deployedLink} target="_blank" rel="noopener noreferrer">
                                    <div className="w-6 lg:w-5">
                                        <Image
                                            src="/external-link.png"
                                            alt="External link"
                                            width={6}
                                            height={6}
                                            layout="responsive"
                                        />
                                    </div>                    
                                </Link>
                            )}
                        </div>
                    </div>

                    <p className="w-full italic text-sm">{description}</p>
                    <p className="w-4/5 font-bold text-sm">{stack}</p>
                </div>
            </motion.div>
    );
}