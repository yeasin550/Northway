

const AtGlance = () => {
    const sections = [
        {
            id: 1,
            title1: "Course Duration",
            title2: "Language Proficiency",
            title3: "Air Ticket",
            content1: "4 Years (Bachelor’s)",
            content2: "2 Years (Masters)",
            content3: "IELTS- 6+, TOEFL-70+",
            content4: "Duolingo-90+, PTE-50+",
            content5: "100000 To 150000 (BDT)",
        },
        {
            id: 2,
            title1: "Intake",
            title2: "Tution Fee (Yearly)",
            title3: "Tution Fee (Yearly)",
            content1: "January, May,",
            content2: "September",
            content3: "10000 To 55000 (USD)",
            content4: "9-12 Months",
        },
        {
            id: 3,
            title1: "Application Fee",
            title2: "Living Cost (Yearly)",
            title3: "Part Time Work",
            content1: "40 To 200 (USD)",
            content2: "10000 To 18000 (USD)",
            content3: "Tution Fee (Yearly)",
            content4: "20 Hrs (per Week)",
            content5: "10000 To 18000 (USD)",
        },
        {
            id: 4,
            title1: "Requirements",
            title2: "Visa Application",
            title3: "Post Study Work Permit",
            content1: "GRE/GMAT + IELTS/TOEFL/PTE,",
            content2: "160(USD)",
            content3: "SEVIS Fee 350 (USD)",
            content4: "12 Month For All Programs",
            content5: "12 Month+ 24 Months Extension For STEM (Science, Tech, Engg & Maths"
        },
        
    ];

    return (
        <div className="md:px-10 py-10">
            <h2 className="text-4xl text-center font-bold mb-10 relative z-10">
                <span className="text-[#F6941E]">USA</span>  At a Glance
            </h2>
            <div className="md:w-11/12 w-full mx-auto grid grid-cols-1 md:grid-cols-4">
                {sections.map((section) => (
                    <div key={section.id} className=" p-4">
                        <div className="bg-white border border-gray-200 md:w-[280px] mx-auto rounded-sm shadow-md transition-transform transform hover:scale-105 text-center">
                            <div className="bg-[#F6941E] text-white p-4">
                                <h3 className="text-md font-bold">{section.title1}</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">{section.content1}</p>
                                <p className="text-gray-700">{section.content2}</p>
                            </div>
                            <div className="bg-[#F6941E] text-white p-4">
                                <h3 className="text-md font-bold">{section.title2}</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">{section.content3}</p>
                                <p className="text-gray-700">{section.content4}</p>
                            </div>
                            <div className="bg-[#F6941E] text-white p-4">
                                <h3 className="text-md font-bold">{section.title3}</h3>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700">{section.content4}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AtGlance;

