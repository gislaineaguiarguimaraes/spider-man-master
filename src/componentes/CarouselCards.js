import styles from '../styles/componentes/CarouselCards.module.css'
import Card from './Card'
import spidermanList from '../data/spidermanList.json'

function CarouselCards() {
 
  return(
    <>
      <div className={styles.container}>
        <div className={styles.cards_carousel} >
          <Card />
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