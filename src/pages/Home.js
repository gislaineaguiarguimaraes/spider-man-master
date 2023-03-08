
import '../styles/pages/Home.css'

//Importer les composants 
import Navbar from "../componentes/Navbar"
import CarouselCards from "../componentes/CarouselCards"


function Home(){
 
  document.title="Spiderman Multiverse - Page d'accueil"
  
  return(
    <div className="body">
      <Navbar />
      <CarouselCards/>
    </div>
  )
}

export default Home