import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store-index'
import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import Button from '../Button/button-index'

import {
  CartContainer,
  Overlay,
  Sidebar,
  ScrollArea,
  Footer,
  CartItem,
  Prices
} from './cart-styles'

import { getTotalPrice, parseToBrl } from '../../utils/utils-index'
import Checkout from '../../pages/Checkout/checkout-index'

const Cart = () => {
  // Pega estado do carrinho da store
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  // Fecha o carrinho
  const closeCart = () => {
    dispatch(close())
  }

  // Remove item do carrinho pelo id
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // Abre a tela de checkout
  const goToCheckout = () => {
    setShowCheckout(true)
  }

  return (
    <CartContainer className={isOpen ? 'isOpen' : ''}>
      <Overlay onClick={closeCart} />

      <Sidebar>
        {/* Quando o carrinho estiver vazio */}
        {items.length === 0 && !showCheckout && (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}

        {/* Quando carrinho tiver itens e não estiver no checkout */}
        {!showCheckout && items.length > 0 && (
          <>
            {/* Área com scroll para a lista de produtos */}
            <ScrollArea>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </CartItem>
                ))}
              </ul>
            </ScrollArea>

            {/* Rodapé fixo com preço total e botão */}
            <Footer>
              <Prices>
                Valor Total <span>{parseToBrl(getTotalPrice(items))}</span>
              </Prices>

              <Button
                onClick={goToCheckout}
                type="button"
                title="Clique aqui para continuar com a compra"
              >
                Continuar com a entrega
              </Button>
            </Footer>
          </>
        )}

        {/* Tela de checkout */}
        {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
