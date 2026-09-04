import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from './pages/home'
import Engenharia from './pages/engenharia'
import Tecnologia from './pages/tecnologia'
import Dados from './pages/dados'
import Design from './pages/design'
import Ciencia from './pages/ciencia'
import Portfolio from './pages/portfolio'
import Contato from './pages/contato'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engenharia" element={<Engenharia />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/design" element={<Design />} />
        <Route path="/ciencia" element={<Ciencia />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App