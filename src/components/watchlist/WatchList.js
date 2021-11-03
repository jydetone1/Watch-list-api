import React, {useContext}from 'react'
import {WatchListContext} from '../../contexts/WatchListContext'
import Watch from './Watch'

const WatchList = () => {
    const {watchlists} = useContext(WatchListContext)
    return (
        <div>
          {watchlists.length? (
             <ul className="list-group">
                 {watchlists.map(watch =>{
                     return <Watch watch={watch} key={watch.id}/>
                 })}
             </ul>
          ):(
              <span className="text-white d-flex justify-content-center"> No Watch lists</span>
          )} 
        </div>
    )
}

export default WatchList
