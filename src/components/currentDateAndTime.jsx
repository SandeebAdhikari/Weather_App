import React, { useState, useEffect } from "react";

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 bg-base-100 shadow-lg rounded-lg">
      <p className="text-lg mt-2">
        {currentDateTime.toLocaleDateString("en-GB", { hour12: false })}
        {"  "}
        {currentDateTime.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default CurrentDateTime;
