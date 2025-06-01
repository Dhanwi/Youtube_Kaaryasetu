import React from "react";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8"></div>
    </div>
  );
};

export default App;
