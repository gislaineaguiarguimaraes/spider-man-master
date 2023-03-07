import styles from '../styles/componentes/Navigator.module.css'
import { Link } from 'react-router-dom'



function Navigator(icon, length) {
  console.log(icon.img)
  console.log(length.length)
 
  return (
    <nav className={styles.navigator}>
      <div className={styles.navigator__icon}>
        <Link to ="/">
          <img src={icon.img} alt="logo"/>
        </Link>
      </div>
      <ul>
        
      </ul>
    </nav>
  )
}

export default Navigator