export default defineEventHandler(async (event) => {
    const uri = 'https://api.mangadex.org/at-home/server/a54c491c-8e4c-4e97-8873-5b79e59da210'
    // const uri = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
    const data = await $fetch(uri);
    // console.log(data)
    // const results = responseData.baseUrl
    return data
})

