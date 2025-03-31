import { useEffect, useState } from 'react'

export const useProductById = (id: string) => {
  const [product, setProduct] = useState<null | any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        
        if (!res.ok) throw new Error('Produkt nie został znaleziony')
        
        const data = await res.json()
        setProduct(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  return { product, loading, error }
}
