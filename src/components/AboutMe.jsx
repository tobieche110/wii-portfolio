import { useRef } from "react";
import ViewFooter from "./ViewFooter";
import avatarSvg from "../assets/svgs/avatar.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AboutMe = () => {
    const avatarRef = useRef();
    const frameRef = useRef();
    const textRef = useRef();
    const startRef = useRef();

    useGSAP(() => {
        gsap.from(avatarRef.current, {
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
        });

        gsap.to(frameRef.current, {
            rotation: 360,
            repeat: -1,
            duration: 2,
            ease: "linear",
            transformOrigin: "50% 50%",
        });

        gsap.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5,
            stagger: 0.3,
            ease: "power2.out",
        });

        gsap.from(startRef.current, {
            opacity: 0.2,
            scale: 1.5,
            duration: 0.2,
            repeat: -1,
            yoyo: true,
            ease: "power.out",
            delay: 0.8,
        });
    });

    return (
        <div className="flex flex-col h-screen w-full bg-orange-200">
            <div className="flex flex-col flex-grow justify-center items-center p-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg shadow-lg h-full pb-72">
                <div className="flex justify-center items-center mb-8 relative">
                    {/* Marco giratorio */}
                    <div
                        ref={frameRef}
                        className="absolute w-72 h-72 rounded-full border-t-8 border-orange-600 flex justify-center items-center"
                    >
                        {" "}
                    </div>
                    {/* Imagen estática dentro del marco */}
                    <img
                        src={avatarSvg}
                        alt="avatar"
                        className="w-64 md:w-84 rounded-full shadow-lg"
                        ref={avatarRef}
                    />
                </div>

                <div
                    className="font-serif font-semibold text-gray-700 md:ml-10 text-center px-32"
                    ref={textRef}
                >
                    <p className="text-4xl mb-6 leading-relaxed">
                        Hi! My name is{" "}
                        <span className="text-orange-600 animate-pulse">
                            Tobias Echenique
                        </span>
                        , and I am from Mendoza, Argentina.
                    </p>
                    <p className="text-2xl mb-6 leading-relaxed">
                        Since high school, I've been studying Software
                        Development and found a passion for it.
                    </p>
                    <p className="text-2xl mb-6 leading-relaxed">
                        I excel at solving complex tasks, both in{" "}
                        <span className="text-blue-600">Frontend</span> and{" "}
                        <span className="text-blue-600">Backend</span>{" "}
                        development. I enjoy learning new technologies, and I
                        adapt quickly to new trends and work environments.
                    </p>
                    <p className="text-3xl">
                        I invite you to press{"  "}
                        <span
                            className="text-slate-500 font-rodin text-4xl font-bold animate-pulse"
                            ref={startRef}
                        >
                            "Start"
                        </span>
                        {"  "}
                        to view my Resume.
                    </p>
                </div>
            </div>

            <div className="mt-auto">
                <ViewFooter />
            </div>
        </div>
    );
};

export default AboutMe;
