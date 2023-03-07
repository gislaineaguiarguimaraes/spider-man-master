import spidermanList from '../data/spidermanList.json'
import Navigator from '../componentes/Navigator'
import '../styles/pages/SpiderMan.css'
import { useParams } from 'react-router-dom'
import Logo from '../componentes/Logo'
import Description from '../componentes/Description'
import Links from '../componentes/Links'
import Gallery from '../componentes/Gallery'

function Spiderman(){

  const {id} = useParams()
  let movie = {}
  let moviesId = []
  for(let i = 0; i < spidermanList.length; i++){
    for(let j = 0; j < spidermanList[i].movies.length; j++){
      
      if(spidermanList[i].movies[j].id === id){
        moviesId.push(spidermanList[i].movies[j].id)
        movie = spidermanList[i].movies[j]
      }
    }
  }
  
  console.log(movie.background)

  
  return(
    <div className='wrapper' style={{backgroundImage:`url(${movie.background})`, width: "100%", height:"100%"}}>
      <div className= 'left_column'>
      <Navigator 
        img = {movie.icon}
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