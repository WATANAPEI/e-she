import { Footer } from '@/components/layout/Footer'
import { BasicHtmlHead } from '@/components/layout/BasicHtmlHeader'
import { Header } from '@/components/layout/Header'
import { ProductList } from './ProductList'
import { GlobalErrorBoundary } from '@/components/layout/GlobalErrorBoundary'
import { ProductPageFallBackContent } from '@/components/layout/ProductPageFallBackContent'
import { TestErrorComponent } from './TestErrorComponent'

export const ProductsPage = () => {
  return (
    <GlobalErrorBoundary FallbackComponent={ProductPageFallBackContent}>
      <BasicHtmlHead
        title="Product top page"
        description="This is product top page."
      />
      <Header />
      <ProductList />
      {/* <TestErrorComponent /> */}
      <Footer />
    </GlobalErrorBoundary>
  )
}
