import { Link } from "react-router-dom";
import ViewFooter from "./ViewFooter";

const AboutMe = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            {/* Information body */}
            <div className="h-full w-full">
                <p>Hi</p>
            </div>
            {/* Footer */}
            <ViewFooter />
        </div>
    );
};

export default AboutMe;
