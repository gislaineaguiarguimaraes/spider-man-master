import React, {useState} from 'react'
import '../styles/pages/Home.css'

//Importer les composants 
import Navbar from "../componentes/Navbar"
import CarouselCards from "../componentes/CarouselCards"


function Home(){
  document.title="Spiderman Multiverse - Page d'accueil"
  //useState para pegar o id
  const [info, setInfo] = useState()
  //useState para pegar mudar o estado do background
  const [bg, setBg] = useState()
   
  
  function mouseEnter(argInfo){
    setInfo(argInfo)
    setBg(`spider-man-0${argInfo}`)
  }
  function mouseLeave(){
    setInfo(undefined)
  }
  console.log(bg)
  return(
    <div className= {`${(info === undefined) ? "body" : bg } default_style`}>
      <Navbar />
      <CarouselCards mouseLeave={mouseLeave} mouseEnter={mouseEnter}/>
    </div>
  )
}

export default Home