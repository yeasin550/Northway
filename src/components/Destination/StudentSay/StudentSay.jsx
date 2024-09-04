import { FaStar } from "react-icons/fa";
import Ellipse1 from "../../../assets/Ellipse1.png"
import Ellipse2 from "../../../assets/Ellipse2.png"
import Ellipse3 from "../../../assets/Ellipse3.png"

const StudentSay = () => {
    return (
        <div className="py-12 md:px-14 md:w-11/12 mx-auto">
            <div>
                <h2 className="text-4xl font-bold mb-4 relative z-10">
                    <span className="text-[#F6941E]">Whats</span>   Our student say
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-12">

            <div className="space-y-4 p-8 border bg-white">
                <h1 className="text-5xl text-[#F6941E]">❝</h1>
                <p>We are the representatives of more than 30+ universities in Australian countries and our admission</p>
                <div className="flex items-center gap-2">
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                </div>
                <div className="flex items-center gap-3">
                    <img src={Ellipse1} alt="dsf" className="rounded-full"/>
                    <div>
                            <h1 className="font-bold">Lisa Dowen</h1>
                        <h1>Student</h1>
                    </div>
                </div>
            </div>
            <div className="space-y-4 p-8 border bg-white">
                <h1 className="text-5xl text-[#F6941E]">❝</h1>
                <p>We are the representatives of more than 30+ universities in Australian countries and our admission</p>
                <div className="flex items-center gap-2">
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                </div>
                <div className="flex items-center gap-3">
                    <img src={Ellipse2} alt="dsf" className="rounded-full"/>
                    <div>
                        <h1 className="font-bold">Lisa Dowen</h1>
                        <h1>Student</h1>
                    </div>
                </div>
            </div>
            <div className="space-y-4 p-8 border bg-white">
                <h1 className="text-5xl text-[#F6941E]">❝</h1>
                <p>We are the representatives of more than 30+ universities in Australian countries and our admission</p>
                <div className="flex items-center gap-2">
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                    <FaStar className="text-[#F6941E]" />
                </div>
                <div className="flex items-center gap-3">
                        <img src={Ellipse3} alt="dsf" className="rounded-full"/>
                    <div>
                        <h1 className="font-bold">Lisa Dowen</h1>
                        <h1>Student</h1>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default StudentSay;