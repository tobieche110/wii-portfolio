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
import figma from "../assets/svgs/figma.svg";
import bootstrap from "../assets/svgs/bootstrap.svg";
import gsapSvg from "../assets/svgs/gsap.svg";
import ViewFooter from "./ViewFooter";

const TechnologiesView = () => {
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        const steps = 21;
        const interval = 300;
        const displayTime = 1000;

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
        <div className="bg-blue-950 w-full h-screen pt-10">
            <div
                className={`flex flex-col font-mono text-white md:text-4xl text-xl gap-4 justify-center items-center`}
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
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 2 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={css}
                        alt="CSS"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 3 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={javascript}
                        alt="JavaScript"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 4 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={java}
                        alt="Java"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 5 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={python}
                        alt="Python"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 6 ? "opacity-100" : "opacity-0"
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
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 8 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={rails}
                        alt="Ruby on Rails"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 9 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={spring}
                        alt="Spring"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 10 ? "opacity-100" : "opacity-0"
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
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 12 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={postgres}
                        alt="PostgreSQL"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 13 ? "opacity-100" : "opacity-0"
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
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 15 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={tailwindcss}
                        alt="Tailwind CSS"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 16 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={figma}
                        alt="Figma"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 17 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={bootstrap}
                        alt="Bootstrap"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 18 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <img
                        src={gsapSvg}
                        alt="GSAP"
                        className={`md:w-20 w-10 transition-opacity duration-700 ${
                            currentStep >= 19 ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
            </div>
            <ViewFooter />
        </div>
    );
};

export default TechnologiesView;
