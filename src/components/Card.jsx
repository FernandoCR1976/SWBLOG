import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 mb-4">
            <div className="card" style={{ width: 15 + "rem" }}>
                <img src="http://placehold.it/286" className="card-img-top" alt="..." />
                <div className="card-body">
                    {
                        !!props &&
                        (
                            <>
                                <h5 className="card-title">{props.name}</h5>
                                <p className="card-text">Gender: {props.gender}</p>
                                <p className="card-text">Hair Color: {props.hair_color}</p>
                                <p className="card-text">Eye Color: {props.eye_color}</p>
                                <Link to={props.url} className="btn btn-primary">Learn More!</Link>
                            </>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Card
