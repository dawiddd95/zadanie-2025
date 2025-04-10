import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/cart/cartSlice'
import productsReducer from '../components/products/productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
