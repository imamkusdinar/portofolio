import './App.css'
import './styles/Navbar.css'
import './styles/Header.css'
import './styles/Portofolio.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPortofolio from './pages/DetailPortofolio'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/portofolio' element={<Home />} />

    <Route path='/portofolio/portfolio' element={<DetailPortofolio />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App