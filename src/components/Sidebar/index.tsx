import React from 'react'
import { Aside, Title, Item, Name, Price, Qty, Row, Total, Actions, Button } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { remover, limpar } from '../../redux/slices/carrinhoSlice'
import { useNavigate } from 'react-router-dom'

const Sidebar: React.FC = () => {
    const { itens, total } = useSelector((s: RootState) => s.carrinho)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Aside>
        <Title>Carrinho</Title>

        {itens.length === 0 && <p style={{ color: '#E66767' }}>Seu carrinho está vazio.</p>}

        {itens.map((i) => (
            <Item key={i.id}>
            <Row>
                <Name>{i.title}</Name>
                <Qty>x{i.qty ?? 1}</Qty>
            </Row>
            <Row>
                <Price>R$ {(i.price * (i.qty ?? 1)).toFixed(2)}</Price>
                <button onClick={() => dispatch(remover(i.id))}>remover</button>
            </Row>
            </Item>
        ))}

        <Total>Total: <strong>R$ {total.toFixed(2)}</strong></Total>

        <Actions>
            <Button onClick={() => navigate('/entrega')} disabled={itens.length === 0}>
            Concluir pedido
            </Button>
            <Button variant="ghost" onClick={() => dispatch(limpar())} disabled={itens.length === 0}>
            Limpar
            </Button>
        </Actions>
        </Aside>
    )
}

export default Sidebar