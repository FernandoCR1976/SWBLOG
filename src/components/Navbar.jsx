import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'



const Navbar = () => {

    const { store, actions } = useContext(Context)

    const handleDeletion = (element) =>{
        actions.removeFavorite(element)
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to='/'><img src="../swlogo.png" alt="" /></Link>
            {<button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/#vehicles">Vehicles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/#planets">Planets</a>
                    </li>
                </ul>
            </div>
            <div className="dropdown">
                <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Favourites <span className="badge badge-danger">{store.favourites.length}</span>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    {
                        store.favourites.length > 0 ?
                        store.favourites.map((element, index)=>{
                        return (
                            <div className= "d-flex justify-content-around align-items-center">
                                <Link key={index+"l"}className="dropdown-item fav" to={
                                    element.url.includes('people')?
                                    '/character/' + element.url.replace('http://swapi.dev/api/people/', '') + 'details'
                                    : element.url.includes('vehicles')?
                                    '/vehicle/' + element.url.replace('http://swapi.dev/api/vehicles/', '') + 'details'
                                    : '/planet/' + element.url.replace('http://swapi.dev/api/planets/', '') + 'details'
                                    }>
                                        {element.name}
                                </Link>
                                <i key={index+"i"}className="fas fa-trash mr-3" onClick={()=>handleDeletion(element)}></i>
                            </div>)
                        })
                        :
                        (<p className="dropdown-item my-0 mx-0">You don't have favourites yet</p>)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
