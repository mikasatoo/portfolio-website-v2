"use client"

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
    const [key, setKey] = useState(0);
    const [isAwardsOpen, setIsAwardsOpen] = useState(false);
    const [isExtracurrsOpen, setIsExtracurrsOpen] = useState(false);
        
    useEffect(() => {
        setKey((prev) => prev + 1);
    }, []);

    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-8 md:gap-10 lg:gap-12 font-[family-name:var(--font-geist-mono)] text-gray-700 items-start md:items-center">
                <h1 className="text-3xl text-black font-bold lg:text-center">Education</h1>
                
                {/* Degree deets */}
                <motion.div 
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}  
                    className="bg-stone-50 flex flex-col gap-2 max-w-220 2xl:max-w-280 p-4 md:p-8 rounded-3xl -rotate-2 shadow-md border-solid border-2 border-gray-700 items-center justify-items-start"
                >
                    <h2 className="text-lg font-bold mb-2 md:mb-4 text-black text-center">Bachelor of Engineering (Honours)</h2>

                    <div className="grid grid-cols-[80px_180px] md:grid-cols-[120px_420px] gap-4 items-center justify-center">
                        <p className="text-sm text-end">Majoring in:</p>
                        <p className="w-2/3 font-semibold w-full text-black text-center">Chemical and Environmental Engineering</p>

                        <p className="text-sm text-end">With:</p>
                        <p className="w-2/3 font-semibold w-full text-black text-center">Honours Class I (6.4 GPA)</p>

                        <p className="text-sm text-end">From:</p>
                        <p className="w-2/3 font-semibold w-full text-black text-center">The University of Queensland</p>

                        <p className="text-sm text-end">Graduated:</p>
                        <p className="w-2/3 font-semibold w-full text-black text-center">July 2022</p>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 mt-2 md:mt-4 w-full max-w-240 items-start justify-center">
                    {/* Awards */}
                    <div className="flex flex-col gap-4 md:gap-6 items-start w-full md:w-1/2">
                        <div 
                            className="flex flex-row gap-3 items-center justify-center cursor-pointer" 
                            onClick={() => setIsAwardsOpen(!isAwardsOpen)}
                        >
                            <Image
                                src="/down-arrow.png"
                                alt="Down arrow"
                                width={24}
                                height={24}
                                className={`transform ${isAwardsOpen ? "" : "-rotate-90"}`}
                            />
                            <h2 className="text-lg font-bold">Awards & Achievements</h2>
                            <Image
                                src="/medal.png"
                                alt="Medal"
                                width={24}
                                height={24}
                            />
                        </div>

                        {isAwardsOpen && (
                            <div className="flex flex-col gap-6 ml-9">
                                <ListEntry name="Class of 2022 UQ Future Leader" institution="University of Queensland" year="2022" description="Recognises final-year graduating students who have gone beyond their studies to make a positive impact on campus and within their community." />
                                <ListEntry name="UQ Employability Award" institution="University of Queensland" year="2022" description="Awarded to students who have participated in (and reflected upon) a range of activities spanning work experience, volunteering, and extracurricular programs." />
                                <ListEntry name="EAIT Scholar" institution="University of Queensland" year="2019 - 2020" description="Participated in the EAIT (Engineering, Architecture, and Information Technology) Scholars program, as part of the top 5% (by GPA) of the engineering cohort." />
                                <ListEntry name="Dean's Commendation for Academic Excellence" institution="University of Queensland" year="2018 - 2021" description="Achieved a GPA of over 6.6 in semesters across 2018 to 2021." />
                                <ListEntry name="Dux of the College" institution="San Sisto College" year="2017" description="" />
                                <ListEntry name="Queensland Regional Titration Competition: Venue Winner UQ" institution="Royal Australian Chemical Institute" year="2017" description="" />
                            </div>
                        )}
                    </div>
                    
                    {/* Extracurriculars */}
                    <div className="flex flex-col gap-4 md:gap-6 items-start w-full md:w-1/2">
                        <div 
                            className="flex flex-row gap-3 items-center justify-center cursor-pointer" 
                            onClick={() => setIsExtracurrsOpen(!isExtracurrsOpen)}
                        >
                            <Image
                                src="/down-arrow.png"
                                alt="Down arrow"
                                width={24}
                                height={24}
                                className={`transform ${isExtracurrsOpen ? "" : "-rotate-90"}`}
                            />
                            <h2 className="text-lg font-bold">Extracurriculars</h2>
                            <Image
                                src="/student.png"
                                alt="Student raising hand"
                                width={24}
                                height={24}
                            />
                        </div>

                        {isExtracurrsOpen && (
                            <div className="flex flex-col gap-6 ml-9">
                                <ListEntry name="Academic Officer" institution="UQ Chemical Engineering Student Society (ChESS)" year="Nov 2020 - Oct 2021" description="Organised technical seminars, debates, and academic information sessions." />
                                <ListEntry name="Vice President" institution="UQ Student Energy Network (SEN)" year="Dec 2019 - Nov 2020" description="Organised events and sponsorships related to the energy industry." />
                                <ListEntry name="Secretary" institution="UQ Student Energy Network (SEN)" year="Dec 2018 - Dec 2019" description="Ran meetings and events, and also managed memberships and communications." />
                                <ListEntry name="UQ Women in Engineering Student Leader" institution="University of Queensland" year="Dec 2018 - Dec 2019" description="Participated in events/programs to encourage and support female engineering students (both prospective and current)." />
                                <ListEntry name="Humanitarian Design Summit Participant" institution="Engineers Without Borders (EWB) Australia" year="Jun - Jul 2019" description="Participated in a 2-week educational study tour in Nepal, learning about human-centered design within developing communities." />
                                <ListEntry name="UQ Science and Engineering Challenge Volunteer" institution="University of Queensland" year="Feb - Mar 2019" description="Supervised and assisted high school students in completing engineering-inspired activities during the 3-day event." />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

type ListEntryInputs = {
    name: string;
    institution: string;
    year: string;
    description: string;
}

function ListEntry({name, institution, year, description}: ListEntryInputs) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{institution}, {year}</p>
            <p className="text-sm text-gray-700 mt-1 lg:text-justify">{description}</p>
        </div>
    )
}