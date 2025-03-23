"use client"

import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Education() {
    const [key, setKey] = useState(0);
        
    useEffect(() => {
        setKey((prev) => prev + 1);
    }, []);

    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-8 md:gap-10 lg:gap-12 2xl:gap-12 font-[family-name:var(--font-geist-mono)] text-gray-700 items-start md:items-center">
                <h1 className="text-3xl text-black font-bold lg:text-center">Education</h1>
                
                {/* Degree deets */}
                <motion.div 
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}  
                    className="bg-stone-50 flex flex-col gap-2 max-w-220 2xl:max-w-280 p-4 md:p-8 rounded-3xl -rotate-2 shadow-md border-solid border-2 border-black items-center justify-items-start"
                >
                    <h2 className="text-lg font-bold mb-2 md:mb-4 text-center">Bachelor of Engineering (Honours)</h2>

                    <div className="grid grid-cols-[80px_180px] md:grid-cols-[120px_420px] gap-4 items-center justify-center">
                        <p className="text-sm text-end">Majoring in:</p>
                        <p className="w-2/3 font-semibold w-full text-center">Chemical and Environmental Engineering</p>

                        <p className="text-sm text-end">With:</p>
                        <p className="w-2/3 font-semibold w-full text-center">Honours Class I (6.4 GPA)</p>

                        <p className="text-sm text-end">From:</p>
                        <p className="w-2/3 font-semibold w-full text-center">The University of Queensland</p>

                        <p className="text-sm text-end">Graduated:</p>
                        <p className="w-2/3 font-semibold w-full text-center">July 2022</p>
                    </div>
                </motion.div>

            </div>
        </Layout>
    );
}
