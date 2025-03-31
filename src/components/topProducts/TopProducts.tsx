import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { Product } from '../products/productsSlice'
import TopProductList from './TopProductList'

interface Props {
  products: Product[]
}

class TopProducts extends React.Component<Props> {
  render() {
    const top = [...this.props.products]
      .sort((a, b) => a.price - b.price)
      .slice(0, 3)

    return <TopProductList products={top} />
  }
}

const mapStateToProps = (state: RootState) => ({
  products: state.products.products,
})

export default connect(mapStateToProps)(TopProducts)
