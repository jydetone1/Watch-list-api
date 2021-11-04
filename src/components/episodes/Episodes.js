import React, {useState, useEffect} from 'react'
import Pagination from '../Pagination'
import { Search} from '../Search'

function Episodes() {
    const [episode, setEpisodes] = useState([])
    const [info, setInfo] = useState([])
    const [filter, setFilter] = useState('')

    const initialUrl = "https://rickandmortyapi.com/api/episode"

    const episodeList = (url) =>{
        fetch(url)
         .then(response => response.json())
         .then((data)=> {
             setEpisodes(data.results)
             setInfo(data.info)
        })
         .catch(error => console.log(error))
      
        }
  
    const onPrevious = () => {
        episodeList (info.prev)
        }
    
    const onNext = () => {
        episodeList (info.next)
        }
    

    useEffect(()=>{
        episodeList (initialUrl)
    },[filter])

    return (
        <div>
            <div className="container mt-5">
              <Search filter={filter} setFilter={setFilter}/>
              <div className="table-responsive">
                <table className="table table-striped caption-top">
                    <caption>List of episodes</caption>
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Air_Date</th>
                        <th scope="col">Episode</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        episode.filter((value)=>{
                            if(filter === ""){
                                return value;
                            }else if(
                            value.name.toLowerCase().includes(filter.toLowerCase()) ||
                            value.episode.toLowerCase().includes(filter.toLowerCase()) 
                        ){
                            return value
                        }
                        return false;
                        }).map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>  
                        <td>{item.name}</td>  
                        <td>{item.air_date}</td>  
                        <td>{item.episode}</td>  
                    </tr>
                    ))
                 }
                    </tbody>
                </table>
             </div>
              <Pagination 
                  prev={info.prev} 
                  next={info.next} 
                  onPrevious={onPrevious} 
                  onNext={onNext}
              />
            </div>
        </div>
    )
}

export default Episodes
