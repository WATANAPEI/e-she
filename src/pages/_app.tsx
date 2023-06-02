import '@/styles/mvp.css'
import type { AppProps } from 'next/app'
import { GlobalErrorBoundary } from '@/components/layout/GlobalErrorBoundary'
import { FallBackContent } from '@/components/layout/FallBackContent'
import { BasicSwrConfig } from '@/components/layout/BasicSwrConfig'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../.mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalErrorBoundary FallbackComponent={FallBackContent}>
      <BasicSwrConfig>
        <Component {...pageProps} />
      </BasicSwrConfig>
    </GlobalErrorBoundary>
  )
}
