import { GrMail } from "react-icons/gr";
import { useEffect, useState } from "react";

const OptionsSection = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    // Get the current date and time and format them
    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "numeric",
                day: "numeric",
            });
            const formattedTime = date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
            });

            // Delete the comma before saving the date
            const cleanedDate = formattedDate.replace(/,/g, "");

            setCurrentDate(cleanedDate);
            setCurrentTime(formattedTime);
        };

        // Update the date and time immediately
        updateDateTime();

        // Set interval to update the time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative">
            {/* Left Line */}
            <div className="left-0 top-0 flex items-center">
                <div className="mm-left-bar"></div>
            </div>

            {/* Current Date and Time */}
            <div className="flex justify-between items-center bg-gray-300 pb-20 px-6">
                {/* Wii Button */}
                <div className="relative flex items-center">
                    <div className="absolute left-0 options-button-height w-28 bg-gray-200 ml-[-2rem]"></div>
                    <div className="relative z-9 bg-gray-200 p-4 rounded-full">
                        <section
                            className={`relative z-10 bg-gray-300 shadow-md rounded-full p-8 text-4xl text-gray-500 border-2 border-[#00C4FF]`}
                        >
                            Wii
                        </section>
                    </div>
                </div>

                {/* Current Date and Time */}
                <div className="mb-14 relative z-10">
                    <div className="mm-bar mm-striped-bg bg-gray-100 font-rodin pb-3 text-gray-400 text-5xl px-80">
                        {currentTime}
                    </div>
                    <div className="font-rodin text-4xl text-gray-500 text-center">
                        <strong>{currentDate}</strong>
                    </div>
                </div>

                {/* Mail Button */}
                <div className="relative flex items-center">
                    <div className="absolute right-0 options-button-height w-24 bg-gray-200 mr-[-1.5rem]"></div>
                    <div className="relative z-9 bg-gray-200 p-4 rounded-full">
                        <section
                            className={`relative z-10 bg-gray-300 shadow-md rounded-full p-8 mail-option-button-size text-gray-500 border-2 border-[#00C4FF]`}
                        >
                            <GrMail />
                        </section>
                    </div>
                </div>
            </div>

            {/* Right Line */}
            <div className="right-0 top-0 flex items-center">
                <div className="mm-right-bar"></div>
            </div>
        </div>
    );
};

export default OptionsSection;
