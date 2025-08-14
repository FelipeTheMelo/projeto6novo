import React from 'react'
import { Container, Title, Text } from './styles'
import { useLocation, Link } from 'react-router-dom'

const Confirmacao: React.FC = () => {
    const { state } = useLocation() as { state: any }
    const pedido = state

    return (
        <Container>
        <Title>Pedido confirmado!</Title>
        <Text>Nome: {pedido?.nome}</Text>
        <Text>Endereço: {pedido?.endereco}</Text>
        <Text>Total: R$ {Number(pedido?.total ?? 0).toFixed(2)}</Text>

        {Array.isArray(pedido?.produtos) && (
            <>
            <Text>Produtos:</Text>
            <ul>
                {pedido.produtos.map((p: any, i: number) => (
                <li key={i}>{p.title} — R$ {Number(p.price).toFixed(2)} (x{p.qty ?? 1})</li>
                ))}
            </ul>
            </>
        )}

        <div style={{ marginTop: 20 }}>
            <Link to="/" style={{ color: '#E66767', fontWeight: 700 }}>Voltar para a Home</Link>
        </div>
        </Container>
    )
}

export default Confirmacao