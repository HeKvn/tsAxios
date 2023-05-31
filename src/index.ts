import { AxiosRequestConfig } from '../types'
import { bulidURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import xhr from './xhr'

function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return bulidURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig) {
  const { data } = config
  return transformRequest(data)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
