import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ListaMenu from './pages/Menu'
import Product from './pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<ListaMenu />} />
    <Route path="/menu/:id" element={<Product />} />
  </Routes>
)
export default Rotas
