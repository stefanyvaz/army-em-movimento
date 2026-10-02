import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import './App.css'
import Desafios from './Pages/Desafios'
import Fanbases from './Pages/Fanbases'
import TesteDeNivel from './Pages/TesteDeNivel'
import Recursos from './Pages/Recursos'
function App() {
  return (
    <BrowserRouter>
      <Header />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/fanbases" element={<Fanbases />} />
        <Route path="/teste-de-nivel" element={<TesteDeNivel />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App