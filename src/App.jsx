import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [backgroundClass, setBackgroundClass] = useState("");

  const handleBackgroundClassChange = (newClass) => {
    console.log("Before set:", newClass);
    setBackgroundClass(""); // Clear the class
    setTimeout(() => {
      setBackgroundClass(newClass); // Reapply the new class after a brief delay
    }, 0);
    console.log("After set:", backgroundClass);
  };

  useEffect(() => {
    console.log("Background class updated:", backgroundClass);
  }, [backgroundClass]);

  return (
    <div className={`min-h-screen ${backgroundClass}`}>
      <Home onBackgroundClassChange={handleBackgroundClassChange} />
    </div>
  );
}

export default App;
