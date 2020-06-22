import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Context } from '../store/appContext';

const PlanetDetails = (props) => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPlanet("https://swapi.dev/api/planets/" + props.match.params.id + "/");
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='titulo'>Planet Detail</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3" style={{ maxWidth: 100 + "%" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {!!store.planet &&
                                    <img src={`https://starwars-visualguide.com/assets/img/planets/${store.planet.url.replace('http://swapi.dev/api/planets/', '').replace('/', '')}.jpg`} className="card-img img-fluid" alt="..." />}
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    {
                                        !!store.planet &&
                                        (
                                            <>
                                                <h5 className="card-title"><span>Name:</span> {store.planet.name}</h5>
                                                <p className="card-text my-0"><span>Rotation period:</span> {store.planet.rotation_period}</p>
                                                <p className="card-text my-0"><span>Orbital period:</span> {store.planet.orbital_period}</p>
                                                <p className="card-text my-0"><span>Diameter:</span> {store.planet.diameter}</p>
                                                <p className="card-text my-0"><span>Climate:</span> {store.planet.climate}</p>
                                                <p className="card-text my-0"><span>Gravity:</span> {store.planet.gravity}</p>
                                                <p className="card-text my-0"><span>Terrain:</span> {store.planet.terrain}</p>
                                                <p className="card-text my-0"><span>Surface water:</span> {store.planet.surface_water}</p>
                                                <p className="card-text my-0"><span>Population:</span> {store.planet.population}</p>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning" onClick={() => props.history.goBack()}>Go back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PlanetDetails)
