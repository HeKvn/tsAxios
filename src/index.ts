import { AxiosRequestConfig } from '../types'
import { bulidURL } from './helpers/url'
import xhr from './xhr'

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return bulidURL(url, params)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
