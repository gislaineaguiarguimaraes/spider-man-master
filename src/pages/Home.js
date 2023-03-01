import Navbar from "../componentes/Navbar"
import CarouselCards from "../componentes/CarouselCards"
import '../styles/pages/Home.module.css'
function Home(){
  document.title="Spiderman Multiverse - Page d'accueil"
  return(
    <div>
      <Navbar />
      <CarouselCards/>
    </div>
  )
}

export default Home