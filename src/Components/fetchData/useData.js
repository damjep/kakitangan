import { createContext, useContext, useEffect, useState } from "react";
import { Fetch } from "./fetch";
import { useQuery } from "../Searchbar/SearchDataProvider";
import { useLeftData } from "../LeftBar/useLeft";

{/* handles all data being fetched and stored in a context for other components to use */}

const useDataContext = createContext();

export const useData = () => {
    return useContext(useDataContext);
}

export function UseDataProvider({children}) {
    const [data , setData] = useState('');
    const [newData, setNewData] = useState(null);
    const {query} = useQuery();
    const {state} = useLeftData();
    const [load, setLoad] = useState(true)

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const fetched = await Fetch(query, state);
                setData(fetched)
                console.log(fetched);
                setLoad(true)

            } catch(error) {
                console.log(error);
                setLoad(false)
            }
        }
        
        fetchData();
    }, [query, state]);

    return (<>
        <useDataContext.Provider value={{data,setData, newData, setNewData, load, setLoad}} >
            {children}
        </useDataContext.Provider>
    </>)
}
