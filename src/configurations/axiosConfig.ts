import axios, { AxiosRequestConfig } from 'axios'

const basicConfig: AxiosRequestConfig = {
  maxContentLength: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}

export const basicAxiosFetch = axios.create(basicConfig)
export const isAxiosError = axios.isAxiosError
