import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'; 
import logo from "../../assets/Logo.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="sticky top-0 bg-[#F5F5F5] z-50">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <NavLink to="/" className="">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>

                {/* Menu Items */}
                <div className="hidden md:flex space-x-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/study-destination"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Study Destination
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                {/* Enquire Now Button */}
                <div className="hidden md:block">                 
                    <NavLink
                        to="/explore"
                        className="bg-white border hover:text-white px-4 border-[#F8AF56] py-2 rounded-md hover:bg-[#F8AF56] transition duration-300 text-[#F8AF56]"
                    >
                        Enquire Now
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>

            {/* Responsive Menu Items */}
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 py-4 px-4 bg-white shadow-lg">
                    <NavLink
                        to="/"
                        exact
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : 'text-[#F8AF56]'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/study-destination"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Study Destination
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Gallery
                    </NavLink>
                    <NavLink
                        to="/blogs"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Blogs
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-800 hover:text-[#F8AF56] ${isActive ? 'font-bold text-[#F8AF56]' : ''}`
                        }
                    >
                        Contacts
                    </NavLink>
                    <NavLink
                        to="/explore"
                        className="bg-white border hover:text-white px-4 border-[#F8AF56] py-2 rounded-md hover:bg-[#F8AF56] transition duration-300 text-[#F8AF56]"
                    >
                        Enquire Now
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
