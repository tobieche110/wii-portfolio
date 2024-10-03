import { useState, useRef } from "react";
import { RiDiscFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import avatar from "../assets/svgs/avatar.svg";

const DiscChannel = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    
    const isMdOrLarger = useMediaQuery({ minWidth: 768 });
    const isTallerThan720 = useMediaQuery({ minHeight: 720 });

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
            <div
                className="relative z-10 bg-orange-200 rounded-xl transparent-border hover:border-[#00c4ff] transition-border channel-height mt-1 flex flex-col items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Coloco el ícono del disco dentro del contenedor y detrás del fondo naranja */}
                <RiDiscFill
                    size={isMdOrLarger ? "7.6vw" : "150"}
                    className={`text-gray-400 absolute z-0 animate-spin ${
                        isMdOrLarger ? "md:ml-[-18.5vw] md:mt-[0.2vw]" : "top-[-50px] left-auto"
                    }`}
                    style={{ zIndex: 1 }} // Asegurar que esté detrás del contenido
                />

                {/* Fondo naranja */}
                <div className="absolute inset-0 bg-orange-200 rounded-xl z-10"></div>

                <div className="flex flex-col z-20 items-center overflow-hidden">
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="md:w-[6.5vw] w-20 rounded-full shadow-lg z-30 pt-1"
                    />
                    
                    {/* Renderizar el texto "About Tobias" solo si la altura de la pantalla es mayor a 720px */}
                    {isMdOrLarger && isTallerThan720 && (
                        <p className="font-serif font-bold md:text-base lg:text-base xl:text-xl text-lg text-center items-center justify-center mt-4 bg-white md:px-[3vw] px-5 rounded-full shadow-md z-30">
                            About Tobias
                        </p>
                    )}
                </div>

                {/* Tooltip */}
                {showTooltip && (
                    <div className="font-rodin absolute z-20 top-full mt-2 left-1/2 transform -translate-x-1/2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                        <p>About Me</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default DiscChannel;
