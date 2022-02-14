import Header from '/home/mohammedawadallah/tourapp/src/Components/header/Header.js';
import Footer from '/home/mohammedawadallah/tourapp/src/Components/footer/Footer.js';
import Tours from '../tours/Tours.js';

 

function Home(props){

    return(
        
          <>  
        <Header/>
        <Tours data = {props.data} />
        <Footer/>
        </>
        
        
    )
}

export default Home;