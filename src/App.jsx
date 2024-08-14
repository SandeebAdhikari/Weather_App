import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [backgroundClass, setBackgroundClass] = useState("");

  const handleBackgroundClassChange = (newClass) => {
    setBackgroundClass(newClass);
  };

  useEffect(() => {
    console.log("Background class updated:", backgroundClass);
  }, [backgroundClass]);

  return (
    <>
      <div className={`min-h-screen ${backgroundClass}`}>
        <div className="background-overlay"></div> {/* Apply overlay here */}
        <Home onBackgroundClassChange={handleBackgroundClassChange} />
      </div>
    </>
  );
}

export default App;
