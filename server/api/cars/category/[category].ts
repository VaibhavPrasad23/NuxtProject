import type { ICars } from "@/interfaces/cars.interface"

export default defineEventHandler(async event => {

  const category = getRouterParam(event, 'category')

  const response: ICars = await $fetch(`http://localhost:8090/car/brandz/${category}`)

  return response
})
