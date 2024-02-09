export default defineEventHandler(async (event) => {
    const baseUrl = 'https://api.mangadex.org';

    const {mangaId} = event.context.params
    const uri = `${baseUrl}/cover/${mangaId}`
    return await $fetch(uri)
})