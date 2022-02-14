import './Tour.css'

export default function Tours(props){
    return(
    <div className='little'  style ={{ padding : 10}}>
    <h3>{props.data.name}</h3>
    <img className = "resise"src={props.data.image} alt="city image"/>
    </div>
    )
}