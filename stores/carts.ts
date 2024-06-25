import { defineStore } from "pinia"
import type { ICart } from "../interfaces/cart.interface"

export const useCartsState = defineStore('carts-state', {

  persist: true,
  state() {
    return {
      carts: []
    } as { carts: Array<ICart> }
  },

  getters: {

    getCarts(state) {
      return state.carts
    },

    getCartByProductId(state) {
      return (productId: any) => state.carts.find(cart => cart.productId == productId)
    },

    
    getCartsByProductName(state) {
      return (productName: any) => state.carts.filter(cart => cart.title == productName)
    },

    getCartsLength(state) {
      return state.carts.length
    }
  },

  actions: {


    addItem(payload: ICart) {
      const isProductExist: boolean = this.carts.some(cart => cart.productId == payload.productId)

      if (isProductExist) {
        this.carts.forEach(cart => {
          if (cart.productId == payload.productId) {
            cart.quantity = payload.quantity
          }
        })
      } else this.carts.push(payload) // push new item
    }
  }
})
