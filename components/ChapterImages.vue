<script setup>
const {data} = defineProps(["data"])
const baseUrl = data.baseUrl
const hash = data.chapter.hash;
const images = data.chapter.data
const quality = "data"
const currentIndex = ref(0)
const nextImage = () => {
  if (currentIndex.value < images.length - 1) {
    currentIndex.value += 1;
  }
};
</script>

<template>
<div>
  <img :src="`${baseUrl}/${quality}/${hash}/${images[currentIndex]}`" alt="" @click="nextImage">
  <div>{{ currentIndex + 1 }} of {{ images.length }}</div>
</div>
</template>