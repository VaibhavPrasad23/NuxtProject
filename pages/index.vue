<template>
  <NuxtLayout name="default">
    <section class="mb-8 text-center">
      <h2 class="text-5xl font-serif font-medium mb-2 capitalize">
        Hello, {{ getUserName() || 'User' }}
      </h2>
      <p class="text-gray-500 pt-6">Welcome to iCube's Marketplace.</p>
    </section>
    <!-- <img preset="avatar" src="/public/indcar.png" /> -->

  </NuxtLayout>
  
</template>

<script setup lang="ts">

const { session } = await useSession()

const getUserName = (): string => {

  const { firstname, lastname }: { firstname: string, lastname: string } = session.value?.auth?.name
  
  return `${ (firstname)  }`
}


</script>
