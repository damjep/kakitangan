export default function Species({ data, newData, handleClick}) {

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
                    <p>Avg Height: {newData.average_height}</p>
                    <p>Avg Lifespan: {newData.average_lifespan}</p>
                    <p>Classification: {newData.classification}</p>
                    <p>Designation: {newData.designation}</p>
                    <p>Eye Colors: {newData.eye_colors}</p>
                    <p>Hair Colors: {newData.hair_colors}</p>
                    <p>Language: {newData.language}</p>
                    <p>Skin Colors: {newData.skin_colors}</p>
                </>
                )}
            </div>
        </div>
    </>)
}