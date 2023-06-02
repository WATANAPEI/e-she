import { SWRConfiguration } from 'swr'
import { isAxiosError } from '../../configurations/axiosConfig'
import { SWRConfig } from 'swr'
import { useErrorBoundary } from 'react-error-boundary'

export const BasicSwrConfig: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const { showBoundary } = useErrorBoundary()
  const globalSwrConfig: SWRConfiguration = {
    onError: async (e: any) => {
      if (isAxiosError(e)) {
        const httpStatusCode = e.response?.status
        if (httpStatusCode === 400) {
          console.error(e)
          return
        }
      }
      showBoundary(e)
    }
  }
  return <SWRConfig value={globalSwrConfig}>{children}</SWRConfig>
}
