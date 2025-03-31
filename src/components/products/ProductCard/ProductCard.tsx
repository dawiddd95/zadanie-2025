import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../cart/cartSlice'
import { Product } from '../productsSlice'
import styles from './ProductCard.module.scss'
import { ReactComponent as CartIcon } from '../../../assets/logo-cart-icon.svg'

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.image
      })
    )
  }

  return (
    <div className={styles['product-card']}>
      <Link
        to={`/product/${product.id}`}
        className={styles['product-card__image-wrapper']}
        aria-label={`Zobacz szczegóły produktu ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className={styles['product-card__image']}
        />
      </Link>

      <Link
        to={`/product/${product.id}`}
        className={styles['product-card__title']}
      >
        {product.title}
      </Link>

      <p className={styles['product-card__price']}>
        {product.price.toFixed(2)} zł
      </p>

      <button
        type="button"
        className={styles['product-card__button']}
        onClick={handleAddToCart}
        aria-label={`Dodaj ${product.title} do koszyka`}
      >
        <CartIcon className={styles['product-card__icon']} />
        <span>Dodaj do koszyka</span>
      </button>
    </div>
  )
}

export default ProductCard
