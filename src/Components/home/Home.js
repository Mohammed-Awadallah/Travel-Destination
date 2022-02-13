import Header from '/home/mohammedawadallah/tourapp/src/Components/header/Header.js';
import Footer from '/home/mohammedawadallah/tourapp/src/Components/footer/Footer.js';
import Tour from '/home/mohammedawadallah/tourapp/src/Components/tour/Tour.js';
const cityData = require('/home/mohammedawadallah/tourapp/src/data/db.json');
 

function Home(){

    return(
        
          <>  
        <Header/>
        <Tour data = {cityData}/>
        <Footer/>
        </>
        
        
    )
}

export default Home;