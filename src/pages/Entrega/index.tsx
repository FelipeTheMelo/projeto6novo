import React, { useState } from 'react'
import { Container, Title, Field, Button } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { limpar } from '../../redux/slices/carrinhoSlice'

const Entrega: React.FC = () => {
    const { itens, total } = useSelector((s: RootState) => s.carrinho)
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const concluir = async () => {
        setLoading(true)
        try {
        const resp = await axios.post('https://ebac-fake-api.vercel.app/api/efood/pedidos', {
            nome, endereco,
            produtos: itens,
            total
        })
        dispatch(limpar())
        navigate('/confirmacao', { state: resp.data })
        } catch (e) {
        alert('Falha ao concluir. Tente novamente.')
        } finally {
        setLoading(false)
        }
    }

    return (
        <Container>
        <Title>Entrega do pedido</Title>
        <Field placeholder="Seu nome" value={nome} onChange={e => setNome(e.target.value)} />
        <Field placeholder="Endereço completo" value={endereco} onChange={e => setEndereco(e.target.value)} />
        <Button onClick={concluir} disabled={!nome || !endereco || itens.length === 0 || loading}>
            {loading ? 'Enviando...' : 'Concluir'}
        </Button>
        </Container>
    )
}

export default Entrega