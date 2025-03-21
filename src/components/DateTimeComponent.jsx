import React, { useState, useEffect } from "react";

const DateTimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="text-center text-lg font-bold p-2 bg-gray-200">
      {currentTime.toLocaleString()} {/* Show Date and Time */}
    </div>
  );
};

export default DateTimeComponent;
