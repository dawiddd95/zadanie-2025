import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import styles from './CartButton.module.scss'

interface CartButtonProps {
  onClick: () => void
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const isCartNotEmpty = totalItemsInCart > 0

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles['cart-button']} ${isCartNotEmpty ? styles['cart-button--active'] : ''}`}
      aria-label={`Koszyk: ${totalItemsInCart} ${totalItemsInCart === 1 ? 'produkt' : 'produktów'}`}
    >
      Koszyk ({totalItemsInCart})
    </button>
  )
}

export default CartButton
