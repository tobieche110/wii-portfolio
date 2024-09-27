import { useEffect, useState } from "react";

const BannerChannel = ({ image, legend, classes }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState("");

    const handleMouseEnter = () => {
        const timeoutId = setTimeout(() => {
            setShowTooltip(true);
        }, 250); // Esperar 250ms antes de mostrar el tooltip
        setHoverTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setShowTooltip(false);
    };

    useEffect(() => {
        if (legend === "LinkedIn Profile") {
            setBackgroundColor("bg-[#0077b5]");
        } else if (legend === "Github Profile") {
            setBackgroundColor("bg-[#24292e]");
        }
    }, []);

    return (
        <div
            className="relative transparent-border hover:border-[#00c4ff] rounded-xl transition-border"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${backgroundColor} rounded-lg w-full h-full overflow-hidden channel-height`}>
                <img
                    src={image}
                    alt={legend}
                    className={`object-cover w-full h-full ${classes}`}
                />
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="font-rodin absolute left-1/2 transform -translate-x-1/2 mt-2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                    {legend}
                </div>
            )}
        </div>
    );
};

export default BannerChannel;
