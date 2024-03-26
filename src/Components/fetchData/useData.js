import { createContext, useContext, useEffect, useState } from "react";
import { Fetch } from "./fetch";
import { useQuery } from "../Searchbar/SearchDataProvider";
import { useLeftData } from "../LeftBar/useLeft";

const useDataContext = createContext();

export const useData = () => {
    return useContext(useDataContext);
}

export function UseDataProvider({children}) {
    const [data , setData] = useState('');
    const {query} = useQuery();
    const {state} = useLeftData();

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const fetched = await Fetch(query, state);
                setData(fetched)
                console.log(fetched);

            } catch(error) {
                console.log(error);
            }
        }
        
        fetchData();
    }, [query, state]);

    return (<>
        <useDataContext.Provider value={{data,setData}} >
            {children}
        </useDataContext.Provider>
    </>)
}
