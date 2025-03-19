import Layout from "@/components/Layout";
import { Frame } from "@/components/Frame";

export default function Projects() {
    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-10 lg:gap-16 items-center font-[family-name:var(--font-geist-mono)] text-gray-700">
                <h1 className="text-3xl text-black font-bold lg:text-center">Project Gallery</h1>
                
                {/* **TODO: Add deets for the remaining projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:mt-4 2xl:mt-6 gap-12 lg:gap-x-20 2xl:max-w-400 items-start justify-items-center">
                    <Frame name="Portfolio Website" imgPath="" imgAlt="" description="" githubLink="" deployedLink="" />
                    <Frame name="HotHack..." imgPath="" imgAlt="" description="" githubLink="" deployedLink="" />
                    <Frame name="Bookstore App" imgPath="" imgAlt="" description="" githubLink="" deployedLink="" />
                    <Frame name="TFT Items Helper Quiz" imgPath="tftitemsquiz.png" imgAlt="Teamfight Tactics Items Quiz UI" description="Quiz app aimed at helping new players of Teamfight Tactics with identifying in-game items (Sep - Oct 2023)" stack="React, TypeScript, Puppeteer, Node, Sass" githubLink="https://github.com/mikasatoo/tft-items-quiz" deployedLink="https://mikasatoo.github.io/tft-items-quiz/" />
                    <Frame name="Rock Paper Scissors" imgPath="rockpaperscissors.png" imgAlt="Rock paper scissors game UI" description="Little rock paper scissors game - you vs the computer (Jun 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/rock-paper-scissors" deployedLink="https://mikasatoo.github.io/rock-paper-scissors/" />
                    <Frame name="Calculator" imgPath="calculator.png" imgAlt="Calculator app UI" description="On-screen calculator app (Jun 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/calculator" deployedLink="https://mikasatoo.github.io/calculator/" />
                    <Frame name="Etch-A-Sketch" imgPath="etchasketch.png" imgAlt="Etch-A-Sketch app UI" description="Etch-a-sketch web app (Jun 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/etch-a-sketch" deployedLink="https://mikasatoo.github.io/etch-a-sketch/" />
                    <Frame name="Library App" imgPath="" imgAlt="" description="" githubLink="" deployedLink="" />
                    <Frame name="Nook Inc. Landing Page" imgPath="" imgAlt="" description="" githubLink="" deployedLink="" />
                    <Frame name="NBA Stats Visualiser" imgPath="" imgAlt="" description="" githubLink="" deployedLink="" />
                </div>

            </div>
        </Layout>
    );
}