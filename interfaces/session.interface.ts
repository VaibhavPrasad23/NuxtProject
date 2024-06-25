export interface ISession {
  auth?: {
    name?: {
      firstname?: string
      lastname?: string

    }
    carname?: string
    id?: number
    token?: string
  }
}

export interface ISessionAuth {
  name: {
    firstname: string,
    lastname: string
  },
  id: number
}
