import type { IUser } from "../../../interfaces/user.interface"

export default defineEventHandler(async event => {

  const users: IUser[] = await $fetch('http://localhost:8090/user')

  const index: number = Math.floor(Math.random() * (users.length - 1))

  const user: IUser = {
    id: users[index].id,
    email: users[index].email,
    password: users[index].password,
    username: users[index].username,
  }

  return user ?? null
})
