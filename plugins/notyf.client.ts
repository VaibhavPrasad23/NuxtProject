'use strict'

import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

export default defineNuxtPlugin((nuxtApp) => {

  const notyf = new Notyf()

  const error: (msg: string) => void = (msg: string) => notyf.error(msg)
  const success: (msg: string) => void = (msg: string) => notyf.success(msg)

  nuxtApp.provide('notyfError', error)
  nuxtApp.provide('notyfSuccess', success)
})
