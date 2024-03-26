import { useEffect, useState } from "react";
import { useQuery } from "../Searchbar/SearchDataProvider";
import { Fetch } from "../fetchData/fetch";

export default function People() {
    const { query } = useQuery();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await Fetch(query);
                setData(fetchedData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <ul>
                    {data.results.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}