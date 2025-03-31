import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductList.module.scss'

const ITEMS_PER_PAGE = 10

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const [page, setPage] = useState(1)

  const start = (page - 1) * ITEMS_PER_PAGE
  const paginated = products.slice(start, start + ITEMS_PER_PAGE)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {paginated.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.pageButton} ${page === i + 1 ? styles.active : ''}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductList
