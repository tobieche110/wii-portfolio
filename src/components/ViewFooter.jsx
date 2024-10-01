import { Link } from "react-router-dom";
import startButton from "../assets/svgs/start-button.svg";
import wiiMenuButton from "../assets/svgs/wii-menu-button.svg";

const ViewFooter = () => {

    const handleClick = () => {
        window.open("/cv.pdf", "_blank");
    }

    return (
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center ec-striped-bg bg-gray-100 border-t-2 border-gray-700 py-16 gap-36">
            <Link to={"/main-menu"}>
                <div className="rounded-full border-2 border-[#00C4FF] w-96">
                    <img src={wiiMenuButton} alt="wiiMenuButton" className="object-cover"/>
                </div>
            </Link>
            <div className="rounded-full border-2 border-[#00C4FF] w-96 cursor-pointer" onClick={handleClick}>
                <img src={startButton} alt="startButton" className="object-cover"/>
            </div>
        </footer>
    );
};

export default ViewFooter;
