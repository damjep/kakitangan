import { useData } from "../fetchData/useData"

{/* shows data of people  */}
export default function People({ data, newData, handleClick}) {
    const {load} = useData();
    return (<>
    <div className="People-Container">
            <div className="data">
                { data && (
                <ul>
                    {data.results.map((item, index) => (
                        <li key={index} onClick={() => handleClick(item.name)}>{item.name}</li>
                    ))}
                </ul> )}
            </div>
            

            <div className={load != true ? `newData-films` : ''}>
                { newData && (<>
                    <p>Name: {newData.name}</p>
                    <p>Birth Year: {newData.birth_year}</p>
                    <p>Height: {newData.height}</p>
                    <p>Eye Color: {newData.eye_color}</p>
                    <p>Hair Color: {newData.hair_color}</p>
                    <p>Skin Color: {newData.skin_color}</p>
                    <p>Gender: {newData.gender}</p>
                    <p>Mass: {newData.mass}</p>
                </>
                )}
            </div>
        </div>
    </>)
}