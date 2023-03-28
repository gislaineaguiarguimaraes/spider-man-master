import { Link } from "react-router-dom"
import spidermanList from '../data/spidermanList.json'
import '../styles/componentes/Card.css'


function Card({mouseLeave, mouseEnter}) {
  const handleMouseEnter = (index,id) => {
    const cardElement = document.getElementById(`spiderman-${index + 1}`);
    cardElement.classList.add('card-hovered');
    mouseEnter(id);
  }

  const handleMouseLeave = (index) => {
    const cardElement = document.getElementById(`spiderman-${index + 1}`);
    cardElement.classList.remove('card-hovered');
    mouseLeave();
  }

  return(
    <>
      {spidermanList.map((spiderman, index) => (
        
          <Link to={`/Spiderman/${spiderman.movies[0].id}`} key={index} id={`spiderman-${index + 1}`} className='card'
          onMouseEnter={() => handleMouseEnter(index, spiderman.id)}
          onMouseLeave={() => handleMouseLeave(index)}>
            <img src={spiderman.coverBackground} alt={spiderman.name} className='card__background'/>
            <img src={spiderman.coverImg} alt={spiderman.name} className='card__image'/>
            <h2 className='card__title'>{spiderman.name}</h2>
          </Link>
        ))}
    </>
      
  )
}

export default Card