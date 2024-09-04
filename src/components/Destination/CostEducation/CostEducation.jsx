
import CostEducationImg from "../../../assets/CostEducation.png";

const CostEducation = () => {
    return (
        <div className="py-36 md:px-14">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center md:items-start mb-10">
                <div className="w-full md:w-1/2">
                    <img src={CostEducationImg} alt="Left Image" className="rounded-md" />
                </div>
                <div className="flex flex-col md:w-1/2 space-y-4 mt-7">
                    <h2 className="text-4xl font-bold mb-3"><span className="text-[#F6941E]">Cost</span> of education</h2> 
                    <p className="text-gray-700"> 
                        In the U.S., tuition fees very based on the state, the university funding model, and the students country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board, they have rendered an estimate of last years average tuition costs, which will roughly reflect the next few years.
                    </p>
                    <div className="ml-3 space-y-4">
                        <p className="flex items-center font-bold gap-2 text-[#F6941E]">
                            •  Total Expenses 41535
                        </p>
                        <p className="flex items-center gap-2">
                            •  Tuition Fees for one-year (Indicative) 25000
                        </p>
                        <p className="flex items-center gap-2">
                            •  Living and Accommodation 15000
                        </p>
                        <p className="flex items-center gap-2">
                            •  Airfare from India to USA 1000
                        </p>
                        <p className="flex items-center gap-2">
                            •  Visa Fees (Visa & SEVIS) 535
                        </p>
                   </div>
                  
                </div>
            </div>
        </div>
    );
};

export default CostEducation;