import { Chart as chartjs } from "chart.js/auto";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Page from "./Page/Page";
import Error from "./Page/Error";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="" element={<Page />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
