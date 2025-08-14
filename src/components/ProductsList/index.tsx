import React from 'react'
import Product, { ProductProps } from '../Produtc'
import { ProductsContainer } from './styles'

export interface Prato {
  id: number
  nome: string
  foto: string
  porcao: string
  preco: number
  descricao?: string // agora opcional
}

interface ProductsListProps {
  pratos: Prato[]
}

const ProductsList: React.FC<ProductsListProps> = ({ pratos }) => {
  return (
    <ProductsContainer>
      {pratos.map((prato) => (
        <Product
          key={prato.id}
          id={prato.id}
          nome={prato.nome}
          foto={prato.foto}
          porcao={prato.porcao}
          preco={prato.preco}
          descricao={prato.descricao} // opcional, não quebra TS
        />
      ))}
    </ProductsContainer>
  )
}

export default ProductsList
