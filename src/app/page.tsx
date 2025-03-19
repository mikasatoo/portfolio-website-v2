import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { PostItNote } from "@/components/PostItNote";
import { CodingIcon } from "@/components/CodingIcon";

export default function Home() {
  return (
    // **TODO: Not a priority, but maybe the background could have light lines like it's notepad paper?? And change font of main text to be more handwritten too?
    <Layout bgColor="bg-butteryellow">
      <div className="flex flex-col h-full p-8 md:p-16 md:pt-8 2xl:pt-10 gap-10 2xl:gap-20 items-center justify-items-center font-[family-name:var(--font-geist-mono)] text-gray-700">
        {/* Title and bio */}
        <div className="flex flex-col 2xl:flex-row gap-10 2xl:w-280 items-center justify-items-center 2xl:justify-center">
          <div className="flex flex-col md:flex-row max-w-220 gap-2 items-center justify-items-center 2xl:justify-self-end">
            <h1 className="max-w-50 md:max-w-60 lg:max-w-120 2xl:max-w-60 text-3xl md:text-4xl font-bold text-black text-center">Hi there, I'm Mika!</h1>
            <img className="max-w-48 md:max-w-56 rotate-4" src="headshot.png" alt="Me (Mika)"></img>
          </div>

          <p className="max-w-220 2xl:max-w-160 text-center">
            I'm a self-taught software developer and former chemical engineer. 
            I graduated with a degree in Chemical and Environmental Engineering from the University of Queensland in mid-2022. 
            A year later, I saw the light and dove into the wide world of software engineering, and I haven't looked back since.
          </p>
        </div>
        
        {/* My whys and coding skills */}
        <div className="flex flex-col 2xl:flex-row gap-10 2xl:gap-24 max-w-220 2xl:max-w-280 items-center justify-items-center text-center">
          <div className="flex flex-col gap-2 max-w-220 2xl:max-w-140">
            <p className="font-bold">My whys in software engineering:</p>
            <ul className="list-disc list-inside md:text-justify">
              <li>I want to make cool things that allow me to be creative.</li>
              <li>I want to do work that has a positive impact - whether it's for 10 users or 10 million, I want to work on technology that helps people and provides a positive user experience (and hopefully even joy).</li>
              <li>I want to keep learning and growing throughout my career - with complex problems and an ever evolving industry, software feels like the best place to do this.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-bold">My coding skills:</p>

            {/* Small screens */}
            <div className="block sm:hidden">
                <div className="flex flex-row gap-6 items-center justify-center flex-wrap mb-4">
                  <CodingIcon name="JavaScript" imgPath="javascript.png" />
                  <CodingIcon name="TypeScript" imgPath="typescript.png" />
                  <CodingIcon name="Java" imgPath="java.png" />
                  <CodingIcon name="Golang" imgPath="go.png" />
                  <CodingIcon name="Python" imgPath="python.png" />
                  <CodingIcon name="React" imgPath="react.png" />
                  <CodingIcon name="Next.js" imgPath="nextjs.png" />
                  <CodingIcon name="Node.js" imgPath="node.png" />
                  <CodingIcon name="Express" imgPath="express.png" />
                  <CodingIcon name="Kubernetes" imgPath="kubernetes.png" />
                  <CodingIcon name="Jenkins" imgPath="jenkins.png" />
                  <CodingIcon name="Terraform" imgPath="terraform.png" />
                  <CodingIcon name="Ansible" imgPath="ansible.png" />
                  <CodingIcon name="Grafana" imgPath="grafana.png" />
                </div>
            </div>

            {/* Medium and larger screens */}
            <div className="hidden md:block">
              <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-row gap-8 items-center min-w-0 flex-shrink basis-0">
                  <CodingIcon name="JavaScript" imgPath="javascript.png" />
                  <CodingIcon name="TypeScript" imgPath="typescript.png" />
                  <CodingIcon name="Java" imgPath="java.png" />
                  <CodingIcon name="Golang" imgPath="go.png" />
                  <CodingIcon name="Python" imgPath="python.png" />
                </div>
                <div className="flex flex-row gap-8 items-center min-w-0 flex-shrink basis-0">
                  <CodingIcon name="React" imgPath="react.png" />
                  <CodingIcon name="Next.js" imgPath="nextjs.png" />
                  <CodingIcon name="Node.js" imgPath="node.png" />
                  <CodingIcon name="Express" imgPath="express.png" />
                </div>
                <div className="flex flex-row gap-6 items-center min-w-0 flex-shrink basis-0">
                  <CodingIcon name="Kubernetes" imgPath="kubernetes.png" />
                  <CodingIcon name="Jenkins" imgPath="jenkins.png" />
                  <CodingIcon name="Terraform" imgPath="terraform.png" />
                  <CodingIcon name="Ansible" imgPath="ansible.png" />
                  <CodingIcon name="Grafana" imgPath="grafana.png" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links to other pages */}
        {/* **TODO: Use a flex-row for now as I won't keep the blog posts post-it for now, but keep the below for when I add it back in */}
        <div className="grid grid-cols-[300px] md:grid-cols-[300px_300px] 2xl:grid-cols-[350px_300px_350px_300px] xl:mt-4 2xl:mt-6 gap-10 md:gap-16 lg:gap-20 items-center justify-evenly">
          <PostItNote path="/education" color="bg-lilac" rotation="rotate-5" inlineAxis="justify-self-center" imgPath="graduation-cap.png" imgAlt="Graduation cap" title="Education" description="I'm a real engineer! (Note: I'm not RPEQ but I do got that degree)" />
          <PostItNote path="/experience" color="bg-yellow" rotation="-rotate-3" inlineAxis="justify-self-start" imgPath="briefcase.png" imgAlt="Briefcase" title="Experience" description="For a timeline of my work experience..." />
          <PostItNote path="/projects" color="bg-pink" rotation="-rotate-6" inlineAxis="justify-self-end" imgPath="wrench.png" imgAlt="Wrench" title="Projects" description="Check out my projects!" />
          <PostItNote path="/blog" color="bg-turquoise" rotation="rotate-4" inlineAxis="justify-self-start" imgPath="writing.png" imgAlt="Writing" title="Blog Posts" description="Here's some stuff I've written :)" />
        </div>
      </div>
    </Layout>
  );
}
