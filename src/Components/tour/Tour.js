import './Tour.css';

function Tour(props){
    
    // console.log(props.data);
    return(
        <div className = "maindiv">
        {
            props.data.map(city =>{

                return(
                    <div key ={city.name} style ={{ padding : 10}}>
                    <h3>{city.name}</h3>
                    <img className = "resise"src={city.image} alt="city image"/>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Tour;