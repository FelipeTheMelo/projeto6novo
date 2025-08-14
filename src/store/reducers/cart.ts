import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Tipagem para itens do carrinho
export interface CartItem {
  id: number
  nome: string
  foto: string
  porcao: string
  preco: number
  quantidade: number
}

interface CartState {
  items: CartItem[]
  opened: boolean
}

const initialState: CartState = {
  items: [],
  opened: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    open: (state) => {
      state.opened = true
    },
    close: (state) => {
      state.opened = false
    },
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

// Exportando ações
export const { open, close, add, remove, clear } = cartSlice.actions

// Exportando reducer
export const cartReducer = cartSlice.reducer
