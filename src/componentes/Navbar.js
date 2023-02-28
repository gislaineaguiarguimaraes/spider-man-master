import { ReactComponent as Image } from "../assets/images/icons/spider.svg"
import { Link } from 'react-router-dom'
import  styles from "../styles/componentes/Navbar.module.css"

function Navbar(){
  return(
    <nav className={styles.menu}>
      <ul>
        <li>
          <Image className={styles.icon}/>
        </li> 
        <li>
          <Link to="/tobey-maguire">
            Tobey Maguire
          </Link>
        </li>
        <li>
          <Link to="/andrew-garfield">
            Andrew Garfield
          </Link>
        </li>
        <li>
          <Link to="/tom-holland">
            Tom Holland
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar