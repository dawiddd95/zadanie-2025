import CartButton from '../../cart/CartButton/CartButton'
import styles from './Header.module.scss'
import { ReactComponent as CartIcon } from '../../../assets/logo-cart-icon.svg'

interface HeaderProps {
  onCartClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>
        <CartIcon className={styles.header__logoIcon} />
        <span className={styles['header__logo--my']}>My</span>
        <span className={styles['header__logo--shop']}>Shop</span>
      </h1>
      <CartButton onClick={onCartClick} />
    </header>
  )
}

export default Header
