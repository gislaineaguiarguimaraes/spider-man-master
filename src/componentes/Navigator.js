import styles from '../styles/componentes/Navigator.module.css'
import { Link } from 'react-router-dom'

//Je reçois comme props l'icône et la liste qui contient tous les id des filmes, afin que je puisse le mettre dans la barre "navigator"

function Navigator({img, list}) {

 
  return (
    <nav className={styles.navigator}>
      <div className={styles.navigator__icon}>
        <Link to ="/">
          <img src={img} alt="logo"/>
        </Link>
      </div>
      <ul>
        {list.map((id, index) =>(
          <li key={index}><Link to={`/Spiderman/${id}`}>{index + 1}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigator