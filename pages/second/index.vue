<template>


    <NuxtLayout name="default">
        <div class="flex ml-32">
        <section class="mt-2 ml-96 mt-2 bg-white p-8 shadow-sm border mr-10 w-1/2 invert rounded-md">
            <div class="">
                <div class="">
                    <h1 class="text-4xl font-medium text-center font-sans font-serif mb-4">Sell your Car</h1>
                    <p class="text-center">Your car information!</p>
                </div>
            </div>

            <form class="mt-4" @submit.prevent="formed2">
                <div class="form--wrapper ">
                    <label class="form--label" for="name">Car Model</label>
                    <input v-model="name" class="form--input" type="text" name="name" id="name" required placeholder="Car Model" >

                    
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
                    <label class="form--label" for="name">Address</label>
                    <input v-model="address" class="form--input" type="text" name="address" id="address" required placeholder="Address">
                </div>

                <div class="form--wrapper ">
                    <label class="form--label" for="pic">Picture</label>
                    <input class="form--input " type="file" name="pic" id="pic" required accept="image/*" @change="previewImage2">
                    <img v-if="pic" :src="pic" alt="Preview" class="w-full form--input invert max-w-xs mt-2" type="text" name="pic" id="pic" required placeholder="pic">
                </div>

                <div class="form--wrapper ">
                    <label class="form--label" for="brand">Brand</label>
                    <input v-model="brand" class="form--input" type="text" name="brand" id="brand" required placeholder="Brand">
                </div>
                <div class="form--wrapper ">
                    <label class="form--label" for="description">Description</label>
                    <input v-model="description" class="form--input" type="text" name="description" id="description" required placeholder="Description">
                </div>
                <div class="form--wrapper ">
                    <label class="form--label" for="price">Price</label>
                    <input v-model.number="price" class="form--input" type="number" name="price" id="price" required placeholder="Price">
                </div>


                <div class="form--wrapper">
                    <label class="form--label" for="year">Year</label>
                    <input v-model.number="year" class="form--input" type="number" name="year" id="year" required placeholder="Year">
                </div>

                <div class="form--wrapper">
                    <label class="form--label" for="type">Car Type</label>
                    <input v-model="type" class="form--input" type="text" name="type" id="type" required placeholder="Type of Car">
                </div>

                <button ref="button" type="submit" class="btn btn-primary w-full mb-6">Send your car to us.</button>

            </form>
        </section> </div>
        
    </NuxtLayout>
    
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
const router = useRouter()

import { ref } from 'vue'
const id = ref(null)
const ownername = ref('')
const ownernum = ref('')
const address = ref('')
const name = ref('')
const brand= ref('')
const description = ref('')
const price = ref(0)
const year = ref(0)
const type = ref('')
const pic = ref('')



const previewImage2 = (event: { target: { files: any[]; }; }) => {

const file = event.target.files[0]
const fileName = file.name
pic.value = fileName
}



const formed2 = async () => {
    try {
        const response = await fetch('http://localhost:8090/used/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id?.value,
                name: name.value,
                brand: brand.value,
                description: description.value,
                price: price.value,
                year: year.value,
                type: type.value,
                pic: pic?.value
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






</script>

<style scoped>

</style>
