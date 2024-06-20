<template>
  <NuxtLayout name="default">
    <section class="mb-8">
      <h2 class="text-5xl font-serif font-medium mb-2">Hello, {{ getUserName() ?? 'User' }}</h2>
      <p class="text-gray-500 pt-6">Welcome to iCube's Marketplace.</p>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">

const { session } = await useSession()

const getUserName = (): string => {

  const { firstname, lastname }: { firstname: string, lastname: string } = session.value?.auth?.name  
  
  return `${ setUppercaseAtFirstChar(firstname)  }`
}

const setUppercaseAtFirstChar = (word: string): string => {

  const wordInArray: string[] = word.split('')

  wordInArray[0] = wordInArray[0].toUpperCase()

  return wordInArray.join('')
}

</script>