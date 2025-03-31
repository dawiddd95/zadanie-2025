import { useParams, useNavigate } from 'react-router-dom'
import styles from './ProductDetail.module.scss'
import { ReactComponent as CartIcon } from '../../../assets/logo-cart-icon.svg'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../cart/cartSlice'
import { useProductById } from '../hooks/useProductById'

const ProductDetail: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { product, loading, error } = useProductById(id)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!loading && !product) {
      navigate('/404')
    }
  }, [loading, product, navigate])

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity,
        image: product.image
      }))
    }
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  if (loading) return <p>Ładowanie...</p>
  if (error) return <p>{error}</p>
  if (!product) return null

  return (
    <div className={styles['product-detail']}>
      <img src={product.image} alt={product.title} className={styles['product-detail__image']} />
      <div className={styles['product-detail__info']}>
        <h2 className={styles['product-detail__title']}>{product.title}</h2>
        <p className={styles['product-detail__price']}>{product.price.toFixed(2)} zł</p>
        <p className={styles['product-detail__description']}>{product.description}</p>
        <p className={styles['product-detail__stock']}>
          Dostępna ilość: {product.rating?.count ?? 'Brak danych'}
        </p>

        <div className={styles['product-detail__action']}>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className={styles['product-detail__input']}
            aria-label="Wprowadź ilość"
          />
          <button
            type="button"
            className={styles['product-detail__button']}
            onClick={handleAddToCart}
            aria-label={`Dodaj ${quantity} szt. produktu ${product.title} do koszyka`}
          >
            <CartIcon className={styles['product-detail__icon']} />
            <span>Dodaj do koszyka</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
