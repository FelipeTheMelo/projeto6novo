import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ItemCarrinho {
    id: string
    title: string
    price: number
    qty?: number
}

interface CarrinhoState {
    itens: ItemCarrinho[]
    total: number
}

const initialState: CarrinhoState = { itens: [], total: 0 }

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionar(state, action: PayloadAction<ItemCarrinho>) {
        const existente = state.itens.find(i => i.id === action.payload.id)
        if (existente) {
            existente.qty = (existente.qty ?? 1) + 1
            state.total += existente.price
        } else {
            state.itens.push({ ...action.payload, qty: 1 })
            state.total += action.payload.price
        }
        },
        remover(state, action: PayloadAction<string>) {
        const idx = state.itens.findIndex(i => i.id === action.payload)
        if (idx >= 0) {
            const item = state.itens[idx]
            const qty = item.qty ?? 1
            if (qty > 1) {
            item.qty = qty - 1
            state.total -= item.price
            } else {
            state.itens.splice(idx, 1)
            state.total -= item.price
            }
        }
        },
        limpar(state) {
        state.itens = []
        state.total = 0
        }
    }
})

export const { adicionar, remover, limpar } = carrinhoSlice.actions
export default carrinhoSlice.reducer