import axios from "axios";
{/* Fetches the api data */}

export async function Fetch(query, state) {
    {/* query comes from search bar while state is the type of query like planets */}

    try {
        const response = await axios.get(
            `https://swapi.dev/api/${state}/?search=${query}`
        )

        return response.data
    } catch (error) {
        console.log(error)
    }
}