import EmptyChannel from "./EmptyChannel";
import OptionsSection from "./OptionsSection";
import DiscChannel from "./DiscChannel";
import { BiSolidRightArrow } from "react-icons/bi";
import BannerChannel from "./BannerChannel";
import githubBanner from "../assets/images/github-banner.png";
import linkedinBanner from "../assets/images/linkedin-banner-2.jpeg";
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <div className="h-screen w-full mm-striped-bg bg-gray-100 flex flex-col">
            <div className="flex-grow grid grid-cols-4 gap-4 mx-24 mt-24 mb-4">
                <Link to={"/about-me"}>
                    <DiscChannel />
                </Link>
                <Link
                    to={"https://www.linkedin.com/in/tobiasechenique/"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BannerChannel
                        image={linkedinBanner}
                        imageAlt={"LinkedIn Banner"}
                    />
                </Link>
                <Link
                    to={"https://github.com/tobieche110"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BannerChannel
                        image={githubBanner}
                        imageAlt={"Github Banner"}
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
                <EmptyChannel />
            </div>
            <OptionsSection />
        </div>
    );
};

export default MainMenu;
