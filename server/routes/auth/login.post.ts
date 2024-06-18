import type { IUser } from "../../../interfaces/user.interface"
import type { ISession } from "../../../interfaces/session.interface"

// define interface for user login
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

    // get spesific user using ID
    const user: IUser = await $fetch(`http://localhost:8090/user/${body.id}`, { method: 'GET' })

    // access session
    const session: ISession = event.context.session

    // save user credential into session
    session.auth = {
      name: {
        firstname: user.username,
        lastname: user.email
      },
      id: user.id,
    } as ISessionAuth

    // return to client
    return {
      status: true,
      message: 'Login success',
      data: {
        ...user
      }
    } as IResponse

  } catch (err: any) {
    // failed authentication
    return {
      status: false,
      message: err?.data,
      data: {}
    } as IResponse
  }

})
