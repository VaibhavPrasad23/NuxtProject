export default defineEventHandler(async event => {

  const response: Array<String> = await $fetch('http://localhost:8090/car/brandz')


  return response;
})