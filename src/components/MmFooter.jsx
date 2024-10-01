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
        <footer className="fixed bottom-0 left-0 w-full flex justify-center items-center">
            {/* Fondo del footer */}
            <div className="mm-footer-bg absolute top-0 left-0 w-full h-full"></div>

            {/* Current Date and Time */}
            <div className="relative z-10 text-center top-0 flex flex-col items-center justify-start">
                {/* Contenedor para Time y Meridem */}

                <div className="flex items-end relative mb-2 pt-8 pl-44">
                    {/* Time */}
                    <div className="font-e1234 font-bold text-gray-400 text-8xl">
                        {formattedTime}
                    </div>
                    {/* Meridem */}
                    <div className="font-rodin text-gray-400 text-4xl ml-4 pb-2">
                        {meridem}
                    </div>
                </div>

                {/* Current Date */}
                <div className="font-rodin relative font-extrabold text-6xl text-gray-500 pb-24">
                    {currentDate}
                </div>
            </div>
        </footer>
    );
};

export default MmFooter;
