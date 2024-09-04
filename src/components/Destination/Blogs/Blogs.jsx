/* eslint-disable react/no-unknown-property */
import { FaLongArrowAltRight } from "react-icons/fa";


const Blogs = () => {
    return (
        <div className="py-12 md:px-14 md:w-11/12 mx-auto">
            <div className="text-center ">
                <h2 className="text-4xl font-bold mb-5 relative z-10">
                    Our Latest <span className="text-[#F6941E]">Blog</span>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            

            
          








            <button className="hover:bg-[#F6941E] border border-[#F6941E] hover:text-white flex items-center gap-2 justify-center rounded-sm w-48 mx-auto py-2 font-bold mt-8">
                Browse More Blog
                <FaLongArrowAltRight />

            </button>
        </div>
    );
};

export default Blogs;