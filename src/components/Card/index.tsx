import React, { useState } from 'react'
import { Container, Image, Info, Title, Description, Button } from './styles'

interface CardProps {
  image: string
  title: string
  description: string
  price: number
  onAdd: (title: string, price: number) => void
}

const Card = ({ image, title, description, price, onAdd }: CardProps) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button onClick={() => onAdd(title, price)}>Saiba mais</Button>
      </Info>
    </Container>
  )
}

export default Card