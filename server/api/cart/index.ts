import type { ISession } from "../../../interfaces/session.interface"
import type { ICart } from "../../../interfaces/cart.interface"

export default defineEventHandler(async event => {

  const session: ISession = event.context.session

  const userId = session?.auth?.id

  const response: ICart = await $fetch(`http://localhost:8090/car/${userId}`)

  return response
})
