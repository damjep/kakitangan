export default function Planets({ data, newData, handleClick}) {

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
                    <p>Climate: {newData.climate}</p>
                    <p>Diameter: {newData.diameter}</p>
                    <p>Gravity: {newData.gravity}</p>
                    <p>Orbital Period: {newData.orbital_period}</p>
                    <p>Population: {newData.population}</p>
                    <p>Rotation Period: {newData.rotation_period}</p>
                    <p>Surface Water: {newData.surface_water}</p>
                    <p>Terrain: {newData.terrain}</p>
                </>
                )}
            </div>
        </div>
    </>)
}