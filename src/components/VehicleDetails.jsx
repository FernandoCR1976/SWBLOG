import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Context } from '../store/appContext';

const VehicleDetails = (props) => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getVehicle("https://swapi.dev/api/vehicles/" + props.match.params.id + "/");
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='titulo'>Vehicle Detail</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3" style={{ maxWidth: 100 + "%" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {!!store.vehicle &&
                                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${store.vehicle.url.replace('http://swapi.dev/api/vehicles/', '').replace('/', '')}.jpg`} className="card-img img-fluid" alt="..." />}
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    {
                                        !!store.vehicle &&
                                        (
                                            <>
                                                <h5 className="card-title"><span>Name:</span> {store.vehicle.name}</h5>
                                                <p className="card-text my-0"><span>Model:</span> {store.vehicle.model}</p>
                                                <p className="card-text my-0"><span>Manufacturer:</span> {store.vehicle.manufacturer}</p>
                                                <p className="card-text my-0"><span>Cost in credits:</span> {store.vehicle.cost_in_credits}</p>
                                                <p className="card-text my-0"><span>Length:</span> {store.vehicle.length}</p>
                                                <p className="card-text my-0"><span>Max atmosphering speed:</span> {store.vehicle.max_atmosphering_speed}</p>
                                                <p className="card-text my-0"><span>Crew:</span> {store.vehicle.crew}</p>
                                                <p className="card-text my-0"><span>Passengers:</span> {store.vehicle.passengers}</p>
                                                <p className="card-text my-0"><span>Cargo capacity:</span> {store.vehicle.cargo_capacity}</p>
                                                <p className="card-text my-0"><span>Consumables:</span> {store.vehicle.consumables}</p>
                                                <p className="card-text my-0"><span>Vehicle class:</span> {store.vehicle.vehicle_class}</p>

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

export default withRouter(VehicleDetails)
