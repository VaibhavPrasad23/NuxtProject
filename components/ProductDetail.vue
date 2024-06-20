<template>
    <section class="bg-white p-12 rounded-lg border flex flex-col md:flex-row gap-12">
        <div class="md:w-4/12">
            <!-- <NuxtImg preset="avatar" :src="product?.pic" quality="80" format="webp" preload loading="lazy"></NuxtImg> -->
                            <img :src="'/'+ product?.pic" alt="Logo" class="w-100 h-auto mr-5 mb-8">

        </div>

        <!-- detail -->
        <div class="flex flex-col gap-7 md:w-8/12">
            <div>
                <p class="text-blue-500">brand</p>
                <h1 class="text-3xl font-semibold">{{ product?.brand }}</h1>
            </div>
        
            <div>
                <p class="text-blue-500">Model</p>
                <h1 class="text-3xl font-semibold">{{ product?.name }}</h1>
            </div>
            <div>
                <p class="text-blue-500">Year</p>
                <h1 class="text-3xl font-semibold">{{ product?.year }}</h1>
            </div>
            <div>
                <p class="text-blue-500">Price</p>
                <h1 class="text-3xl font-semibold">₹{{ product?.price }}</h1>
            </div>
            <div>
                <p class="text-blue-500">Description</p>
                <h1 class="text-sm text-gray-500">{{ product?.description }}</h1>
            </div>
            <div>
                <div class="mb-4" v-if="$route.path.includes('secondhand')">
                    <NuxtLink class="btn btn-primary mt-2" :to="`/buy/${ product?.name }`">Buy</NuxtLink>
                </div>
                <div class="mb-4" v-if="$route.path.includes('cars')">
                <AddToCart :product-id="product?.id ?? 0" :title="product?.name" :price="product?.price ?? 0" :picture="product?.pic ?? 0"></AddToCart>
            </div>
            </div>
        </div>
        
    </section>
</template>

<script setup lang="ts">

import type { ICar } from '../interfaces/car.interface'

const props = defineProps({
    product: {
        type: Object as () => ICar,
        required: true
    }
})


</script>