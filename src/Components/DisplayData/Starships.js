{/* Shows data of starships */}

export default function Starships({data, newData, handleClick}) {
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
                    <p>MGLT: {newData.MGLT}</p>
                    <p>Cargo Capacity: {newData.cargo_capacity}</p>
                    <p>Consumables: {newData.consumables}</p>
                    <p>Crew: {newData.crew}</p>
                    <p>Hyper Drive Rating: {newData.hyperdrive_rating}</p>
                    <p>Length: {newData.length}</p>
                    <p>Manufacturer: {newData.manufacturer}</p>
                    <p>Max Atmosphering Speed: {newData.max_atmosphering_speed}</p>
                    <p>Passengers: {newData.passengers}</p>
                    <p>Starship Class: {newData.starship_class}</p>
                </>
                )}
            </div>
        </div>
    </>)
}