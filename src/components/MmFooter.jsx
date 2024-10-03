import { useEffect, useState } from "react";

const MmFooter = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");
    const [showColon, setShowColon] = useState(true);
    const [meridem, setMeridem] = useState("");

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

            // Elimina la coma antes de guardar la fecha
            const cleanedDate = formattedDate.replace(/,/g, "");

            // Borrar PM y AM de la hora y guardarlos en una variable separada
            const cleanedTime = formattedTime.replace(/(AM|PM)/, "").trim();
            setMeridem(formattedTime.match(/(AM|PM)/)[0]);

            setCurrentDate(cleanedDate);
            setCurrentTime(cleanedTime);
        };

        // Actualiza la fecha y hora inmediatamente
        updateDateTime();

        // Intervalo para actualizar la fecha/hora cada segundo
        const intervalId = setInterval(() => {
            updateDateTime();
            setShowColon((prev) => !prev); // Alterna la visibilidad de los dos puntos cada segundo
        }, 1000);

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.replace(":", showColon ? ":" : " ");

    return (
        <>
            {/* Fondo del footer */}
            <footer className="fixed bottom-0 left-0 w-[100vw] flex justify-center items-center mm-footer-bg">
                {/* Current Date and Time */}
                <div className="relative z-10 text-center top-0 flex flex-col items-center justify-start">
                    {/* Contenedor para Time y Meridem */}
                    <div className="flex items-end relative lg:pl-36 md:pl-20">
                        {/* Time */}
                        <div
                            className="font-e1234 font-bold text-gray-400"
                            style={{ fontSize: "5vw" }}
                        >
                            {formattedTime}
                        </div>
                        {/* Meridem */}
                        <div
                            className="font-rodin text-gray-400 ml-4"
                            style={{ fontSize: "2vw", paddingBottom: "1.2vw" }}
                        >
                            {meridem}
                        </div>
                    </div>

                    {/* Current Date */}
                    <div
                        className="font-rodin relative font-extrabold text-gray-500"
                        style={{ fontSize: "4vw", paddingBottom: "1.2vw" }}
                    >
                        {currentDate}
                    </div>
                </div>
            </footer>
        </>
    );
};

export default MmFooter;
