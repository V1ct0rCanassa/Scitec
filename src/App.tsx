import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from './pages/home'
import Engenharia from './pages/engenharia'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engenharia" element={<Engenharia />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
