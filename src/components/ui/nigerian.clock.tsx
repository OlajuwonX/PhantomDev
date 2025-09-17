import React, { useEffect, useState } from "react";

interface TimeNow {
    hours: number;
    minutes: number;
    seconds: number;
}

const NigerianClock: React.FC = () => {
    const [time, setTime] = useState<TimeNow>({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const tick = () => {
            const now = new Date(
                new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" })
            );

            setTime({
                hours: now.getHours(),
                minutes: now.getMinutes(),
                seconds: now.getSeconds(),
            });
        };

        tick();
        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 rounded-xl ">
        <span className="countdown font-mono text-4xl lg:text-5xl">
          <span
              style={{ "--value": time.hours } as React.CSSProperties}
              aria-live="polite"
          >
            {time.hours}
          </span>
        </span>
            </div>
            <div className="flex flex-col p-2 rounded-xl ">
        <span className="countdown font-mono text-4xl lg:text-5xl">
          <span
              style={{ "--value": time.minutes } as React.CSSProperties}
              aria-live="polite"
          >
            {time.minutes}
          </span>
        </span>
            </div>
            <div className="flex flex-col p-2 rounded-xl">
        <span className="countdown font-mono text-4xl lg:text-5xl">
          <span
              style={{ "--value": time.seconds } as React.CSSProperties}
              aria-live="polite"
          >
            {time.seconds}
          </span>
        </span>
            </div>
        </div>
    );
};

export default NigerianClock;
