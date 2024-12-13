import ywRequest from '../request/index'

export function getHomeHotSuggests() {
  return ywRequest.get({ url: "/home/hotSuggests" })
}

export function getCategories() {
  return ywRequest.get({ url: "/home/categories" })
}

export function getHouselist(currentPage) {
  return ywRequest.get({ 
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}