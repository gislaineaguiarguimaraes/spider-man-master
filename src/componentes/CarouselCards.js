import styles from '../styles/componentes/CarouselCards.module.css'
import Card from './Card'
import spidermanList from '../data/spidermanList.json'
import React, { useRef } from "react";


function CarouselCards(props) {

  const ref = useRef()
  //console.log(ref.current.style.transform)
  function SelectedCarouselItem(){
  

  }
  SelectedCarouselItem()
  return(
    <>
      <div className={styles.container}>
        <div  className={styles.cards_carousel} ref={ref} 
        style={{transform:'translateZ(-40vw) rotateY(0deg)'}}>
          <Card mouseLeave={props.mouseLeave} mouseEnter={props.mouseEnter}/>
        </div>
      </div>
      <div className={styles.controller}>
        {spidermanList.map((spiderman, index) => (
          <div key={index} id={spiderman.id} className={styles.controller__button}>
          {spiderman.id}
          </div>
        ))}
        <div className= {styles.controller__line}></div>
      </div>
    </>
  )
}
 export default CarouselCards