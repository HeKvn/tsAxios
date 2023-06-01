import { AxiosRequestConfig } from '../types'
import { bulidURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

// 处理url
function transformUrl(config: AxiosRequestConfig) {
  const { url, params } = config
  return bulidURL(url, params)
}

// 处理请求数据
function transformRequestData(config: AxiosRequestConfig) {
  const { data } = config
  return transformRequest(data)
}

// 处理请求头
function transformHeaders(config: AxiosRequestConfig) {
  const { data, headers } = config
  return processHeaders(headers, data)
}

function processConfig(config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function axios(config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

export default axios
