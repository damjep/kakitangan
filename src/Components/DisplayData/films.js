import {useData} from "../fetchData/useData"
{/* Shows all the data from api only shows name initially */}

export default function Films({data, newData, handleClick}) {
    const {load} = useData();

    return (<>
        <div className="People-Container">
            <div className="data">
                { data && (
                    <ul>
                    {data.results.map((item, index) => (
                        <li key={index} onClick={() => handleClick(item.title)}>
                            {item.title}
                        </li>

                        
                    ))}
                    </ul>
                )}
            </div>

        <div className={load != true ? `newData-films` : ''}>
                {newData && (<>
                    <li>Director: {newData.director}</li>
                    <li>Episode: {newData.episode_id}</li>
                    <li>Opening Crawl: 
                        <p>
                            {newData.opening_crawl}
                        </p>
                    </li>
                    <li>{newData.producer}</li>
                    <li>{newData.release_date}</li>
                </>)}
                </div>
        </div> 
    </>)
}