<script setup lang="ts">
const route = useRoute();
const id = useRoute().params.id
// const chapter = ref(null)
const {data} = await useFetch(`/api/chapter/${id}`)
</script>

<template>
<div>
  <ChapterImages :data="data"/>
</div>
</template>

<style scoped>

</style>