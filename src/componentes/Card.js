import { Link } from "react-router-dom"
import spidermanList from '../data/spidermanList.json'
import '../styles/componentes/Card.css'


function Card() {
  function MouseEnter(event){
  
    console.log('entrei')
  }
  function MouseLeave(event){
   
    console.log('sai')
  }
  
  return(
    <>
      {spidermanList.map((spiderman, index) => (
          <Link to={`/Spiderman/${spiderman.movies[0].id}`} key={index} id={`spiderman-${index + 1}`} className='card'
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}>
            <img src={spiderman.coverBackground} alt={spiderman.name} className='card__background'/>
            <img src={spiderman.coverImg} alt={spiderman.name} className='card__image'/>
            <h2 className='card__title'>{spiderman.name}</h2>
          </Link>
        ))}
    </>
      
  )
}

export default Card