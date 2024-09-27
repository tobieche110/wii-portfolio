import { useState, useEffect } from "react";
import css from "../assets/svgs/css.svg";
import html from "../assets/svgs/html.svg";
import javascript from "../assets/svgs/js.svg";
import react from "../assets/svgs/react.svg";
import tailwindcss from "../assets/svgs/tailwind.svg";
import java from "../assets/svgs/java.svg";
import docker from "../assets/svgs/docker.svg";
import mysql from "../assets/svgs/mysql.svg";
import postgres from "../assets/svgs/postgres.svg";
import python from "../assets/svgs/python.svg";
import rails from "../assets/svgs/rails.svg";
import spring from "../assets/svgs/spring.svg";

const TechnologiesChannel = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);

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

    useEffect(() => {
        const steps = 18;
        const interval = 500;
        const displayTime = 2000;

        const intervalId = setInterval(
            () => {
                setCurrentStep((prevStep) => {
                    if (prevStep < steps) {
                        return prevStep + 1;
                    } else {
                        return 0; // Reinicia la animación después del displayTime
                    }
                });
            },
            currentStep === 0 ? displayTime : interval
        ); // Reiniciar después del displayTime

        return () => clearInterval(intervalId);
    }, [currentStep]);

    return (
        <div>
            <div
                className="relative transparent-border hover:border-[#00c4ff] rounded-xl transition-border"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="bg-gray-700 rounded-lg w-full h-full overflow-hidden channel-height">
                    <div
                        className={`flex flex-col object-cover w-full h-full font-mono text-white justify-center items-center`}
                    >
                        {/* Programing Languages and Tools */}
                        <h2
                            className={`transition-opacity duration-700 ${
                                currentStep >= 1 ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            Programming Languages and Tools:
                        </h2>
                        <div className="flex space-x-2">
                            <img
                                src={html}
                                alt="HTML"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 2
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={css}
                                alt="CSS"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 3
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={javascript}
                                alt="JavaScript"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 4
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={java}
                                alt="Java"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 5
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={python}
                                alt="Python"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 6
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        </div>

                        {/* Frameworks and Libraries */}
                        <h1
                            className={`transition-opacity duration-700 ${
                                currentStep >= 7 ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            Frameworks and Libraries:
                        </h1>
                        <div className="flex space-x-2">
                            <img
                                src={react}
                                alt="React"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 8
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={rails}
                                alt="Ruby on Rails"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 9
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={spring}
                                alt="Spring"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 10
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        </div>

                        {/* Database Management Systems */}
                        <h3
                            className={`transition-opacity duration-700 ${
                                currentStep >= 11 ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            Database Management Systems:
                        </h3>
                        <div className="flex space-x-2">
                            <img
                                src={mysql}
                                alt="MySQL"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 12
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={postgres}
                                alt="PostgreSQL"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 13
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        </div>

                        {/* Other Tools */}
                        <h4
                            className={`transition-opacity duration-700 ${
                                currentStep >= 14 ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            Other Tools:
                        </h4>
                        <div className="flex space-x-2">
                            <img
                                src={docker}
                                alt="Docker"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 15
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                            <img
                                src={tailwindcss}
                                alt="Tailwind CSS"
                                className={`w-7 transition-opacity duration-700 ${
                                    currentStep >= 16
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        </div>
                    </div>
                </div>

                {/* Tooltip */}
                {showTooltip && (
                    <div className="font-rodin absolute left-1/2 transform -translate-x-1/2 mt-2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                        <p>Technologies I Know</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TechnologiesChannel;
