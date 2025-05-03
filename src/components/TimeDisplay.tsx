import { useEffect, useState } from "react";

export default function TimeDisplay() {
  const [time, setTime] = useState<string>("Loading...");

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchTime = async () => {
      try {
        const res = await fetch(
          "https://api.timezonedb.com/v2.1/get-time-zone?key=LFMD1XGUMLIR&format=json&by=zone&zone=America/Los_Angeles"
        );
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        const date = new Date(data.formatted);
        const formatted = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        setTime(formatted);
      } catch {
        setTime("Unable to fetch time");
      }
    };

    fetchTime(); // run once on mount
    intervalId = setInterval(fetchTime, 60000); // update every 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  return <span>{time}</span>;
}
