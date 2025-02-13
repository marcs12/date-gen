import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Your main App component
import LoaderAnimation from "./components/LoadingAnimation"; // Import the loader

function Main() {
  const [isLoading, setIsLoading] = useState(true); // State for loading

  // Simulate loading (e.g., fetching data or initializing the app)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? <LoaderAnimation /> : <App />}{" "}
      {/* Show loader while loading */}
    </React.StrictMode>
  );
}

// Render the Main component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
