import Layout from "@/components/Layout";
import { Timeline, TimelineItemInputs } from "@/components/Timeline";

const timelineItems: TimelineItemInputs[] = [
    { 
        title: "Graduate Software Engineer", 
        company:"Suncorp Bank", 
        date: "Jan 2024 - Present", 
        description: "Currently working in the ForgeRock (identity and access management) team, gaining experience in Java development and building test automation tools using TypeScript and Golang.\n\nPreviously worked in the Platform Engineering chapter and gained skills in observability, IaC, and CI/CD - working with Jenkins, Kubernetes, OpenShift, AWS, Grafana, Terraform, and Ansible." 
    },
    { 
        title: "Self-taught Software Developer", 
        company: "Sabbatical",
        date: "May 2023 - Jan 2024", 
        description: "Learnt the fundamentals of web development and built and deployed several projects.\n\nGained experience with: Git, JavaScript, TypeScript, React, Node, Express, SQL and NoSQL databases, and Python." 
    },
    { 
        title: "Consultant", 
        company: "Energetics",
        date: "Jan - Apr 2023", 
        description: "Worked on diverse projects within the climate and energy space - performed research, data analysis, and report writing." 
    },
    { 
        title: "Undergraduate Engineer", 
        company: "Santos",
        date: "Nov 2020 - Jul 2022", 
        description: "Developed a new system to automate workflow of well planning information.\n\nWorked on optimisation of tools such as well drilling programs and emissions reporting dashboards. Gained skills in Excel, VBA, SQL, and Spotfire." 
    },
    { 
        title: "Engineering Intern", 
        company: "Wood",
        date: "Aug - Nov 2020", 
        description: "Performed Excel spreadsheet automation using VBA for projects in the integrity engineering space." 
    },
    { 
        title: "Research Assistant", 
        company: "UQ Pyrometallurgy Innovation Centre",
        date: "Nov 2019 - Aug 2020", 
        description: "Completed a research program investigating the recycling of waste electronics using pyrometallurgical processes." 
    },
    { 
        title: "Academic Tutor", 
        company: "University of Queensland",
        date: "Jul - Dec 2019", 
        description: "Led weekly tutorial sessions for the first-year engineering thermodynamics course.\n\nHelped improve course delivery and content as part of a student-staff partnership program."
    },
    { 
        title: "Primary and High School Tutor", 
        company: "Private",
        date: "Feb 2017 - Jun 2020", 
        description: "Tutored primary and high school students in mathematics."
    },
    { 
        title: "Hospitality Roles", 
        company: "McDonald's, Crusty Devil Bakery",
        date: "Apr 2015 - Jan 2018", 
        description: "Customer service, teamwork, you know how it is."
    },
];

export default function Experience() {
    return (
        <Layout bgColor="bg-butteryellow">
            <div className="flex flex-col h-full p-8 md:p-16 gap-10 2xl:gap-16 font-[family-name:var(--font-geist-mono)] text-gray-700">
                <h1 className="text-3xl text-black font-bold lg:text-center">My Experience</h1>
                
                <div className="flex justify-items-center items-center">
                    <Timeline items={timelineItems} />
                </div>
            </div>

            
        </Layout>
    );
}
