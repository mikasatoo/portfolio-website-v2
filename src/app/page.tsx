import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { PostItNote } from "@/components/PostItNote";
import { CodingIcon } from "@/components/CodingIcon";

export default function Home() {
  return (
    <Layout bgColor="bg-stone-50">
      <div className="flex flex-col h-full p-8 md:p-16 md:pt-8 gap-8 items-center justify-items-center font-[family-name:var(--font-geist-mono)]">
        <div className="bg-lilac flex flex-col md:flex-row w-full max-w-410 pt-6 md:pt-0 gap-2 items-center justify-center">
          <h1 className="max-w-80 lg:max-w-120 text-3xl md:text-4xl font-bold text-black text-center">Hi there, I'm Mika!</h1>
          <img className="w-full max-w-48 md:max-w-56 rotate-4" src="headshot.png" alt="Me (Mika)"></img>
        </div>

        <div className="bg-pink w-full max-w-410 p-8 flex justify-items-center items-center text-gray-100">
          {/* TODO: How to center the <p> elemnent in here??? */}
          <p className="max-w-190 lg:w-3/4 text-center">
            I'm a self-taught software developer and former chemical engineer. 
            I graduated with a degree in Chemical and Environmental Engineering from the University of Queensland in mid-2022. 
            A year later, I saw the light and dove into the wide world of software engineering, and I haven't looked back since.
          </p>
        </div>
          
        <div className="flex flex-col lg:flex-row w-full max-w-410 text-gray-700">
          <div className="bg-turquoise p-8 flex flex-col gap-4 lg:w-1/2">
            <p className="font-bold text-center">My whys in software engineering:</p>
            <ul className="list-disc list-inside">
              <li>I want to make cool things that allow me to be creative.</li>
              <li>I want to do work that has a positive impact - whether it's for 10 users or 10 million, I want to work on technology that helps people and provides a positive user experience.</li>
              <li>I want to keep learning and growing throughout my career - with complex problems and an ever evolving industry, software feels like the best place to do this.</li>
            </ul>
          </div>

          <div className="border-6 border-turquoise p-8 pb-4 md:pb-8 flex flex-col gap-6 lg:w-1/2">
            <p className="font-bold text-center">My coding skills:</p>

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

        <div className="grid grid-cols-[300px] md:grid-cols-[300px_300px] 2xl:grid-cols-[350px_300px_350px_300px] xl:mt-4 2xl:mt-6 gap-10 md:gap-16 lg:gap-20 items-center justify-evenly text-gray-700">
          <PostItNote path="/education" color="bg-lilac" rotation="rotate-5" inlineAxis="justify-self-center" imgPath="graduation-cap.png" imgAlt="Graduation cap" title="Education" description="I'm a real engineer! (Note: I'm not RPEQ but I do got that degree)" />
          <PostItNote path="/experience" color="bg-yellow" rotation="-rotate-3" inlineAxis="justify-self-start" imgPath="briefcase.png" imgAlt="Briefcase" title="Experience" description="For a timeline of my work experience..." />
          <PostItNote path="/projects" color="bg-pink" rotation="-rotate-6" inlineAxis="justify-self-end" imgPath="wrench.png" imgAlt="Wrench" title="Projects" description="Check out my projects!" />
          <PostItNote path="/blog" color="bg-turquoise" rotation="rotate-4" inlineAxis="justify-self-start" imgPath="writing.png" imgAlt="Writing" title="Blog Posts" description="Here's some stuff I've written :)" />
        </div>
      </div>
    </Layout>
  );
}
