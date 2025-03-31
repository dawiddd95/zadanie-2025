import { Product } from '../products/productsSlice'
import ProductCard from '../products/ProductCard/ProductCard'
import styles from './TopProductList.module.scss'

interface Props {
  products: Product[]
}

const TopProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default TopProductList
