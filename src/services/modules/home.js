import ywRequest from '../request/index'

export function getHomeHotSuggests() {
  return ywRequest.get({ url: "/home/hotSuggests" })
}