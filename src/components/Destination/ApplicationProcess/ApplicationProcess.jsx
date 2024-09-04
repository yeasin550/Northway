/* eslint-disable react/prop-types */

import { Newspaper, Monitor, Search, FileText, GraduationCap, Layout, GitMerge, CreditCard } from 'lucide-react';
// import { PiGitMergeDuotone } from 'react-icons/pi';

const steps = [
    { icon: Newspaper, text: "Clients profile review" },
    { icon: Monitor, text: "Onboarding meeting" },
    { icon: Search, text: "University search" },
    { icon: FileText, text: "Statement of purpose,cv review and edit" },
    { icon: GraduationCap, text: "University Shortlist" },
    { icon: Layout, text: "University application" },
    { icon: GitMerge, text: "Arranging mock interview" },
    { icon: CreditCard, text: "Visa app for submission" },
    { icon: FileText, text: "Cv review and edit" },
];

const ProcessStep = ({ icon: Icon, text, isLast }) => (
    <div className="flex flex-col items-center">
        <div className="relative">
            <div className="w-[80px] h-[80px] rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center bg-white">
                <Icon className="w-9 h-9 text-gray-600" />
            </div>
            {!isLast && (
                <div className="absolute top-1/2 left-full w-full border-t-2 border-dashed border-gray-500"></div>
            )}
        </div>
        <div className="mt-4 text-center border border-gray-400 p-3 text-sm w-32 font-bold">{text}</div>
    </div>
);



const ApplicationProcess = () => {

    return (
        <div className="py-12 md:px-20">

            <div className="bg-gray-100 py-8 font-sans px-12">
                <h1 className="text-4xl font-bold text-center mb-2">
                    <span className="text-orange-500">Our</span> Application Process
                </h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex flex-wrap justify-left gap-14">
                    {steps?.map((step, index) => (
                        <ProcessStep
                            key={index}
                            icon={step.icon}
                            text={step.text}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
                {/* <div className="flex flex-wrap justify-left gap-14">
                    {steps.slice(5,8).map((step, index) => (
                        <ProcessStep
                            key={index}
                            icon={step.icon}
                            text={step.text}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default ApplicationProcess;