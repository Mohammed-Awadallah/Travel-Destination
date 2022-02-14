import Header from '/home/mohammedawadallah/tourapp/src/Components/header/Header.js';
import Footer from '/home/mohammedawadallah/tourapp/src/Components/footer/Footer.js';
import { useParams } from 'react-router';
import './TourDetails.css'
import { useState } from 'react';


function TourDetails(props){
const {id} = useParams();
const [showMore, setShowMore] = useState(false);


let displayData =props.data.filter(x=>x.id == id)

let name = displayData[0].name
let text = displayData[0].info
            
    return(
        <>
        <Header/>
        
        <div id = "tourDiv">
        
        <h3>{name}</h3>
        <p>{showMore ? text : `${text.substring(0,300)}`}
        <button className="btn" onClick={()=>setShowMore(!showMore)}>
        {showMore ? 'show less' : 'show more'}
        </button>
        
        </p>
        <img src={displayData[0].image} alt="city name"></img>
        
        </div>
        <Footer/>
        </>
    )
}

export default TourDetails