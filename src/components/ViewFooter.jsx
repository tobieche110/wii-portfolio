import { Link } from "react-router-dom";
import startButton from "../assets/svgs/start-button.svg";
import wiiMenuButton from "../assets/svgs/wii-menu-button.svg";

const ViewFooter = () => {

    const handleClick = () => {
        window.open("/cv.pdf", "_blank");
    }

    return (
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center ec-striped-bg bg-gray-100 border-t-2 border-gray-700 md:py-16 py-8 md:gap-36 gap-2">
            <Link to={"/main-menu"}>
                <div className="rounded-full border-2 border-[#00C4FF]">
                    <img src={wiiMenuButton} alt="wiiMenuButton" className="object-contain md:w-96 w-48"/>
                </div>
            </Link>
            <div className="rounded-full border-2 border-[#00C4FF] cursor-pointer" onClick={handleClick}>
                <img src={startButton} alt="startButton" className="object-contain md:w-96 w-48"/>
            </div>
        </footer>
    );
};

export default ViewFooter;
