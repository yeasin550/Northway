

const AtGlance = () => {
    const sections = [
        { id: 1, title: "Course Duration", content: "This is a five-word text." },
        // { id: 2, title: "Section 2 Title", content: "Another example with five words." },
        // { id: 3, title: "Section 3 Title", content: "Here is yet another text." },
        // { id: 4, title: "Section 4 Title", content: "This section has five words." },
    ];

    return (
        <div className="md:px-12 py-10">
            <h2 className="text-4xl text-center font-bold mb-10 relative z-10">
                <span className="text-[#F6941E]">USA</span>  At a Glance
            </h2>
            <div className="md:w-11/12 w-full mx-auto grid grid-cols-1 md:grid-cols-4">
                {sections.map((section) => (
                    <div key={section.id} className=" p-4">
                        <div className="bg-white border border-gray-200 rounded-sm shadow-md transition-transform transform hover:scale-105 text-center">
                            <div className="bg-[#F6941E] text-white p-4">
                                <h3 className="text-md font-bold">Course Duration</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">4 Years (Bachelor’s)</p>
                                <p className="text-gray-700">2 Years (Master’s)</p>
                            </div>
                            <div className="bg-[#F6941E] text-white p-4">
                                <h3 className="text-md font-bold">Language Proficiency</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">IELTS- 6+, TOEFL-70+</p>
                                <p className="text-gray-700">Duolingo-90+, PTE-50+</p>
                            </div>
                            <div className="bg-[#F6941E] text-white p-4">
                                <h3 className="text-md font-bold">Air Ticket</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">100000 To 150000 (BDT)</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AtGlance;

