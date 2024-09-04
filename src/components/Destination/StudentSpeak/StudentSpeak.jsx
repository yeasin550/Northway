/* eslint-disable react/prop-types */
import { useState } from "react";
import studentSpeaks from "../../../assets/studentSpeaks.png";
import Rashmi from "../../../assets/Rashmi.jpeg";
import Kashfiya from "../../../assets/Kashfiya.jpeg";
import Elipes from "../../../assets/Elipes.png";
import { PlayCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const studentData = [
    {
        name: 'Rashmi Borah',
        university: 'Northeastern University, Boston',
        image: Rashmi, 
    },
    {
        name: 'Kashfiya Ali',
        university: 'Harvard University, Cambridge',
        image: Kashfiya, 
    },
    {
        name: 'Jane Smith',
        university: 'MIT, Cambridge',
        image: Elipes, 
    },
    {
        name: 'Sunny Smith',
        university: 'MIT, Cambridge',
        image: "https://img.freepik.com/free-photo/sunny-lifestyle-image-pretty-brunette-girl-red-casual-pullover-skirt-making-pictures-by-photo-camera-sunny-park-walking-city-garden-looking-sightseens_273443-1664.jpg?t=st=1725452216~exp=1725455816~hmac=0732777c1dfa379c802c0d492a3c7232972aa71ae8526962cd7a784c06f2b031&w=740", 
    },
    {
        name: 'Kaily Jamin',
        university: 'MIT, Cambridge',
        image: "https://img.freepik.com/free-photo/cheerful-woman-with-binoculars_23-2147654303.jpg?t=st=1725452288~exp=1725455888~hmac=69126d1208da3b7df57a4bd50a24e0b69041e8b3f0b1e1e50fa7538450703ea0&w=740", 
    },
    {
        name: 'Jeni Jemi',
        university: 'MIT, Cambridge',
        image: "https://img.freepik.com/free-photo/woman-taking-photo-nature_23-2147828052.jpg?t=st=1725452282~exp=1725455882~hmac=82fc63567455372d8f595f11d01e47723d81ba87c8d7993e1fb70b9b7b78489a&w=740", 
    }
];

const StudentCard = ({ student, isActive }) => (
    <div className={`bg-white p-4 rounded-lg shadow-md transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-95'}`}>
        <div className="relative">
            <img src={student.image} alt={student.name} className="w-full h-56 object-cover rounded-md" />
            <PlayCircleIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 cursor-pointer" />
        </div>
        <h3 className="text-xl font-bold mt-2">{student.name}</h3>
        <p className="text-sm text-gray-600">{student.university}</p>
    </div>
);

const StudentSpeak = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % studentData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + studentData.length) % studentData.length);
    };

    return (
        <div className="mb-[500px] md:mb-64">
            <div className="relative mt-24 h-96 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: `url(${studentSpeaks})` }}>
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative px-20 mb-36 text-center w-7/12 mx-auto">
                    <h1 className="text-white text-4xl font-bold">Students <span className="text-[#F6941E]">Speak</span></h1>
                    <p className="text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>

            <div className="relative flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 absolute mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset) % studentData.length;
                            const isActive = offset === 1; // Highlight the middle card
                            return <StudentCard key={index} student={studentData[index]} isActive={isActive} />;
                        })}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={prevSlide}
                            className="bg-gray-200 p-2 rounded-full mr-4 hover:bg-gray-300"
                        >
                            <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="bg-orange-500 p-2 rounded-full text-white hover:bg-orange-600"
                        >
                            <ChevronRightIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default StudentSpeak;
