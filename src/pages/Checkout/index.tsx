import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { CartItem } from '../../store/reducers/cart'
import { CheckoutContainer } from './styles'
import Button from '../../components/Button'
import { parseToBrl } from '../../utils'

interface CheckoutProps {
  onClose: () => void
}

const Checkout: React.FC<CheckoutProps> = ({ onClose }) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const handleCheckout = async () => {
    const response = await fetch('https://api.exemplo.com/checkout', {
      method: 'POST',
      body: JSON.stringify(items)
    })
    // lógica de checkout
    onClose()
  }

  return (
    <CheckoutContainer>
      <h2>Finalizar Pedido</h2>
      <ul>
        {items.map((item: CartItem) => (
          <li key={item.id}>
            {item.nome} - {parseToBrl(item.preco)}
          </li>
        ))}
      </ul>

      <strong>
        Total: {parseToBrl(items.reduce((acc, item) => acc + item.preco, 0))}
      </strong>

      <div>
        <Button type="button" title="Cancelar" onClick={onClose}>
          Cancelar
        </Button>

        <Button type="button" title="Finalizar" onClick={handleCheckout}>
          Finalizar
        </Button>
      </div>
    </CheckoutContainer>
  )
}

export default Checkout
