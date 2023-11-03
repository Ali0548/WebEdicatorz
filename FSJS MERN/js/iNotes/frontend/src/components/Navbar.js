import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    useEffect(()=>{
        if(!localStorage.getItem("authTokken"))
        {
            window.location.href = "/";
        }
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">RectJS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/addUser" className="nav-link">Add Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addNote" className="nav-link">Add Note</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/viewUser" className="nav-link">View Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                      
                    </ul>
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar
