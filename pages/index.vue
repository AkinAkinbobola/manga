<script setup>
const {data} = await useFetch('/api/getChapter')
const baseUrl = data.value.baseUrl
const hash = data.value.chapter.hash;
const images = data.value.chapter.data
const quality = "data"
</script>

<template>
  <div>
    <div v-for="image in images">
      <img :src="`${baseUrl}/${quality}/${hash}/${image}`" alt="">
    </div>
  </div>

</template>

<style scoped>

</style>