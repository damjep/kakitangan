import { useEffect, useState } from "react";
import { useQuery } from "../Searchbar/SearchDataProvider";
import { Fetch } from "../fetchData/fetch";
import "./People.css"
import { useLeftData } from "../LeftBar/useLeft";
import People from "./People";
import { useData } from "../fetchData/useData";
import Films from "./films";

export default function Data() {
    const { query } = useQuery();
    const {state} = useLeftData();
    const {data} = useData();
    const [newData, setNewData] = useState();

    const handleClick = async (item) => {
        if (state == 'people') {
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
        if(data || query || state) {
            console.log('test' + data);
        }
    }, [data,state,query])

    return (
        <>
            {data && (
                <>
                    <People data={data} newData={newData} handleClick={handleClick}/>
                    <Films data={data} newData={newData} handleClick={handleClick}/>
                </>
            )}
        </>
    );
}