import { useEffect } from "react";
import { useQuery } from "../Searchbar/SearchDataProvider";
import { Fetch } from "../fetchData/fetch";
import "./People.css"
import { useLeftData } from "../LeftBar/useLeft";
import People from "./People";
import { useData } from "../fetchData/useData";
import Films from "./films";
import Starships from "./Starships";
import Vehicles from "./vehicles";
import Species from "./Species";
import Planets from "./Planets";

export default function Data() {
    const { query } = useQuery();
    const {state} = useLeftData();
    const {data, newData, setNewData} = useData();
    const {load, setLoad} = useData();

    const handleClick = async (item) => {
        if (state) {
            try {
                const fetchedData = await Fetch(item, state);
                setNewData(fetchedData.results[0]);
                console.log(fetchedData);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        if(state || load) {
            console.log('test' + data + state);
        }
    }, [query, load, state, data])

    useEffect(() => {
        if (newData === null || data === null) {
            setLoad(true)
        }
        else {
            setLoad(false)
        }
    }, [newData, data, setLoad])

    return (
        <>
        <div className="data">
            {data && (
                <>
                {/* For People Only */}
                {state === 'people'  && (
                    <People data={data} newData={newData} handleClick={handleClick}/>
                )}

                {/* For Films Only */}
                {state === 'films' && (
                    <Films data={data} newData={newData} handleClick={handleClick}/>
                )}

                {/* For Starships Only */}
                {state === 'starships' && (
                    <Starships data={data} newData={newData} handleClick={handleClick}/>
                )}

                 {/* For Vehicles Only */}
                 {state === 'vehicles' && (
                    <Vehicles data={data} newData={newData} handleClick={handleClick}/>
                )}

                {/* For Species Only */}
                {state === 'species' && (
                    <Species data={data} newData={newData} handleClick={handleClick}/>
                )}

                {/* For Planets Only */}
                {state === 'planets' && (
                    <Planets data={data} newData={newData} handleClick={handleClick}/>
                )}
                </>
            )}

        </div>
        <span className="loading"> {load !== true ? "" : 'Loading Description'}</span>

        </>
    );
}