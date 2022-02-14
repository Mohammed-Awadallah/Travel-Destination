
import './App.css';
import Home from "./Components/home/Home";
import TourDetails from './Components/TourDetails/TourDetails';
import { Routes, Route, Link } from "react-router-dom";
const cityData = require('/home/mohammedawadallah/tourapp/src/data/db.json');



function App() {
  return (
    <Routes>
    <Route path="/" element={<Home data = {cityData} />} />
    <Route path="/city/:id" element={<TourDetails  data = {cityData} />} />
  </Routes>
  )
  
}

export default App;
