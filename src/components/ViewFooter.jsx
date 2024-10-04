import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import startButton from "../assets/svgs/start-button.svg";
import wiiMenuButton from "../assets/svgs/wii-menu-button.svg";

const ViewFooter = () => {
    const handleClick = () => {
        window.open("/cv.pdf", "_blank");
    };

    // Is screen 600px
    const isMdOrLarger = useMediaQuery({ minHeight: 600 });

    return (
        <footer
            className={`fixed bottom-0 left-0 w-full flex justify-center items-center ec-striped-bg bg-gray-100 border-t-2 border-gray-700 ${
                isMdOrLarger ? "md:py-[3.3vw]" : "md:py-[4vh]"
            } py-8 md:gap-36 gap-2`}
        >
            <Link to={"/main-menu"}>
                <div className="rounded-full border-2 border-[#00C4FF]">
                    <img
                        src={wiiMenuButton}
                        alt="wiiMenuButton"
                        className={`object-contain ${isMdOrLarger ? "md:w-96" : "md:w-[50vh]"} w-48`}
                    />
                </div>
            </Link>
            <div
                className="rounded-full border-2 border-[#00C4FF] cursor-pointer"
                onClick={handleClick}
            >
                <img
                    src={startButton}
                    alt="startButton"
                    className={`object-contain ${isMdOrLarger ? "md:w-96" : "md:w-[50vh]"} w-48`}
                />
            </div>
        </footer>
    );
};

export default ViewFooter;
