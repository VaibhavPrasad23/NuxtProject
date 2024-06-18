<template>
    <header class="sticky top-0 left-0 right-0 z-20">
        <nav class="bg-black shadow-sm flex justify-between px-8 py-6">
            <NuxtLink class="font-semibold text-blue-200 text-lg" to="/">
                <text class="text-red-500">i</text>Cube Systems Marketplace
            </NuxtLink>
            
        </nav>
    </header>
    
    <main class="bg-gray-50 p-8 grid place-items-center">
        <slot />
    </main>
</template>