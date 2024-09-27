import { useState, useEffect } from "react";
import reactIcon from "../assets/svgs/react.svg";
import javaIcon from "../assets/svgs/java.svg";
import pythonIcon from "../assets/svgs/python.svg";
import springIcon from "../assets/svgs/spring.svg";
import javascriptIcon from "../assets/svgs/js.svg";

const TechnologiesChannel = () => {
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

    const icons = [reactIcon, javaIcon, pythonIcon, springIcon, javascriptIcon];
    const [currentIconIndex, setCurrentIconIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 1000); // Cambia de icono cada 2 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
    }, [icons.length]);

    return (
        <div
            className="relative transparent-border hover:border-[#00c4ff] rounded-xl transition-border"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bg-gray-200 flex items-center justify-center font-mono rounded-lg w-full h-full overflow-hidden channel-height">
                <div className="text-7xl">
                    <img
                        src={icons[currentIconIndex]}
                        alt="Icon"
                        className="w-24 h-24"
                    />
                </div>
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="font-rodin absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                    <p>Technologies I Know</p>
                </div>
            )}
        </div>
    );
};

export default TechnologiesChannel;
