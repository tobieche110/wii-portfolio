import { useState } from "react";
import { IoWarningSharp } from "react-icons/io5";
import { PiMouseLeftClickFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const WarningMenu = () => {
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setFadeOut(true); // Activa la transición
        setTimeout(() => {
            navigate("/main-menu"); // Navega después de 1 segundo para permitir la transición
        }, 1000); // El tiempo de la animación CSS
    };

    return (
        <div
            className={`flex h-screen w-full bg-black ${
                fadeOut ? "fade-out" : ""
            }`}
        >
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-center">
                    <div className="text-8xl text-yellow-400">
                        <IoWarningSharp />
                    </div>
                    <div className="font-rodin font-black text-5xl text-white ml-4">
                        WARNING-HEALTH AND SAFETY
                    </div>
                </div>
                <div className="flex items-center mt-24">
                    <div className="font-rodin font-black text-3xl text-center text-white ml-4">
                        HI, MY NAME IS <i>TOBIAS ECHENIQUE</i>. I AM A SOFTWARE
                        DEVELOPER.
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <div className="font-rodin font-black text-3xl text-center text-white ml-4">
                        THIS IS MY PORTOFOLIO INSPIRED BY THE WII MAIN MENU.
                    </div>
                </div>
                <div className="flex items-center mt-4">
                    <div className="font-rodin font-black text-3xl text-center text-white ml-4">
                        FOR THE BEST EXPERIENCE, VIEW IT ON A DESKTOP.
                    </div>
                </div>

                <div className="flex items-center mt-16">
                    <div className="font-rodin font-black text-2xl text-center text-white ml-4">
                        You can check the code at
                    </div>
                </div>
                <div className="flex items-center mt-2">
                    <a
                        href="https://github.com/tobieche110/wii-portofolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-rodin font-black text-2xl text-blue-300 ml-4 hover:underline"
                    >
                        github.com/tobieche110/wii-portofolio
                    </a>
                </div>

                <div className="flex items-center mt-16">
                    <div className="font-rodin font-black text-4xl text-center text-white hover:underline animate-blink">
                        <div
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                        >
                            Click Here{" "}
                            <span className="inline-flex items-center">
                                <PiMouseLeftClickFill />
                            </span>{" "}
                            to continue
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarningMenu;
