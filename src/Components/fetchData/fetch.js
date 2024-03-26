import axios from "axios";

export async function Fetch(query) {
    
    try {
        const response = await axios.get(
            `https://swapi.dev/api/people/?search=${query}`
        )

        return response.data
    } catch (error) {
        console.log(error)
    }
}