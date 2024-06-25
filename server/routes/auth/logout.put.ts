import type { ISession } from "../../../interfaces/session.interface"

export default defineEventHandler(event => {

  const session: ISession = event.context.session

  session.auth = {}

  Object.keys(session).forEach(key => {
    delete session[key]
  })

  return true
})
