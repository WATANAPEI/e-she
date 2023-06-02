import { useRouter } from 'next/router'
import { useProductList } from '@/components/hooks/Product/useProductList'

export const ProductList = () => {
  const { products, isLoading } = useProductList()
  const router = useRouter()

  if (isLoading) return <h2>Now Loading...</h2>
  // if (error) return showBoundary(error)

  const addCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push('/cart')
  }
  if (!products) {
    return <h1>No content</h1>
  } else {
    const productItemView = products.map(p => (
      <aside key={p.productId}>
        <header>{p.fullName}</header>
        <p>productId: {p.productId}</p>
        <p>
          standardPrice: {p.standardPrice}
          {p.currency}
        </p>
        <p>stock status: {p.stock}</p>
        <button onClick={addCart}>Add cart</button>
      </aside>
    ))
    return <section>{productItemView}</section>
  }
}
