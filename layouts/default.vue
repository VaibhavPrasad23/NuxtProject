<template>
    <header class="sticky top-0 left-0 right-0 z-20">
        <nav class="bg-black shadow-sm flex justify-between items-center px-8 py-6">
            <NuxtLink class="font-semibold text-blue-200 text-lg flex" to="/">

                <text class="text-red-500">i</text>Cube Systems<text class="text-white"> Showroom</text>
            </NuxtLink>
            <ul :class="isSidebar ? 'right-0' : '-right-full'"
                class="flex flex-col md:flex-row gap-4 items-end md:items-center p-8 md:p-0 fixed md:static top-20 bottom-0 text-white duration-300 ease-in">
                <li>
                    <NuxtLink to="/second" class="mr-4">Sell Your Car</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/form">Add Car</NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/secondhand" class="pl-4">Used Cars</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/showroom" class="pl-4">Showroom</NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/about" class="pl-4">About Us</NuxtLink>
                </li>
                
                <li v-if="!session?.auth">
                    <NuxtLink to="/login" class="btn btn-primary">Login</NuxtLink>
                </li>
                <li v-else><button type="button" @click="logout" class="btn btn-primary">Logout</button></li>
            
            </ul>

            <!-- sidebar toggler -->
            <button @click="isSidebar = !isSidebar" class="btn md:hidden text-blue-500"><i class="fa-solid"
                    :class="isSidebar ? 'fa-times' : 'fa-bars'"></i></button>
        </nav>
    </header>


    <main class="p-8">
        <slot />
    </main>
</template>

<script setup lang="ts">

// composabels
const { session } = await useSession()
const router = useRouter()


const isSidebar: Ref<boolean> = ref(false)

const logout = async () => {

    const { data } = await useFetch('/auth/logout', { method: 'PUT' })

    if (data.value) router.push('/login')
}




</script>
