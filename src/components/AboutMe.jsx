import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            {/* Information body */}
            <div className="h-full w-full">
                <p>Hi</p>
            </div>
            {/* Footer */}
            <footer className="flex justify-center items-center ec-striped-bg bg-gray-100 border-t-2 border-gray-700 py-16 gap-20">
                <Link to={"/main-menu"}>
                    <div className="rounded-full font-rodin text-5xl bg-gray-100 px-24 py-5 border-2 border-[#00C4FF]">
                        Wii Menu
                    </div>
                </Link>
                <div className="rounded-full font-rodin text-5xl bg-gray-100 px-36 py-5 border-2 border-[#00C4FF]">
                    Start
                </div>
            </footer>
        </div>
    );
};

export default AboutMe;
