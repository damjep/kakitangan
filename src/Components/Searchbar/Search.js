import { useQuery } from "./SearchDataProvider";

{/* Search Bar */}

export default function SearchBar() {
    const {query, setQuery} = useQuery('');

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(query);
    }

    return (<>
        <form id="search" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={query} onChange={handleInputChange}></input>
            <button type="submit">Submit</button>
        </form>
    </>)
}