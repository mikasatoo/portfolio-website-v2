import Layout from "@/components/Layout";
import { Frame } from "@/components/Frame";

export default function Projects() {
    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-10 md:gap-16 items-center text-gray-700">
                <h1 className="text-3xl text-black font-bold text-center">Project Gallery</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:mt-2 2xl:mt-6 gap-12 lg:gap-x-20 2xl:max-w-400 items-start justify-items-center">
                    <Frame name="Portfolio Website" imgPath="/youarehere.png" imgAlt="You are here" description="My portfolio website - i.e. what you're looking at now (Mar 2025)" stack="Next.js, TypeScript, Tailwind" githubLink="https://github.com/mikasatoo/portfolio-website-v2" deployedLink="" />
                    <Frame name="Music Tour Planning App (HotHack)" imgPath="/hothack3.png" imgAlt="Our team's presenting our product at HotHack" description="A full-stack app aimed at making music tour planning easier - developed as part of a hackathon for junior devs (Jan 2024)" stack="Ruby on Rails" githubLink="https://github.com/AwolDes/hothack-team-9-2024" deployedLink="" />
                    <Frame name="TFT Items Helper Quiz" imgPath="/tftitemsquiz.png" imgAlt="Teamfight Tactics Items Quiz UI" description="Quiz app aimed at helping new players of Teamfight Tactics with identifying in-game items (Sep - Oct 2023)" stack="React, TypeScript, Puppeteer, Node, Sass" githubLink="https://github.com/mikasatoo/tft-items-quiz" deployedLink="https://mikasatoo.github.io/tft-items-quiz/" />
                    <Frame name="Bookstore" imgPath="/bookstore2.png" imgAlt="Bookstore app UI" description="Full-stack bookstore web app (Oct 2023)" stack="React, Node.js, Express, MongoDB, Tailwind" githubLink="https://github.com/mikasatoo/bookstore-mern-stack" deployedLink="" />
                    <Frame name="Rock Paper Scissors" imgPath="/rockpaperscissors.png" imgAlt="Rock paper scissors game UI" description="Little rock paper scissors game - you vs the computer (Jun 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/rock-paper-scissors" deployedLink="https://mikasatoo.github.io/rock-paper-scissors/" />
                    <Frame name="Calculator" imgPath="/calculator.png" imgAlt="Calculator app UI" description="On-screen calculator app (Jun 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/calculator" deployedLink="https://mikasatoo.github.io/calculator/" />
                    <Frame name="Etch-A-Sketch" imgPath="/etchasketch.png" imgAlt="Etch-A-Sketch app UI" description="Etch-a-sketch web app (Jun 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/etch-a-sketch" deployedLink="https://mikasatoo.github.io/etch-a-sketch/" />
                    <Frame name="Library App" imgPath="/library.png" imgAlt="My Library app UI" description="Personal library web app for adding books you've read or want to read (Jun - Jul 2023)" stack="JavaScript, HTML, CSS" githubLink="https://github.com/mikasatoo/library" deployedLink="https://mikasatoo.github.io/library/" />
                    <Frame name="Nook Inc. Landing Page" imgPath="/nookinc.png" imgAlt="Nook Inc. Homepage" description="My very first webpage <3 (May 2023)" stack="HTML, CSS" githubLink="https://github.com/mikasatoo/landing-page" deployedLink="https://mikasatoo.github.io/landing-page/" />
                    <Frame name="NBA Stats Visualiser" imgPath="/nbastats2.png" imgAlt="Lebron's made and missed shots" description="Python data project - processing and visualising real-time NBA statistics (Dec 2022 - Jan 2023)" stack="Python" githubLink="" deployedLink="" />
                </div>
            </div>
        </Layout>
    );
}