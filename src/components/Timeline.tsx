"use client";
import { motion } from "framer-motion";

export type TimelineItemInputs = {
    title: string;
    company: string,
    date: string;
    description: string;
    isLeft?: boolean;
}

export function TimelineItem({ title, company, date, description, isLeft }: TimelineItemInputs) {
    return (
        <div className={`relative flex items-center w-full md:max-w-400 lg:max-w-240 2xl:max-w-280 my-2 ${isLeft ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute lg:left-1/2"
            >
                <div className="w-6 h-6 bg-turquoise rounded-full" />
            </motion.div>
                        
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`relative w-full max-w-lg lg:max-w-sm 2xl:max-w-md p-4 bg-white shadow-lg rounded-xl ml-8 ${isLeft ? "lg:mr-3 2xl:mr-8 2xl:ml-0" : "2xl:ml-8 2xl:mr-0"}`}
            >
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="text-md">{company}</h4>
                <p className="mt-2 text-sm text-gray-500">{date}</p>
                <p className="mt-2 text-sm text-gray-700">
                    {description.split("\n").map((line, index) => (
                        <span key={index}>{line}<br /></span>
                    ))}
                </p>
            </motion.div>
        </div>
    );
};

export function Timeline({ items }: { items: TimelineItemInputs[] }) {
    return (
    <div className="relative flex flex-col items-center w-full gap-6 lg:gap-2">
        <div className="bg-turquoise absolute place-self-start ml-2 lg:left-1/2 w-2 rounded-lg h-full" />
        {items.map((item, index) => (
            <TimelineItem key={index} {...item} isLeft={index % 2 != 0} />
        ))}
    </div>
  );
};
