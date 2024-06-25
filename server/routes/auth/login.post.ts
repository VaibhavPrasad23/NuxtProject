import type { IUser } from "../../../interfaces/user.interface"
import type { ISession } from "../../../interfaces/session.interface"

interface IRequestBody {
  username: string
  password: string
  id: number
}

interface IResponse {
  status: boolean
  message: string
  data: Object | Array<any>
}

interface IToken {
  token: string
}

interface ISessionAuth {
  name: {
    firstname: string,
    lastname: string
  },
  id: number
}

export default defineEventHandler(async event => {

  // parse body
  const body: IRequestBody = await readBody(event)

  try {
    // fetching
    // const response: IToken = await $fetch('http://localhost:8090/user', {
    //   method: 'POST',
    //   body
    // })

    const user: IUser = await $fetch(`http://localhost:8090/user/${body.id}`, { method: 'GET' })
    const session: ISession = event.context.session

    session.auth = {
      name: {
        firstname: user.username,
        lastname: user.email
      },
      id: user.id,
    } as ISessionAuth

    return {
      status: true,
      message: 'Login success',
      data: {
        ...user
      }
    } as IResponse

  } catch (err: any) {
    return {
      status: false,
      message: err?.data,
      data: {}
    } as IResponse
  }

})
