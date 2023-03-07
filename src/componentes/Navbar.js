import { ReactComponent as Image } from "../assets/images/icons/spider.svg"
import { Link } from 'react-router-dom'
import  styles from "../styles/componentes/Navbar.module.css"
import spidermanList from '../data/spidermanList.json'

function Navbar(){

 
  return(
    <nav className={styles.menu}>
      <ul>
        <li>
          <Image className={styles.icon}/>
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