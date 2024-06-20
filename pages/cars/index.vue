<template>
    <NuxtLayout name="default">

        <!-- title -->
        <section class="mb-8">
            <h2 class="text-blue-800 text-xl">Product Search</h2>
            <p class="text-gray-700">Welcome to iCube System's Marketplace.</p>
        </section>
        <!-- end of title -->

        <!-- categories -->
        <ProoductCategory @category:change="categoryHandler" ></ProoductCategory>

        <section v-if="!pending" class="my-5 md:text-right">
            <p class="text-gray-600">Showing {{ cars?.values.name }} cars</p>
        </section>

        <section v-if="!pending" class="grid md:grid-cols-4 grid-cols-1 gap-4">
            <template v-for="cars in cars" :key="cars?.id">
                <!-- card -->
                <CarCard :car="cars"></CarCard>
            </template>
        </section>

        <!-- fetching state -->
        <section v-else class="mt-12">
            <p class="text-center">Please wait ...</p>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">

import type { ICar } from '../../interfaces/car.interface'

useHead({
    title: 'List of Cars',
    meta: [
        { name: 'description', content: 'List of cars.' }
    ]
})

const { data: cars, pending }: { data: Ref<ICar[]>, pending: Ref<boolean> } = await useFetch('/api/cars', { lazy: true })

const categoryHandler = async (URI: string) => {

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