<template>
    <section class="bg-white max-w-96 p-4 flex flex-col justify-between rounded-lg shadow-sm duration-300 border border-gray-100 hover:border-blue-500 hover:shadow-blue-400 hover:shadow-lg hover:-translate-y-1">
        <section class="grid grid-cols-1 gap-1">
            <div class="grid place-items-center">
                <!-- <NuxtImg  preset="avatar" :src="car?.pic'" quality="100" width="200" height="100" format="png"></NuxtImg> -->
                <img :src="car?.pic" alt="Logo" class="w-100 h-auto mr-5 mb-8">

            </div>
            <section class= "ml-2">
                <div>
                    <small class="text-gray-500">Car</small>
                    <h1 class=" text-l truncate">{{ car?.name }}</h1>
                </div>
                <div>
                    <small class="text-gray-500 mb-4">Price</small>
                    <h1 class=" text-sm">₹{{ car?.price }}</h1>
                </div>
                
                <div class="mb-4" v-if="$route.path.includes('secondhand')">
                    <small class="text-gray-500 mb-4">Owner</small>
                    <h1 class=" text-sm">{{ car?.ownername}}</h1>
                </div>
            </section>
        </section>
        <NuxtLink class="btn btn-primary mt-2" :to="`/${ $route.path.includes('showroom') ? 'showroom' : 'secondhand'}/${ car?.id }`">Details</NuxtLink>
    </section>
</template>

<script setup lang="ts">

import type { ICar } from '../interfaces/car.interface'

const props = defineProps({
    car: {
        type: Object as () => ICar,
        required: true
    }
})




</script>