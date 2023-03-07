import '../styles/componentes/Description.css'

function Description({year, text, director}){

  return(
    <div className='description'>
          <div className='pills'>
            <ul>
              <li>Ano: {year}</li>
              <li>Diretor: {director}</li>
            </ul>
          </div>
          <div className= 'description__text'>
            <p><strong>Sinopse:</strong>&nbsp;{text}</p>
          </div>
        </div>
  )
}

export default Description