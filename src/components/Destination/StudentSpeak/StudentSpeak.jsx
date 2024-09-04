import studentSpeaks from "../../../assets/studentSpeaks.png";




const StudentSpeak = () => {
    return (
        <div>
            <div className="relative h-64 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: `url(${studentSpeaks})` }}>
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative px-20 text-center">
                    <h1 className="text-white text-4xl font-bold">Students <span className="text-[#F6941E]">Speak</span>   </h1>
                    <p className="text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
};

export default StudentSpeak;