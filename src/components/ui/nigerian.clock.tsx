import { useEffect, useState } from "react";

const NigeriaClock: React.FC = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "Africa/Lagos",
            };
            const formatter = new Intl.DateTimeFormat("en-GB", options);
            setTime(formatter.format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-4xl font-bold tracking-widest mt-5 items-center justify-center">
            {time}
        </div>
    );
};

export default NigeriaClock;
