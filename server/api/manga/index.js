export default defineEventHandler(async (event) => {
    const baseUrl = 'https://api.mangadex.org';
    const languages = ['en'];

    const {mangaId} = event.context.params
    const uri = `https://api.mangadex.org/manga?originalLanguage%5B%5D=en`
    return await $fetch(uri)
})