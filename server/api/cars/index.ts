import type { ICars } from "../../../interfaces/cars.interface"

export default defineEventHandler(async event => {

  // fetching all products
  const response: ICars = await $fetch('http://localhost:8090/car/', {
    responseType: 'json'
  })

  // return to client
  return response
})
