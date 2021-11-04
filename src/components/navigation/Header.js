import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
           <header>
               <nav className="navbar navbar-expand-lg navbar-light navbar-dark  bg-dark">
                    <div className="container-fluid">
                        <Link to = "/" className="navbar-brand text-success text-capitalize">moviesInformation</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link to = "/" className="nav-link" >Characters</Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/episode" className="nav-link">Episodes</Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/location" className="nav-link">Locations</Link>
                                </li>
                                <li className="nav-item">
                                <Link to ="/watchlist" className="nav-link">My Watch List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
               </nav>
           </header> 
        </div>
    )
}

export default Header
