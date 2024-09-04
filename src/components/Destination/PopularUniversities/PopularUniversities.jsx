
import ConnecticutImage from '../../../assets/Connecticut.png';
import ArizonaImage from '../../../assets/Arizona.png';
import CaliforniaImage from '../../../assets/California.png';
import University from '../../../assets/university.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const PopularUniversities = () => {
    const universities = [
        {
            id: 1,
            image: ConnecticutImage,
            title: 'University of Connecticut, Connecticut (Public Ivy)',
        },
        {
            id: 2,
            image: ArizonaImage,
            title: 'Arizona State University, Phoenix, Arizona',
        },
        {
            id: 3,
            image: CaliforniaImage,
            title: 'University of California, Riverside, California',
        },
        {
            id: 4,
            image: CaliforniaImage,
            title: 'University of Florida, Gainesville, Florida',
        },
        {
            id: 5,
            image: ArizonaImage,
            title: 'University of Texas, Austin, Texas',
        },
        {
            id: 6,
            image: ConnecticutImage,
            title: 'University of Illinois, Urbana-Champaign, Illinois',
        },
    ];

    return (
        <div className="py-28 relative">
            {/* Background Image with Opacity */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${University})` }}
                >
                <div className="absolute inset-0 bg-black opacity-75"></div> 
            </div>

            <h2 className="text-4xl text-center font-bold mb-10 relative z-10 text-white">
                <span className="text-[#F6941E]">Popular</span> Universities
            </h2>
            <div className="md:w-11/12 w-full md:px-14 px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                {universities.map((uni) => (
                    <div key={uni.id} className="bg-white md:w-[350px] shadow-md text-center rounded-md py-10 px-4 transition-transform transform hover:scale-105">
                        <img
                            src={uni.image}
                            alt="University"
                            className="h-16 mx-auto mb-4"
                        />
                        <h3 className="text-center font-bold text-gray-800">
                            {uni.title}
                        </h3>
                    </div>
                ))}
            </div>
            <button className="hover:bg-[#F6941E] border border-white text-white flex items-center gap-2 justify-center relative z-10 mx-auto duration-500 rounded-sm w-40 py-2 font-bold mt-8">
                View More
                <FaLongArrowAltRight />

            </button>
        </div>
    );
};

export default PopularUniversities;
