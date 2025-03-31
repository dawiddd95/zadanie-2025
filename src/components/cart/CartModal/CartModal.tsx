import styles from './CartModal.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store'
import { clearCart } from '../cartSlice'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

interface CartModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePurchase = () => {
    dispatch(clearCart())
    alert('Zakup zakończony sukcesem!')
    onRequestClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onRequestClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.modal__close}
          onClick={onRequestClose}
          aria-label="Zamknij koszyk"
        >
          ✕
        </button>

        <h2 className={styles.modal__title}>Twój koszyk</h2>

        {items.length === 0 ? (
          <p className={styles.modal__empty}>Koszyk jest pusty.</p>
        ) : (
          <ul className={styles.modal__list}>
            {items.map(item => (
              <CartItem key={item.id} item={item} onRequestClose={onRequestClose} />
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <CartSummary total={totalPrice} onPurchase={handlePurchase} />
        )}
      </div>
    </div>
  )
}

export default CartModal
