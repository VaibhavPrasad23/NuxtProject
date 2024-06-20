<template>
    <section>
        <p class="mb-2">Category</p>
        <section class="flex gap-2 flex-wrap md:flex-nowrap">
            <button @click="changed('All')" :class="active == 'All' ? 'bg-blue-900 text-gray-100' : 'text-blue-900'" class="btn px-6 border border-blue-900 duration-300">All</button>
            
            <template v-for="category in categories" :key="category">
                <button @click="changed(category)" :class="active == category ? 'bg-blue-900 text-gray-100' : 'text-blue-900'" class="btn border border-blue-900 px-6 duration-300">{{ category }}</button>
            </template>
        </section>
    </section>
</template>

<script setup lang="ts">

const { data: categories }: { data: Ref<string[]> } = await useFetch('/api/cars/category')

const active = ref('All')

const emits = defineEmits(['category:change'])

const changed = (value: string): void => {

    active.value = value
    

    let URI

    if (value == 'All') {
        URI = 'api/cars/'
    } else {
        URI = `api/cars/category/${ value }`
    }

    emits('category:change', URI)
}

</script>
