import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useProductById } from './useProductById'
import { addToCart } from '../../cart/cartSlice'

export const useProductDetail = () => {
  const { id = '' } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState<number>(1)

  const { product, loading, error } = useProductById(id)

  useEffect(() => {
    if (!loading && !product) {
      navigate('/404')
    }
  }, [loading, product, navigate])

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity,
          image: product.image
        })
      )
    }
  }

  return {
    product,
    loading,
    error,
    quantity,
    handleQuantityChange,
    handleAddToCart,
  }
}
