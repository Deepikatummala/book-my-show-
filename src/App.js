import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Router } from "react-router-dom";

//DefaultHOC
import DefaultHOC from "./HOC/Default.HOC";


//components
import Temp from "./components/temp"


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Temp />} />


      </Routes>

  );
}

export default App;
