import Link from "next/link";
import Image from "next/image";
import { PostItNote } from "@/components/PostItNote";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col h-full gap-6 row-start-2 items-center justify-items-center font-[family-name:var(--font-geist-mono)]">
        <div className="flex flex-col gap-4 md:gap-8 text-gray-700">
          <h1 className="text-4xl font-bold text-black text-center">Hi there! 👋</h1>

          <p>
            I'm Mika, a self-taught software developer and former chemical engineer (sort of). 
            I graduated with a degree of Chemical and Environmental Engineering from the University of Queensland in mid-2022. 
            A year later, I saw the light and dove into the wide world of software engineering, and I live here now.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-evenly">
            <div>
              <p className="font-bold">My whys of software engineering:</p>
              <ul className="list-disc list-inside">
                <li>Making cool things</li>
                <li>Being creative</li>
                <li>Solving problems</li>
                <li>Learning new things everyday</li>
              </ul>
            </div>

            <div>
              <p className="font-bold">My coding skills:</p>
              <ul className="list-disc list-inside">
                <li>JavaScript and TypeScript</li>
                <li>React and Next.js</li>
                <li>Node.js</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <PostItNote path="/experience" color="bg-yellow-200" rotation="-rotate-4" imgPath="briefcase.svg" imgAlt="Briefcase" title="Experience" description="For a timeline of my work experience..." />
          <PostItNote path="/projects" color="bg-green-200" rotation="rotate-3" imgPath="build.svg" imgAlt="Building" title="Projects" description="Check out my projects!" />
          <PostItNote path="/blog" color="bg-pink-200" rotation="-rotate-3" imgPath="writing.svg" imgAlt="Writing" title="Blog Posts" description="Here's some stuff I've written :)" />
        </div>
      </main>
    </div>
  );
}
