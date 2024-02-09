export default defineEventHandler(async (event) => {
    const baseUrl = 'https://api.mangadex.org';
    const languages = ['en'];

    const {mangaId} = event.context.params
    const uri = `${baseUrl}/manga/${mangaId}/feed`
    return await $fetch(uri)
})