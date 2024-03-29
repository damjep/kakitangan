import { createContext, useContext, useState } from "react";

const useLeftContext = createContext();

{/* Sets the state of the nav bar */}

export const useLeftData = () => {
    return useContext(useLeftContext)
}

export function UseLeftDataProvider({children}) {
    const [state, setState] = useState(null);

    return (<>
        <useLeftContext.Provider value={{state, setState}}>
            {children}
        </useLeftContext.Provider>
    </>)
}