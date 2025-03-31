import ProductList from '../../components/products/ProductList/ProductList'
import TopProductsWithTitle from '../../components/topProducts/TopProductsWithTitle'
import { useProducts } from '../../components/products/hooks/useProducts'

const Home: React.FC = () => {
  const { loading, error } = useProducts()

  if (loading) {
    return <p>Ładowanie produktów...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h2>Lista produktów</h2>
      <ProductList />
      <TopProductsWithTitle />
    </div>
  )
}

export default Home
