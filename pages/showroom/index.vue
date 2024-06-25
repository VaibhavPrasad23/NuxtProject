<template>
    <NuxtLayout name="default">

        <section class="mb-8">
            <h2 class="text-blue-800 text-xl">Car Search</h2>
            <p class="text-gray-700">Welcome to iCube's Car Showroom.</p>
        </section>

        <!-- <ProoductCategory @category:change="categoryHandler" ></ProoductCategory> -->

        <section v-if="!pending" class="my-5 md:text-right">
            <p class="text-gray-600">Showing {{ cars?.name }} cars</p>
        </section>

        <section v-if="!pending" class="grid md:grid-cols-4 grid-cols-1 gap-4">
            <template v-for="car in cars" :key=car?.id>
                <CarCard :car="car"></CarCard>
            </template>
        </section>

        <section v-else class="mt-12">
            <p class="text-center">Please wait ...</p>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">

import type { ICar } from '../../interfaces/car.interface';

useHead({
    title: 'List of Cars',
    meta: [
        { name: 'description', content: 'List of cars.' }
    ]
})

const { data: cars, pending }: { data: Ref<ICar[]>, pending: Ref<boolean> } = await useFetch('/api/cars/', { lazy: true })

const   categoryHandler = async (URI: string) => {

    pending.value = true

    await useFetch(URI, {
        key: URI,
        onResponse({ response }) {
            cars.value = response?._data
        }
    })

    pending.value = false
}

</script>