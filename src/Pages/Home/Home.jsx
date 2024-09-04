

const Home = () => {
    return (
        <div className="min-h-screen mt-24">
            <h1 className="text-center text-purple-600 font-bold text-3xl">
                Welcome To Northway!!
            </h1>
            <a href="/study-destination">
                <button className="bg-[#F6941E] text-white mx-auto flex items-center gap-2 justify-center rounded-md w-48 py-3 font-semibold mt-5">
                    Go To Destination
                </button>
               </a>
        </div>
    );
};

export default Home;