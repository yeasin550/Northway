import banner from "../../../assets/Banner.jpeg";

const Study = () => {
    return (
        <div className="relative h-64 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="relative px-20 flex justify-between">
                <h1 className="text-white text-4xl font-bold">Study in USA</h1>
                <p className="text-white mt-2">Home / Study Destination / USA</p>
            </div>
        </div>
    );
};

export default Study;
