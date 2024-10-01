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

const MainMenu = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div
            className={`mm-striped-bg bg-gray-100 w-full h-screen fixed ${
                fadeIn ? "fade-in" : ""
            }`}
        >
            {/* Contenido principal del menú */}
            <div className="flex flex-wrap px-32 pt-10">
                <Link to={"/about-me"} className="w-1/4 p-2">
                    <DiscChannel />
                </Link>
                <Link to={"/technologies-view"} className="w-1/4 p-2">
                    <TechnologiesChannel />
                </Link>
                <Link
                    to={"https://www.linkedin.com/in/tobiasechenique/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/4 p-2"
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
                    className="w-1/4 p-2"
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
                    className="w-1/4 p-2"
                >
                    <BannerChannel
                        image={starSvg}
                        legend={"Featured Project"}
                        classes={"animate-spin-slower"}
                    />
                </Link>
                <Link
                    to={"https://github.com/tobieche110/wii-portofolio"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/4 p-2"
                >
                    <CodeChannel />
                </Link>
                <div className="w-1/4 p-2">
                    <EmptyChannel />
                </div>
                <div className="w-1/4 p-2">
                    <EmptyChannel />
                </div>
                <div className="w-1/4 p-2">
                    <EmptyChannel />
                </div>
                <div className="w-1/4 p-2">
                    <EmptyChannel />
                </div>
                <div className="w-1/4 p-2">
                    <EmptyChannel />
                </div>
                <div className="w-1/4 p-2">
                    <EmptyChannel />
                </div>
            </div>

            {/* Footer */}
            <MmFooter />
        </div>
    );
};

export default MainMenu;
