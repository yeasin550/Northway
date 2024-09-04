
import ConnecticutImage from '../../../assets/Connecticut.png';
import ArizonaImage from '../../../assets/Arizona.png';
import CaliforniaImage from '../../../assets/California.png';
import University from '../../../assets/university.png';

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
                <div className="absolute inset-0 bg-black opacity-75"></div> {/* Overlay with opacity */}
            </div>

            <h2 className="text-4xl text-center font-bold mb-10 relative z-10 text-white">
                <span className="text-[#F6941E]">Popular</span> Universities
            </h2>
            <div className="md:w-11/12 w-full md:px-14 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
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
        </div>
    );
};

export default PopularUniversities;
