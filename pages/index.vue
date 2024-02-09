<script setup>

const {data: manga} = await useFetch(`/api/manga/`)
const mangaData = manga.value.data

const getCoverArt = async (relationships) => {
  const coverArtRelationship = relationships.find(
      (relationship) => relationship.type === 'cover_art'
  );
  if (coverArtRelationship) {
    const coverArtId = coverArtRelationship.id;
    const {data} = await useFetch(`https://api.mangadex.org/cover/${coverArtId}`);
    return data
    // const fileName = await data.value.data.attributes.fileName;
    // return fileName
  }
  //
  return '';
}
</script>

<template>
  <div>
    <div v-for="item in mangaData">
<!--      {{ item.attributes }}-->
<!--      <p></p>-->
<!--      {{item.relationships}}-->
      <p>Title: {{ item.attributes.title.en }}</p>
      <p>Description: {{ item.attributes.description.en }}</p>
      <p>Status: {{ item.attributes.status }}</p>
      <p>Year: {{ item.attributes.year }}</p>
<!--      {{item.relationships}}-->
      <div>
        <p>{{getCoverArt(item.relationships)}}</p>
<!--        <img :src="getCoverArt(item.relationships)" alt="" v-if="getCoverArt(item.relationships)">-->
<!--        <p v-else>Error</p>-->
      </div>
    </div>
  </div>

</template>