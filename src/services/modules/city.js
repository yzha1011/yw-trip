import ywRequest from "@/services/request"

export function getCityAll() {
  return ywRequest.get({
    url: "/city/all"
  })
}