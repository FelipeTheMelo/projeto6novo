import React from 'react'

export interface ProductProps {
  id: number
  nome: string
  foto: string
  porcao: string
  preco: number
  descricao?: string // agora opcional
}

const Product: React.FC<ProductProps> = ({
  id,
  nome,
  foto,
  porcao,
  preco,
  descricao
}) => {
  return (
    <div>
      <img src={foto} alt={nome} />
      <h3>{nome}</h3>
      <p>{porcao}</p>
      <p>{preco}</p>
      {descricao && <p>{descricao}</p>}
    </div>
  )
}

export default Product
