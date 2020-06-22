import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const VehicleCard = (props) => {

    const { store, actions } = useContext(Context)

    const handleFav = (props) => {
        actions.addFav(props)
    }

    return (
        <div className="col-xl-3 col-md-4 col-sm-6 my-4">
            <div className="card" style={{ width: 100 + "%" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${props.url.replace('http://swapi.dev/api/vehicles/', '').replace('/', '')}.jpg`}
                    className="card-img-top img-fluid"
                    alt={`${props.name}`}
                />
                <div className="card-body">
                    {
                        !!props &&
                        (
                            <>
                                <h5 className="card-title">{props.name}</h5>
                                <Link to={'/vehicle/' + props.url.replace('http://swapi.dev/api/vehicles/', '') + 'details'} className="btn btn-warning mt-1">Learn More!</Link>
                                <button className="btn btn-danger ml-2 mt-1" onClick={() => handleFav(props)}><i className="far fa-heart"></i></button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default VehicleCard