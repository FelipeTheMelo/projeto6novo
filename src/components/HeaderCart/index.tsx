import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { open } from '../../store/reducers/cart'
import { Headerbar, Textos, TextCart } from './styles'
import effodLogo from '../../assets/logos/logo.png'
import background from '../../assets/pratos/background.png'

const HeaderCart: React.FC = () => {
  const dispatch = useDispatch()

  // Agora 'cart' tem o tipo correto
  const cart = useSelector((state: RootState) => state.cart)

  return (
    <Headerbar>
      <Link to="/">
        <img src={effodLogo} alt="Logo" />
      </Link>

      <Textos>
        <TextCart title="Abrir Carrinho" onClick={() => dispatch(open())}>
          Carrinho ({cart.items.length})
        </TextCart>
      </Textos>
    </Headerbar>
  )
}

export default HeaderCart
