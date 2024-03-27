export default function Vehicles({ data, newData, handleClick}) {

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
            

            <div className="newData">
                { newData && (<>
                    <p>Name: {newData.name}</p>
                    <p>Cargo Capacity: {newData.cargo_capacity}</p>
                    <p>Costing Credits: {newData.cost_in_credits}</p>
                    <p>Crew: {newData.crew}</p>
                    <p>Length: {newData.length}</p>
                    <p>Manufacturer: {newData.manufacturer}</p>
                    <p>Max Atmosphering Speed: {newData.max_atmosphering_speed}</p>
                    <p>model: {newData.model}</p>
                    <p>Passengers: {newData.passengers}</p>
                    <p>Vehicle Class: {newData.vehicle_class}</p>
                </>
                )}
            </div>
        </div>
    </>)
}