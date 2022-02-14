import './Tours.css';
import Tour from '/home/mohammedawadallah/tourapp/src/Components/tours/tour/Tour'
import { Link } from 'react-router-dom';

function Tours(props){
    
    // console.log(props.data);
    return(
        <div className = "maindiv">
        {
            props.data.map(city =>{


                return(

                  <Link id ="linkt" to ={ `/city/${city.id}`} > 
                  <Tour key = {city.id} data ={city}/>
                  </Link>
                  
                )
            })
        }
        </div>
    )
}

export default Tours;