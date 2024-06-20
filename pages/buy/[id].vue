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
                    <input v-model="id" class="form--input" type="text" name="name" id="name" placeholder="Car Model" readonly>
                    
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
const name = ref('')


const price = ref(0)

const pic = ref('')

const imager = await fetch("http://localhost:8090/used/pic/McLaren%20Speedtail");

const formed2 = async () => {
    try {
        const response = await fetch("http://localhost:8090/used/updatecarown/"+ name.value , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ownername: ownername?.value,
                ownernum: ownernum?.value,
                address: address?.value,
                price: price?.value,

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

const URI: string = 'http://localhost:8090/used/car-model/'+ name.value 
// const URI: string = `http://localhost:8090/used/`+ name.value

const { data: product }: { data: Ref<ICar> } = await useFetch(URI, { key: URI })



</script>

<style scoped>

</style>
