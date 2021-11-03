import React, {useContext} from 'react'
import {WatchListContext} from '../../contexts/WatchListContext'
import  {BsFillCheckCircleFill} from 'react-icons/bs';


const Watch = ({watch}) => {
    const { watchCompleted, removeWatchList, findWatchList} = useContext(WatchListContext)

    return (
        <li className="list-group-item">
             <p className ={`${watch.completed ? "complete" : ""}`}>{watch.title}</p>
             <div className="d-flex justify-content-center align-items-center">
                <span title="completed" className="icon__box" onClick={()=> watchCompleted(watch)}><BsFillCheckCircleFill/></span>
                <button onClick = {() => findWatchList(watch.id)}type="submit" className="btn btn-primary edit__btn m-3">Edit</button>
                <button onClick = {() => removeWatchList(watch.id) }type="submit" className="btn btn-secondary delete__btn">Delete</button>           
            </div>
        </li>
    )
}

export default Watch
