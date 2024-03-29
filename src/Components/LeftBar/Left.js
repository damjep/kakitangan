import { useEffect } from "react";
import { useLeftData } from "./useLeft";
import { useData } from "../fetchData/useData";

export default function LeftBar() {
    const {state, setState} = useLeftData();
    const {setNewData} = useData();

    useEffect(() => {
        if (state == null) {
            setState('people')
        }

        else if (state) {
            setNewData(null)
        }
        console.log(state);
    }, [state])
    return (<>
        <div className="leftBar">
            <button onClick={()=> {setState('people')}}>People</button>
            <button onClick={() => setState('films')}>Films</button>
            <button onClick={() => setState('starships')}>Starships</button>
            <button onClick={() => setState('vehicles')}>Vehicles</button>
            <button onClick={() => setState('species')}>Species</button>
            <button onClick={() => setState('planets')}>Planets</button>
        </div>
    </>)
}