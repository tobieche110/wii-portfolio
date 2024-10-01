import { useState } from "react";
import { RiDiscFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import avatar from "../assets/svgs/avatar.svg";

const DiscChannel = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const isMdOrLarger = useMediaQuery({ minWidth: 768 });

    const handleMouseEnter = () => {
        const timeoutId = setTimeout(() => {
            setShowTooltip(true);
        }, 250);
        setHoverTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setShowTooltip(false);
    };

    return (
        <>
            <RiDiscFill
                size={150}
                className={`text-gray-400 absolute md:ml-[-4rem] md:mt-8 animate-spin ${
                    isMdOrLarger ? "" : "top-[-10px] left-auto"
                }`}
            />

            <div
                className="relative z-10 bg-orange-200 rounded-xl transparent-border hover:border-[#00c4ff] transition-border channel-height px-9 mt-1 flex flex-col items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex flex-col items-center">
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="w-28 rounded-full border-4 border-white shadow-md"
                    />
                    <p className="font-serif font-bold md:text-lg xl:text-3xl text-2xl items-center justify-center mt-4 bg-white px-5 py-1 rounded-full shadow-md">
                        About Tobias
                    </p>
                </div>

                {/* Tooltip */}
                {showTooltip && (
                    <div className="font-rodin absolute z-10 top-full mt-2 left-1/2 transform -translate-x-1/2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                        <p>About Me</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default DiscChannel;
