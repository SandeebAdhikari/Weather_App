import React, { useState, useEffect } from "react";

function CurrentDateTime({ showAmPm = true, showDate = true }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: showAmPm,
  });

  const displayTime = showAmPm
    ? formattedTime.replace("am", "AM").replace("pm", "PM")
    : formattedTime;

  return (
    <div className="p-4">
      <p className="text-lg mt-2">
        {showDate && currentDateTime.toLocaleDateString()} {displayTime}
      </p>
    </div>
  );
}

export default CurrentDateTime;
