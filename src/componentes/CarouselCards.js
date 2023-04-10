import '../styles/componentes/CarouselCards.css'
import Card from './Card'
import spidermanList from '../data/spidermanList.json'
import React, { useState } from "react";


function CarouselCards(props) {

  
  const [selectedItemId, setSelectedItemId] = useState(null);

  function SelectedCarouselItem(id){
    setSelectedItemId(id);
  }
  
  return(
    <>
      <div className='container'>
        <div  
          className='cards_carousel'  
          style={{
            transform:`translateZ(-40vw) rotateY(${-120 * (selectedItemId - 1)}deg)`
          }}>
          <Card mouseLeave={props.mouseLeave} mouseEnter={props.mouseEnter}/>
        </div>
      </div>
      <div className='controller'>
        {spidermanList.map((spiderman, index) => (
          <div 
          key={index} 
          id={spiderman.id} 
          className={`controller__button ${
            spiderman.id === selectedItemId ? "selected" : ""
          }`} 
          
          onClick={() => SelectedCarouselItem(spiderman.id)}>
          {spiderman.id}
          </div>
        ))}
        <div className= 'controller__line'></div>
      </div>
    </>
  )
}
 export default CarouselCards