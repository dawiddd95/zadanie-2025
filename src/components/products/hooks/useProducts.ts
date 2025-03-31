import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../productsSlice'

export const useProducts = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        
        dispatch(setProducts(data))
      } catch (err) {
        setError('Błąd ładowania produktów')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [dispatch])

  return { loading, error }
}
