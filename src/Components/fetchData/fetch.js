import axios from "axios";

export async function Fetch(query, state) {
    
    try {
        const response = await axios.get(
            `https://swapi.dev/api/${state}/?search=${query}`
        )

        return response.data
    } catch (error) {
        console.log(error)
    }
}