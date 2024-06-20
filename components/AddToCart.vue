<template>
    <section class="flex gap-2 items-center">
        <button @click="decreaseQuantity" :disabled="quantity == 0" class="btn btn-primary"><i class="fa-solid fa-minus"></i></button>
        <span class="text-lg text-blue-500 px-6">{{ quantity }}</span>
        <button @click="increaseQuantity" class="btn btn-primary"><i class="fa-solid fa-plus"></i></button>
    </section>
    <section class="text-right flex gap-2 items-center justify-end">
        <span class="text-2xl ">
            <i class="text-red-800">₹</i>
            {{ quantity * price }}
        </span>
        <br>
        <button @click="addCart" class="btn btn-primary" :disabled="quantity == 0">
    
        
            <i class="fa-solid fa-shopping-cart"></i>
            Add To Cart
        </button>
    </section>
</template>

<script setup lang="ts">

import type { ICart } from '../interfaces/cart.interface';

const app = useNuxtApp()
const route = useRoute()
const { session } = await useSession()


const notyfSuccess: any = app.$notyfSuccess

const carts = useCartsState()

const quantity: Ref<number> = ref(0)
  const userId = session.value?.auth?.id

const availableCart: Ref<ICart | undefined> = ref(carts.getCartByProductId(route.params?.id))

if (availableCart.value) quantity.value = availableCart.value.quantity

const props = defineProps({
    productId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: true
    }
})

const decreaseQuantity = (): void => {
    if (quantity.value > 0) quantity.value--
}

const increaseQuantity = (): void => {
    quantity.value++
}

const addCart = () => {
  carts.addItem({
    productId: props.productId,
    price: props.price,
    quantity: quantity.value,
    picture: props.picture,
    title: props.title,
    userId
  })

  notyfSuccess('Successfully added item to cart!')
}

</script>