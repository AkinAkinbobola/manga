export default defineEventHandler(async (event) => {
    const {chapterId} = event.context.params
    const uri = `https://api.mangadex.org/at-home/server/${chapterId}`
    return await $fetch(uri)
})