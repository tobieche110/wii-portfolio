import EmptyChannel from "./EmptyChannel";
import OptionsSection from "./OptionsSection";
import DiscChannel from "./DiscChannel";
import BannerChannel from "./BannerChannel";
import githubBanner from "../assets/images/github-banner.png";
import linkedinBanner from "../assets/images/linkedin-banner-2.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TechnologiesChannel from "./TechnologiesChannel";

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
                    <TechnologiesChannel />
                    <Link
                        to={"https://www.linkedin.com/in/tobiasechenique/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BannerChannel
                            image={linkedinBanner}
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
                            image={githubBanner}
                            legend={"Github Profile"}
                            classes={"animate-bounce"}
                        />
                    </Link>
                    <EmptyChannel />
                    <EmptyChannel />
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
