import '../styles/componentes/Links.css'
import { Link } from 'react-router-dom'

function Links(video) {
  return(
    <div className="s-links">
          <ul>
            <li>
              <Link to={video.video}    className="link-button" target="_blank">
                <span className="icon">
                  <div className="play-icon">
                    &nbsp;
                  </div>
                </span>
                <span className="label">Assistir Trailer</span>
              </Link>
            </li>
          </ul>
        </div>
  )
}

export default Links