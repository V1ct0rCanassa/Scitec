import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from './pages/home'
import Engenharia from './pages/engenharia'
import Tecnologia from './pages/tecnologia'
import Dados from './pages/dados'
import Design from './pages/design'
import Ciencia from './pages/ciencia'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engenharia" element={<Engenharia />} />
        <Route path="/tecnologia" element={<Tecnologia />} />
        <Route path="/dados" element={<Dados />} />
        <Route path="/design" element={<Design />} />
        <Route path="/ciencia" element={<Ciencia />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
