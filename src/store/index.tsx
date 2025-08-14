import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cart'
import { api } from '../services/api' // seu RTK Query API

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

// Tipagem global do store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
