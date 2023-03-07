import { Link } from "react-router-dom"
import spidermanList from '../data/spidermanList.json'
import styles from '../styles/componentes/Card.module.css'


function Card() {

  
  return(
    <>
      {spidermanList.map((spiderman, index) => (
          <Link to={`/Spiderman/${spiderman.movies[0].id}`} key={index} id={`spiderman-${index + 1}`}className={styles.card}>
            <img src={spiderman.coverBackground} alt={spiderman.name} className={styles.card__background}/>
            <img src={spiderman.coverImg} alt={spiderman.name} className={styles.card__image}/>
            <h2 className={styles.card__title}>{spiderman.name}</h2>
          </Link>
        ))}
    </>
      
  )
}

export default Card