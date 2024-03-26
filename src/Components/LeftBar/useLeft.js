import { createContext, useContext, useState } from "react";

const useLeftContext = createContext();

export const useLeftData = () => {
    return useContext(useLeftContext)
}

export function UseLeftDataProvider({children}) {
    const [state, setState] = useState("");

    return (<>
        <useLeftContext.Provider value={{state, setState}}>
            {children}
        </useLeftContext.Provider>
    </>)
}