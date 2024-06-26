import { createContext, useContext, useState } from "react";

const queryContext = createContext();

{/* Sets the context for query */}

export const useQuery = () => {
    return useContext(queryContext);
}

export function QueryContextProvider({children}) {
    const [query, setQuery] = useState('');

    return (<>
        <queryContext.Provider value={{query, setQuery}}>
            {children}
        </queryContext.Provider>
    </>)
}