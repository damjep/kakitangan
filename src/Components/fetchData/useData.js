import { createContext, useContext, useEffect, useState } from "react";
import { Fetch } from "./fetch";
import { useQuery } from "../Searchbar/SearchDataProvider";

const useDataContext = createContext();

export const useData = () => {
    return useContext(useDataContext);
}

export function UseDataProvider({children}) {
    const [data , setData] = useState('');
    const {query} = useQuery();

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const fetched = await Fetch(query);
                setData(fetched)
                console.log(fetched);

            } catch(error) {
                console.log(error);
            }
        }
        
        fetchData();
    }, []);

    return (<>
        <useDataContext.Provider value={data} >
            {children}
        </useDataContext.Provider>
    </>)
}
