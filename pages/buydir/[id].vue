<template>


    <NuxtLayout name="default">
    <div class="flex ml-32">

        <section class="mt-2 ml-96 mt-2 bg-white p-8 shadow-sm border mr-10 w-1/2 invert rounded-md">
            <div class="">
                <div class="">
                    <h1 class="text-4xl font-medium text-center font-sans font-serif mb-4">Buy this Car</h1>
                    <p class="text-center">Buyer's information!</p>
                </div>
            </div>

            <form class="mt-4" @submit.prevent="formed2">


                
                <div class="form--wrapper ">
                    <label class="form--label" for="name">Car Model</label>
                    <input v-model="id" class="form--input" type="text" name="name" id="name" placeholder="Car Model">
                    
                </div>

                <div class="form--wrapper ">
                    <label class="form--label" for="name">Owner Name</label>
                    <input v-model="ownername" class="form--input" type="text" name="ownername" id="ownername" required placeholder="Owner's Name">
                    
                </div>

                <div class="form--wrapper ">
                    <label class="form--label" for="name">Owner's Number</label>
                    <input v-model="ownernum" class="form--input" type="text" name="ownernum" id="ownernum" required placeholder="Owner's Number">
                </div>


                <div class="form--wrapper ">
                    <label class="form--label" for="name">Price</label>
                    <input v-model="price" class="form--input" type="number" name="price" id="price" required placeholder="Owner's Number">
                </div>

                <div class="form--wrapper ">
                    <label class="form--label" for="name">Address</label>
                    <input v-model="address" class="form--input" type="text" name="address" id="address" required placeholder="Address">
                </div>

             <button ref="button" type="submit" class="btn btn-primary w-full mb-6">Send your car to us.</button>
             

                

            </form>
        </section> 
    </div>
        
    </NuxtLayout>
    
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
const router = useRouter()

import { ref } from 'vue'

const ownername = ref('')
const ownernum = ref('')
const address = ref('')



const formed2 = async () => {
    try {
        const response = await fetch("http://localhost:8090/car/buyCar/"+ id , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                name: namez,
                brand: brandz,
                description: descriptionz,
                price: pricez,
                pic: picz,
                type: typez,
                year: yearz,
                ownername: ownername?.value,
                ownernum: ownernum?.value,
                address: address?.value,

            })
        })
        if (response.ok) {
            alert('Data added successfully')
            router.push('/')
        } else {
            alert('Data added failed')
        }
    } catch (error) {
        console.error(error)
        alert('An error occurred while adding data')
    }
}


import type { ICar } from '../../interfaces/car.interface'

const { id } = useRoute().params

const URI: string = 'http://localhost:8090/car/car-model/'+  id 



const { data: carName }: { data: Ref<ICar> } = await useFetch(URI, { key: URI })
const namez = carName.value?.name
const brandz = carName.value?.brand
const descriptionz = carName.value?.description
const pricez = carName.value?.price
const picz = carName.value?.pic
const typez = carName.value?.type
const yearz = carName.value?.year

const { data: product }: { data: Ref<ICar> } = await useFetch(URI, { key: URI })



</script>

<style scoped>

</style>
