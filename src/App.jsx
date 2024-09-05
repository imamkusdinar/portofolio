import './App.css'
import './styles/Navbar.css'
import './styles/Header.css'
import './styles/Portofolio.css'
import './styles/DetailPortofolio.css'
import Home from './pages/Home'
import DetailPortofolio from './pages/DetailPortofolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/portofolio' element={<Home />} />

    <Route path='/portofolio/portfolio/:id' element={<DetailPortofolio />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App