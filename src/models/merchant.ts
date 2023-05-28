export default interface Merchant {
  id: string
  name: string
  description: string
  image: string
  rating: number | null
  numOfOrder: number | null
  distance: number
}

export interface MerchantApiPayload {
  currentPage: number
  maxPage: number
  data: Array<Merchant>
}
