<template>
    <NuxtLayout name="default">
        <h1 class="text-2xl text-red-900">Your Carts</h1>
        <p class="mb-4 text-gray-800">Here are your cart items.</p>
        <template v-for="cart in carts.getCarts" :key="cart">
            <!-- card -->
            <div class="w-full p-4 rounded border mb-3 bg-white grid grid-cols-2 justify-between">
                <span>
                    <NuxtLink :to="`/cars/${ cart.productId }`" class="text-xl text-blue-900">Product No: {{ cart.productId }}</NuxtLink>
                    <p>{{ cart.quantity }} item</p>
                </span>
                <span class="text-right">
                    <p class="text-lg text-red-950">
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        {{ cart.price * cart.quantity }}
                    </p>
                    <button @click="removeCart(cart)" class="btn btn-primary mt-2">Remove</button>
                </span>
            </div>
        </template>
    </NuxtLayout>
</template>

<script setup>

// initial value
const carts = useCartsState()



const removeCart = (cart) => {
  carts.carts = carts.carts.filter(c => c.productId !== cart.productId)
}


</script>


