import { CartItem } from '../store/reducers/cart'

export const getTotalPrice = (items: CartItem[]) => {
  return items.reduce(
    (total, item) => total + item.preco * (item.quantidade || 1),
    0
  )
}

export const parseToBrl = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
