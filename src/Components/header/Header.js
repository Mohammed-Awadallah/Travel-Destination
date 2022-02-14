import './Header.css'
// import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';

function Header(){

    return(
        <header className = "mainHead">
            <h1 id = "header" >TourApp</h1>
            <Navbar/>
            
        </header>
    )
}

export default Header;