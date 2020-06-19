import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 mb-4">
            <div className="card" style={{ width: 15 + "rem" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${props.url.replace('http://swapi.dev/api/people/', '').replace('/', '')}.jpg`}
                    className="card-img-top"
                    alt={`${props.name}`}
                />
                <div className="card-body">
                    {
                        !!props &&
                        (
                            <>
                                <h5 className="card-title">{props.name}</h5>
                                <p className="card-text my-0">Gender: {props.gender}</p>
                                <p className="card-text my-0">Hair Color: {props.hair_color}</p>
                                <p className="card-text my-0">Eye Color: {props.eye_color}</p>
                                <Link to={'/character/' + props.url.replace('http://swapi.dev/api/people/', '') + 'details'} className="btn btn-warning mt-1">Learn More!</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
