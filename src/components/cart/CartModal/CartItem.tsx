import { useDispatch } from 'react-redux'
import { changeQuantity, removeFromCart } from '../cartSlice'
import { Link } from 'react-router-dom'
import styles from './CartModal.module.scss'

interface Props {
  item: {
    id: string
    name: string
    price: number
    quantity: number
    image?: string
  }
  onRequestClose: () => void
}

const CartItem: React.FC<Props> = ({ item, onRequestClose }) => {
  const dispatch = useDispatch()

  return (
    <li className={styles.item}>
      <Link to={`/product/${item.id}`} onClick={onRequestClose}>
        <img src={item.image} alt={item.name} className={styles.item__image} />
      </Link>

      <div className={styles.item__details}>
        <Link to={`/product/${item.id}`} className={styles.item__name} onClick={onRequestClose}>
          {item.name}
        </Link>

        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={e =>
            dispatch(changeQuantity({ id: item.id, quantity: Number(e.target.value) }))
          }
          className={styles.item__input}
        />

        <span className={styles.item__price}>
          {(item.price * item.quantity).toFixed(2)} zł
        </span>
      </div>

      <button
        className={styles.item__remove}
        onClick={() => dispatch(removeFromCart(item.id))}
        aria-label={`Usuń ${item.name} z koszyka`}
      >
        ✕
      </button>
    </li>
  )
}

export default CartItem
