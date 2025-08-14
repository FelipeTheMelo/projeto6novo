import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Headerbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

interface TextosProps {
  children: React.ReactNode
}

export const Textos = styled.div<TextosProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const TextCart = styled.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
`
