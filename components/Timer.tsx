import { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const initialTimeInSeconds = 10 * 60; // 4 minutes
  const [seconds, setSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const remainingSeconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-center">
      <div className="!text-4xl font-extrabold mt-2">{formatTime(seconds)}</div>
    </div>
  );
};

export default Timer;
