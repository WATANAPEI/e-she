import Link from 'next/link'
import { FallbackProps } from 'react-error-boundary'
export const ProductPageFallBackContent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  return (
    <>
      <p>error: {error.message}</p>
      <h1>ErrorBoundary caught error from product page</h1>
      <Link href="/">Back to home</Link>
      <button onClick={resetErrorBoundary}>retry</button>
    </>
  )
}
