import type { ICars } from "@/interfaces/cars.interface"

export default defineEventHandler(async event => {

  // get param
  const category = getRouterParam(event, 'category')

  // fetching products by category
  const response: ICars = await $fetch(`http://localhost:8090/car/brandz/${category}`)

  // return to client
  return response
})
