<template>
    <Head>
        <Title>Product | {{ product?.name }}</Title>
        <Meta name="description" :content="product?.description"></Meta>
    </Head>
    <NuxtLayout name="default">
        <ProductDetail :product="product"></ProductDetail>  

        
    </NuxtLayout>

</template>

<script setup lang="ts">

import type { ICar } from '../../interfaces/car.interface'

const { id } = useRoute().params

const URI: string = `http://localhost:8090/used/${ id }`

const { data: product }: { data: Ref<ICar> } = await useFetch(URI, { key: URI })



    const URI2: string = `http://localhost:8090/used/getInfo/${id}/`

const { data: oldprod }: { data: Ref<ICar> } = await useFetch(URI2, { key: URI2 })



if ( !product.value ) {
    throw createError({ statusCode: 404, message: `Car detail with ID ${ id } not found` })
}




</script>
