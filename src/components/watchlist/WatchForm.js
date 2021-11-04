import React,{useState, useContext, useEffect } from 'react'
import { WatchListContext} from '../../contexts/WatchListContext'
import WatchList from './WatchList'
import './Watch.scss'

const WatchForm = () => {
    const { addWatchList, clearWatchList, editWatchList, editItem} = useContext(WatchListContext)
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editItem){
           addWatchList(title)
           setTitle('')
        } else {
            editWatchList(title, editItem.id, editItem.completed)
        }
    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() =>{
        if(editItem){
            setTitle(editItem.title)
        } else{
            setTitle('')
        }
    }, [editItem])

    return (
      <div className="watch__bg">
        <div className="container">
            <div className="d-flex justify-content-center align-items-center content__info">
                <div className="card w-75 bg-dark box__card">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 display-6 text-center text-white">My Watch List</h6>
                            <form onSubmit={handleSubmit}>
                               <div className="mt-5">
                                 <input 
                                   type="text" 
                                   className="form-control" 
                                   placeholder="watchlist"
                                   value={title}
                                   onChange={handleChange}
                                   required
                                   />
                                </div>
                                <div className="mt-3 d-flex justify-content-center align-items-center">
                                   <button type="submit" className="btn btn-primary add__btn m-3">{editItem? 'Edit list' : 'Add list'}</button>
                                   <button onClick ={clearWatchList} className="btn btn-secondary clear__btn">Clear</button>
                                </div>
                            </form>
                            <WatchList/>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default WatchForm
