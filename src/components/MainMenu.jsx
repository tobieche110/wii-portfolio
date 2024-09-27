import EmptyChannel from "./EmptyChannel";
import OptionsSection from "./OptionsSection";
import DiscChannel from "./DiscChannel";
import BannerChannel from "./BannerChannel";
import githubSvg from "../assets/svgs/github.svg";
import linkedinSvg from "../assets/svgs/linkedin.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeChannel from "./CodeChannel";
import TechnologiesChannel from "./TechnologiesChannel";
import starSvg from "../assets/svgs/star.svg";

const MainMenu = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <>
            <div
                className={`h-screen w-full mm-striped-bg bg-gray-100 flex flex-col ${
                    fadeIn ? "fade-in" : ""
                }`}
            >
                <div className="flex-grow grid grid-cols-4 gap-4 mx-24 mt-16">
                    <Link to={"/about-me"}>
                        <DiscChannel />
                    </Link>
                    <Link to={"/technologies-view"}>
                        <TechnologiesChannel />
                    </Link>
                    <Link
                        to={"https://www.linkedin.com/in/tobiasechenique/"}
                        target="_blank"
                        rel="noopener noreferrer"
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
                    >
                        <BannerChannel
                            image={githubSvg}
                            legend={"Github Profile"}
                            classes={"animate-bounce "}
                        />
                    </Link>
                    <Link
                        to={
                            "https://github.com/tobieche110/algoritmo-paneles-acusticos"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
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
                    >
                        <CodeChannel />
                    </Link>
                    <EmptyChannel />
                    <EmptyChannel />
                    <EmptyChannel />
                    <EmptyChannel />
                    <EmptyChannel />
                    <EmptyChannel />
                </div>
                <div className="mt-auto">
                    <OptionsSection />
                </div>
            </div>
        </>
    );
};

export default MainMenu;
