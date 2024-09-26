import { useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    return (
        <div className="flex items-center justify-center relative">
            <div className="mm-bar relative z-10 font-rodin pb-3 text-gray-400 text-5xl px-80">
                2 07 PM
            </div>
            {/* Línea curva azul */}
            {/* <div className="mm-bar absolute bottom-0 w-full h-10 border-t-4 rounded-b-full"></div> */}
        </div>
    );
};

export default Clock;
