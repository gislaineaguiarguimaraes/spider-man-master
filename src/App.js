//Importer react-router-dom pour créer et relier les routes
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Importer toutes les pages du site
import Home from './pages/Home'
import TobeyMaguire from './pages/TobeyMaguire'
import AndrewGarfield from './pages/AndrewGarfield'
import TomHolland from './pages/TomHolland'

import './App.css'

function App() {
  return (
    <div className="App">
      {/*Englober l'intégralité du projet dans le Routeur */}
      <Router>
        <Routes>
          <Route path = "/" exact element= {<Home/>}/>
          <Route path = "/tobey-maguire" element= {<TobeyMaguire/>}/>
          <Route path = "/andrew-garfield" element= {<AndrewGarfield/>}/>
          <Route path = "/tom-holland" element= {<TomHolland/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
