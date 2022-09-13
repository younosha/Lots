export interface Lot {
  id: string
  dealType: string
  beginDate: string
  endDate: string
  isResourceAvailable: boolean
  number: string
  vatIncluded: boolean
  participants: {
    count: number
  }
  item: {
    id: string
    totalPrice: number
    price: number
    measurementUnit: string
    category: string
    group: string
    mark: null | string
    quantity: number
    description: string
  }
  location: null
  distance: number	
}