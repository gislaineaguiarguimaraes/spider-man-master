import React, { useState, useEffect } from 'react'

import '../styles/pages/Home.css'

//Importer les composants
import Navbar from '../componentes/Navbar'
import CarouselCards from '../componentes/CarouselCards'

function Home() {
  document.title = "Spiderman Multiverse - Page d'accueil"

  const [cardId, setCardId] = useState('')

  function mouseEnter(id) {
    setCardId(`spiderman-${id}-hovered`)
  }

  function mouseLeave() {
    setCardId('')
  }

  useEffect(() => {
    document.body.className = 'body'
    let body = document.body
    console.log(body)
    document.body.id = cardId

    // Função que remove o id do body
    const removeBodyId = () => {
      document.body.id = ''
      document.body.className = ''
    }

    // Retorna a função de limpeza
    return removeBodyId
  }, [cardId])

  return (
    <div>
      <Navbar />
      <CarouselCards mouseLeave={mouseLeave} mouseEnter={mouseEnter} />
    </div>
  )
}
export default Home
