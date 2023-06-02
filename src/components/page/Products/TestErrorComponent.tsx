import { useErrorBoundary } from 'react-error-boundary'
export const TestErrorComponent = () => {
  const { showBoundary } = useErrorBoundary()
  //   throw new Error()
  const handleClick = () => {
    // showBoundary(new Error('error from TestErrorComponent'))
    throw new Error('error from TestErrorComponent')
  }

  return (
    <section>
      <button onClick={handleClick}>Throw error</button>
    </section>
  )
}
