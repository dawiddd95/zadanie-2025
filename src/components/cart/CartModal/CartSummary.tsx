import styles from './CartModal.module.scss'

interface Props {
  total: number
  onPurchase: () => void
}

const CartSummary: React.FC<Props> = ({ total, onPurchase }) => (
  <>
    <div className={styles.summary}>Suma: {total.toFixed(2)} zł</div>
    <button className={styles.purchase} onClick={onPurchase}>
      Kup teraz
    </button>
  </>
)

export default CartSummary
