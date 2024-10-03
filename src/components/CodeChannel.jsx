import { useState } from "react";

const CodeChannel = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);

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
        <div
            className="relative transparent-border hover:border-[#00c4ff] rounded-xl transition-border"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bg-teal-800 text-white text-center flex items-center justify-center font-mono rounded-lg w-full h-full overflow-hidden channel-height">
                <div className="typewriter md:text-[4vw] text-7xl">
                    <span>{"</>"}</span>
                </div>
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="font-rodin absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                    <p>View the source code</p>
                </div>
            )}
        </div>
    );
};

export default CodeChannel;
