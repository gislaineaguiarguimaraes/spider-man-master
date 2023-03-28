import { ReactComponent as Image } from "../assets/images/icons/spider.svg"
import { Link } from 'react-router-dom'
import  "../styles/componentes/Navbar.css"
import spidermanList from '../data/spidermanList.json'

function Navbar(){

 
  return(
    <nav className='menu'>
      <ul>
        <li>
          <Image className='iconNavbar'/>
        </li>
        {spidermanList.map((spiderman, index) =>(
          
          <Link to={`/Spiderman/${spiderman.movies[0].id}`} key={index}>
            <li>
              {spiderman.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar