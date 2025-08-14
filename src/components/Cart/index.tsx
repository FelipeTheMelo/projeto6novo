import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { open, close, remove, CartItem } from '../../store/reducers/cart'
import Checkout from '../../pages/Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'
import { CartContainer, Sidebar, ScrollArea, CartItemStyle } from './styles'
import Button from '../Button'

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)
  const isOpen = useSelector((state: RootState) => state.cart.opened)
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <CartContainer open={isOpen}>
      <Sidebar>
        <h2>Carrinho</h2>
        <Button type="button" title="Fechar" onClick={() => dispatch(close())}>
          Fechar
        </Button>

        <ScrollArea>
          <ul>
            {items.map((item: CartItem) => (
              <CartItemStyle key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{parseToBrl(item.preco)}</p>
                  <Button
                    type="button"
                    title="Remover"
                    onClick={() => dispatch(remove(item.id))}
                  >
                    Remover
                  </Button>
                </div>
              </CartItemStyle>
            ))}
          </ul>
        </ScrollArea>

        <div>
          <strong>Total: {parseToBrl(getTotalPrice(items))}</strong>
          <Button
            type="button"
            title="Finalizar Compra"
            onClick={() => setShowCheckout(true)}
          >
            Finalizar Compra
          </Button>
        </div>

        {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
