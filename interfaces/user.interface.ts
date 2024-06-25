interface IProfileUser {
  firstname: string
  lastname: string
}

export interface IUser {
  id?: number
  email?: string
  password?: string
  username?: string
  // name: IProfileUser
}


export interface IRequestBody {
  username: string
  password: string
  id: number
}


export interface IResponse {
  status: boolean
  message: string
  data: Object | Array<any>
}
