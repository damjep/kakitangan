export default function Films({data, newData, handleClick}) {
    return (<>
        <div className="People-Container">
                <div className="data">
                    { data && (
                    <ul>
                        {data.results.map((item, index) => (
                            <li key={index} onClick={() => handleClick(item.name)}>{item.title}</li>
                        ))}
                    </ul> )}
                </div>
                
    
                <div className="newData">
                    { newData && (<>
                        <p>Name: {newData.title}</p>
                        
                    </>
                    )}
                </div>
            </div>
        </>)
}