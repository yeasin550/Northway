/* eslint-disable react/no-unknown-property */
import { FaLongArrowAltRight, FaRegUser } from "react-icons/fa";
import Blog1 from "../../../assets/Blog1.png"
import Blog2 from "../../../assets/Blog2.png"
import Blog3 from "../../../assets/Blog3.png"
import { MdDateRange } from "react-icons/md";

const Blogs = () => {
    return (
        <div className="bg-[#F5F2EF]">
        <div className="py-16 md:px-14 md:w-11/12 mx-auto">
            <div className="text-center w-6/12 mx-auto mb-5">
                <h2 className="text-4xl font-bold mb-5 relative z-10">
                    Our Latest <span className="text-[#F6941E]">Blog</span>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            

            
          

                <div className="mx-auto p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* CARD 1 */}
                        <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
                            <div className="relative">
                                <img className="w-full" src={Blog1} alt="Sunset in the mountains" />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-900 opacity-25"></div>
                            </div>
                            <div className="px-6 py-4 mb-auto space-y-3">
                                <h1 className="flex items-center gap-2">
                                    <MdDateRange /> July 24, 2024
                                </h1>
                                <a
                                    href="#"
                                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                                >
                                    Emotional Intelligence in Education Building
                                </a>
                            </div>
                            <div className="px-6 py-3 flex items-center justify-between">
                                <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                                    <FaRegUser />
                                    <span className="ml-1">Back Theme</span>
                                </span>
                                <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                                    <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                        />
                                    </svg>
                                    <span className="ml-1">39 Comments</span>
                                </span>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
                            <div className="relative">
                                <img className="w-full" src={Blog2} alt="Sunset in the mountains" />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-900 opacity-25"></div>
                            </div>
                            <div className="px-6 py-4 mb-auto space-y-3">
                                <h1 className="flex items-center gap-2">
                                    <MdDateRange /> July 24, 2024
                                </h1>
                                <a
                                    href="#"
                                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                                >
                                    Emotional Intelligence in Education Building
                                </a>
                            </div>
                            <div className="px-6 py-3 flex items-center justify-between">
                                <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                                    <FaRegUser />
                                    <span className="ml-1">Back Theme</span>
                                </span>
                                <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                                    <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                        />
                                    </svg>
                                    <span className="ml-1">0 Comments</span>
                                </span>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
                            <div className="relative">
                                <img className="w-full" src={Blog3} alt="Sunset in the mountains" />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 hover:bg-gray-900 opacity-25"></div>
                            </div>
                            <div className="px-6 py-4 mb-auto space-y-3">
                                <h1 className="flex items-center gap-2">
                                    <MdDateRange /> July 24, 2024
                                </h1>
                                <a
                                    href="#"
                                    className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
                                >
                                    Emotional Intelligence in Education Building
                                </a>
                            </div>
                            <div className="px-6 py-3 flex items-center justify-between">
                                <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                                    <FaRegUser />
                                    <span className="ml-1">Back Theme</span>
                                </span>
                                <span className="py-1 text-xs font-regular text-gray-900 flex items-center">
                                    <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                        />
                                    </svg>
                                    <span className="ml-1">9 Comments</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>





            <button className="hover:bg-[#F6941E] border border-[#F6941E] hover:text-white flex items-center gap-2 justify-center rounded-sm w-48 mx-auto py-2 font-bold mt-8">
                Browse More Blog
                <FaLongArrowAltRight />

            </button>
        </div>
        </div>
    );
};

export default Blogs;