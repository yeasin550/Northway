
import StudyUsaImg from "../../../assets/StudyUsa.png";
import CareersIndustry from "../../../assets/CareersIndustry.png";
import { FaStar } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const StudyUsa = () => {
    return (
        <div className="md:px-14 py-10 mt-5">
            {/* First Div */}
            <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center md:items-start mb-10">
                <div className="w-full md:w-1/2">
                    <img src={StudyUsaImg} alt="Left Image" className="rounded-md" />
               </div>
                <div className="flex flex-col md:w-1/2 space-y-4">
                    <h2 className="text-4xl font-bold mb-3">Why Study <span className="text-[#F6941E]">in USA?</span></h2>
                    <p className="text-gray-700">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.
                    </p>
                    <h3 className="text-lg font-semibold">Quick facts</h3>
                    <p className="flex items-center gap-2">
                        <FaStar className="text-[#F6941E]"/>
                        USA hosts more than a million international students
                    </p>
                    <p className="flex items-center gap-2">
                        <FaStar className="text-[#F6941E]"/>
                        Over 25% of world’s top 100 universities are in the USA
                    </p>
                    <p className="flex items-center gap-2">
                        <FaStar className="text-[#F6941E]"/>
                        Post-study stay back visas (OPT) up to 3 years for STEM programs
                    </p>
                    <p className="flex items-center gap-2">
                        <FaStar className="text-[#F6941E]"/>
                        Internships (CPT) up to 12 months while studying
                    </p>
                    <p className="flex items-center gap-2">
                        <FaStar className="text-[#F6941E]"/>
                        Merit Based & Need Based Scholarships
                    </p>
                    <button className="bg-[#F6941E] text-white flex items-center gap-2 justify-center rounded-sm w-40 py-2 font-bold mt-4">
                        See More
                        <FaLongArrowAltRight />

                    </button>
                </div>
            </div>
            {/* Second Div */}
            <div className="w-11/12 mx-auto gap-10 py-12 flex flex-col md:flex-row items-center md:items-start mb-10">
                <div className="flex flex-col md:w-1/2 space-y-4">
                    <h2 className="text-4xl font-bold mb-3"><span className="text-[#F6941E]">Careers</span> & Industry </h2>
                    <p className="text-gray-700 text-justify leading-relaxed">
                        One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance, and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers, and Marketing & Financial Managers. The standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income & wealth, health status, jobs and earnings, education & skills, and environmental quality.
                    </p>
                 
                    <button className="hover:bg-[#F6941E] border border-[#F6941E] hover:text-white flex items-center gap-2 justify-center rounded-sm w-40 py-2 font-bold mt-8">
                        Red More
                        <FaLongArrowAltRight />

                    </button>
                </div>
                <div className="w-full md:w-1/2 md:ml-12">
                    <img src={CareersIndustry} alt="Left Image" className="rounded-md" />
               </div>
          
            </div>

           
         
        </div>
    );
};

export default StudyUsa;