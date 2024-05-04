import { useState } from "react";
import "./App.css";
import Jobs from "./Components/Jobs";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" bg-blue-100">
      <Navbar />

      <div className="  h-screen bg-blue-100  flex">
        <Sidebar />

        <Jobs />
      </div>
    </div>
  );
}

export default App;
