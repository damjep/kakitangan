{/* Shows all the data from api only shows name initially */}

export default function Films({data, newData, handleClick}) {
    return (<>
        <div className="People-Container">
            <div className="data">
                { data && (
                    <ul>
                    {data.results.map((item, index) => (
                        <li key={index} >
                            {item.title}
                        </li>

                        
                    ))}
                    </ul>
                )}
            </div>

           {/* <div className="newData">
                {newData && (<>
                    <li>{newData.director}</li>
                    <li>{newData.episode_id}</li>
                    <li>
                        <p>
                            {newData.opening_crawl}
                        </p>
                    </li>
                    <li>{newData.producer}</li>
                    <li>{newData.release_date}</li>
                </>)}
                </div>*/}
        </div> 
    </>)
}