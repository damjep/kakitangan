import { useEffect, useState } from "react";
import { useLeftData } from "./useLeft";

export default function LeftBar() {
    const {state, setState} = useLeftData();

    useEffect(() => {
        console.log(state);
    })
    return (<>
        <div>
            <button onClick={()=> setState('people')}>People</button>
            <button onClick={() => setState('films')}>Films</button>
            <button onClick={() => setState('starships')}>Starships</button>
            <button onClick={() => setState('vehicles')}>Vehicles</button>
            <button onClick={() => setState('species')}>Species</button>
            <button onClick={() => setState('planets')}>Planets</button>
        </div>
    </>)
}