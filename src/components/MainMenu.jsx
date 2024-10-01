import EmptyChannel from "./EmptyChannel";
import DiscChannel from "./DiscChannel";
import BannerChannel from "./BannerChannel";
import githubSvg from "../assets/svgs/github.svg";
import linkedinSvg from "../assets/svgs/linkedin.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeChannel from "./CodeChannel";
import TechnologiesChannel from "./TechnologiesChannel";
import starSvg from "../assets/svgs/star.svg";
import MmFooter from "./MmFooter";
import MmFooterMobile from "./MmFooterMobile";
import { useMediaQuery } from "react-responsive";

const MainMenu = () => {
    const [fadeIn, setFadeIn] = useState(false);
    // Detectar si la pantalla es md o más grande
    const isMdOrLarger = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <>
        <div
            className={`mm-striped-bg bg-gray-100 md:w-full md:h-screen md:fixed mb-20 ${
                fadeIn ? "fade-in" : ""
            }`}
        >
            {/* Contenido principal del menú */}
            <div className="md:flex flex-wrap xl:px-32 md:pt-4 p-3 pt-14 justify-center">
                <Link to={"/about-me"} className="md:w-1/4 md:p-2">
                    <DiscChannel />
                </Link>
                <Link to={"/technologies-view"} className="md:w-1/4 md:p-2">
                    <TechnologiesChannel />
                </Link>
                <Link
                    to={"https://www.linkedin.com/in/tobiasechenique/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-1/4 md:p-2"
                >
                    <BannerChannel
                        image={linkedinSvg}
                        legend={"LinkedIn Profile"}
                        classes={"animate-pulse"}
                    />
                </Link>
                <Link
                    to={"https://github.com/tobieche110"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-1/4 md:p-2"
                >
                    <BannerChannel
                        image={githubSvg}
                        legend={"Github Profile"}
                        classes={"animate-bounce"}
                    />
                </Link>
                <Link
                    to={
                        "https://github.com/tobieche110/algoritmo-paneles-acusticos"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-1/4 md:p-2"
                >
                    <BannerChannel
                        image={starSvg}
                        legend={"Featured Project"}
                        classes={"animate-spin-slower"}
                    />
                </Link>
                <Link
                    to={"https://github.com/tobieche110/wii-portfolio"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:w-1/4 md:p-2"
                >
                    <CodeChannel />
                </Link>
                {isMdOrLarger ? (
                    <>
                        <div className="md:w-1/4 md:p-2">
                            <EmptyChannel />
                        </div>
                        <div className="md:w-1/4 md:p-2">
                            <EmptyChannel />
                        </div>
                        <div className="md:w-1/4 md:p-2">
                            <EmptyChannel />
                        </div>
                        <div className="md:w-1/4 md:p-2">
                            <EmptyChannel />
                        </div>
                        <div className="md:w-1/4 md:p-2">
                            <EmptyChannel />
                        </div>
                        <div className="md:w-1/4 md:p-2">
                            <EmptyChannel />
                        </div>
                    </>
                ) : null}
            </div>

            {/* Footer */}
            <div className="block md:hidden">
                <MmFooterMobile />
            </div>
            <div className="hidden md:block">
                <MmFooter />
            </div>
        </div>
        </>
    );
};

export default MainMenu;
