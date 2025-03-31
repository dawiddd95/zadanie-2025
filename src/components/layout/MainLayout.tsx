import React, { useState } from 'react'
import Header from './Header/Header'
import CartModal from '../cart/CartModal/CartModal'
import styles from './MainLayout.module.scss'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <main className={styles.container}>{children}</main>
      <CartModal isOpen={isCartOpen} onRequestClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default MainLayout
