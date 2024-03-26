import { useEffect, useState } from "react";
import { useQuery } from "../Searchbar/SearchDataProvider";
import { Fetch } from "../fetchData/fetch";
import "./People.css"
import { useLeftData } from "../LeftBar/useLeft";
import People from "./People";
import { useData } from "../fetchData/useData";
import Films from "./films";
import Starships from "./Starships";

export default function Data() {
    const { query } = useQuery();
    const {state} = useLeftData();
    const {data, newData, setNewData} = useData();

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
        
        else if (state == 'films') {
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
        if(state) {
            console.log('test' + data + state);
        }
    }, [query])

    return (
        <>
            {data && (
                <>
                {/* For People Only */}
                {state == 'people'  && (
                    <People data={data} newData={newData} handleClick={handleClick}/>
                )}

                {/* For Films Only */}
                {state == 'films' && (
                    <Films data={data} newData={newData} handleClick={handleClick}/>
                )}

                {/* For Starships Only */}
                {state === 'starships' && (
                    <Starships data={data} newData={newData} handleClick={handleClick}/>
                )}
                </>
            )}
        </>
    );
}