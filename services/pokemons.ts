import { headers } from "next/headers"

export const getAllPokemons = async () => {

    return await fetch("https://api.pokemontcg.io/v2/cards?pageSize=10&page=1", {
        headers: {
            'X-Api-Key': process.env.API_KEY || '',
        },
    })
}
