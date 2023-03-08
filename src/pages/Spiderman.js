import spidermanList from '../data/spidermanList.json'
import '../styles/pages/SpiderMan.css'
import { useParams } from 'react-router-dom'

//Importer tous les composants de la page
import Navigator from '../componentes/Navigator'
import Logo from '../componentes/Logo'
import Description from '../componentes/Description'
import Links from '../componentes/Links'
import Gallery from '../componentes/Gallery'

function Spiderman(){

  const {id} = useParams()
  let movie = {}
  let movies = []
  let moviesId = []

  //For pour trouver uniquement le film qui correspond à l'id récupéré avec useParams
  for(let i = 0; i < spidermanList.length; i++){
    for(let j = 0; j < spidermanList[i].movies.length; j++){
      
      if(spidermanList[i].movies[j].id === id){
        movies.push(spidermanList[i].movies)
        movie = spidermanList[i].movies[j]
      }
    }
  }
  for(let i = 0; i < movies[0].length; i++ ){
    moviesId.push (movies[0][i].id)
    
  }
  console.log(moviesId)

  return(
    <div className='wrapper' style={{backgroundImage:`url(${movie.background})`, width: "100%", height:"100%", backgroundSize:"cover"}}>
      <div className= 'left_column'>
      <Navigator 
        img = {movie.icon}
        list = {moviesId}
      />

      </div >
      <div className= 'main_content'>
        <div className= 'main_content_top'>
          <Logo 
          logo = {movie.logo}
          year = {movie.year}
          />
          <Description 
          year = {movie.year}
          director = {movie.director}
          text = {movie.synopsis} 
          />
          <Links 
          video = {movie.trailer}
          />
        </div>
        <div className= 'main_content_bottom'>
          <Gallery
          pictures = {movie.pictures}
          />
        </div>
      </div>
    </div>
  )
}

export default Spiderman