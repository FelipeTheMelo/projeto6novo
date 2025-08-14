import styled from 'styled-components'

export const CartContainer = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`

export const Sidebar = styled.div`
  padding: 20px;
`

export const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const ScrollArea = styled.div`
  overflow-y: auto;
  max-height: 400px;
`
