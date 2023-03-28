import React, {useState} from 'react'
import '../styles/pages/Home.css'

//Importer les composants 
import Navbar from "../componentes/Navbar"
import CarouselCards from "../componentes/CarouselCards"


function Home(){
  document.title="Spiderman Multiverse - Page d'accueil"
  document.body.className='body'

  //useState para pegar mudar o estado do background
  
  /*const [cardBackground, setCardBackground] = useState({
    imageUrl:('https://imgur.com/px4SxHT.jpg'),
  })

  function mouseEnter(background){
    setCardBackground({imageUrl:background})
  }

  function mouseLeave(){
    setCardBackground({ imageUrl: 'https://imgur.com/px4SxHT.jpg' })
  }

  const style = {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vh',
    height: '100%',
    transition: 'background-image 1s ease-in-out, opacity 1s ease-in-out',
  }
  

  return(
    
    <div >
      <div style={{ backgroundImage: `url(${cardBackground.imageUrl})`, ...style}}>
        <Navbar />
        <CarouselCards mouseLeave={mouseLeave} mouseEnter={mouseEnter}/>
      </div>
    </div>
    
  )
}*/
const [cardId, setCardId] = useState()



function mouseEnter(id){
  setCardId(`spiderman-${id}-hovered`)
  
}
document.body.id=(cardId)

function mouseLeave(){
  setCardId('')
}
return(
    
  
  <div>
    <Navbar />
    <CarouselCards mouseLeave={mouseLeave} mouseEnter={mouseEnter}/>
  </div>
  
  
)
}
export default Home