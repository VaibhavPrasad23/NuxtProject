import type { ICar } from "./car.interface"


export interface ICart {
  userId?: number
  name?: string
  brand?: string
  productId?: number | string
  title?: string
  price?: number
  quantity?: number
  picture?: string
}
