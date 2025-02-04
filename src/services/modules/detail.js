import ywRequest from "@/services/request"
export function getDetailInfos(houseId) {
  return ywRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}