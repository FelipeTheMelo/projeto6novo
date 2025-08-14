import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import RestaurantPlates from './pages/Restaurant/index'
import Checkout from './pages/Checkout/index'

//Configuração das rotas de navegação com Router-dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPlates />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

export default Rotas
