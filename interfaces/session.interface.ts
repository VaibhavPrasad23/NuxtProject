export interface ISession {
  auth?: {
    name?: {
      firstname: string
      lastname: string

    }
    id?: number
    token?: string
  }
}


