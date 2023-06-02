import Link from 'next/link'
import { FallbackProps } from 'react-error-boundary'
export const FallBackContent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary
}) => {
  console.error('send sentry here')
  return (
    <>
      <p>error: {error.message}</p>
      <h1>ErrorBoundary caught error from global</h1>
      <Link href="/">Back to home</Link>
      <button onClick={resetErrorBoundary}>retry</button>
    </>
  )
}
