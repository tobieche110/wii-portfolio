import { RiDiscFill } from "react-icons/ri";



const DiscChannel = () => {
    return (
        <>
            <RiDiscFill  size={150} className="text-gray-400 absolute ml-[-4rem] mt-8" />
            <div className="relative z-10 ec-striped-bg bg-white rounded-lg channel-height px-9 border border-gray-400 flex items-center justify-center">
                <h2 className="text-4xl font-bold mb-2 text-gray-300">
                    Disc Channel
                </h2>
            </div>
        </>
    );
};

export default DiscChannel;
