<template>
    <section class="bg-white max-w-96 p-4 flex flex-col justify-between rounded-lg shadow-sm duration-300 border border-gray-100 hover:border-blue-500 hover:shadow-blue-400 hover:shadow-lg hover:-translate-y-1">
        <section class="grid grid-cols-1 gap-1">
            <div class="grid place-items-center">

            </div>
            <section class= "ml-2">
                <div>
                    <small class="text-gray-500">Car</small>
                    <h1 class=" text-l truncate">{{ car?.revtype }}</h1>
                </div>
                <div>
                    <small class="text-gray-500">Car</small>
                    <h1 class=" text-l truncate">{{ car?.ownername }}</h1>
                </div>
                <div>
                    <small class="text-gray-500 mb-4">Price</small>
                    <h1 class=" text-sm">₹{{ car?.ownernum }}</h1>
                </div>
                
                <div class="mb-4" v-if="$route.path.includes('secondhand')">
                    <small class="text-gray-500 mb-4">Owner</small>
                    <h1 class=" text-sm">{{ car?.address}}</h1>
                </div>
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">

import type { ICar } from '../interfaces/car.interface'

const props = defineProps({
    car: {
        type: Object as () => ICar,
        required: false
    }
})




</script>