//Importer react-router-dom pour créer et relier les routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Importer toutes les pages du site
import Home from './pages/Home'
import Spiderman from './pages/Spiderman'

import './App.css'

function App() {
  return (
    <div className="App">
      {/*Englober l'intégralité du projet dans le Routeur */}
      <Router>
        <Routes>
          <Route path = "/" exact element= {<Home/>}/>
          <Route path = "/Spiderman/:id" element= {<Spiderman/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
