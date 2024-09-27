import { Link } from "react-router-dom";

const ViewFooter = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center ec-striped-bg bg-gray-100 border-t-2 border-gray-700 py-16 gap-20">
            <Link to={"/main-menu"}>
                <div className="rounded-full font-rodin text-5xl bg-gray-100 px-24 py-5 border-2 border-[#00C4FF]">
                    Wii Menu
                </div>
            </Link>
            <div className="rounded-full font-rodin text-5xl bg-gray-100 px-36 py-5 border-2 border-[#00C4FF]">
                Start
            </div>
        </footer>
    );
};

export default ViewFooter;
