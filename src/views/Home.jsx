import React, { useContext } from 'react'
import { Context } from '../store/appContext'

import CharacterCard from '../components/CharacterCard';
import VehicleCard from '../components/VehicleCard';
import PlanetCard from '../components/PlanetCard'

import { withRouter } from 'react-router-dom';

const Home = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='titulo' id="characters">Characters</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.characters &&
                        store.characters.results.map((element, index) => {
                            return (
                                <CharacterCard key={index} {...element} />
                            )
                        })
                    }
                </div>
                <div className="row mb-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        {
                            !!store.characters &&
                                store.characters.previous === null ?
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1" disabled>
                                        Back
                                    </button>
                                )
                                :
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1"
                                        onClick={() => {
                                            actions.getCharacters(store.characters.previous.replace("http", "https"));
                                        }}>Back
                                    </button>
                                )
                        }
                        {
                            !!store.characters &&
                                store.characters.next === null ?
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1" disabled>
                                        Next Page
                                    </button>
                                )
                                :
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1"
                                        onClick={() => {
                                            actions.getCharacters(store.characters.next.replace("http", "https"));
                                        }}>Next Page
                                    </button>
                                )
                        }
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-12">
                        <h1 className='titulo' id="vehicles">Vehicles</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.vehicles &&
                        store.vehicles.results.map((element, index) => {
                            return (
                                <VehicleCard key={index} {...element} />
                            )
                        })
                    }
                </div>
                <div className="row mb-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        {
                            !!store.vehicles &&
                                store.vehicles.previous === null ?
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1" disabled>
                                        Back
                                    </button>
                                )
                                :
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1"
                                        onClick={() => {
                                            actions.getVehicles(store.vehicles.previous.replace("http", "https"));
                                        }}>Back
                                    </button>
                                )
                        }
                        {
                            !!store.vehicles &&
                                store.vehicles.next === null ?
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1" disabled>
                                        Next Page
                                    </button>
                                )
                                :
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1"
                                        onClick={() => {
                                            actions.getVehicles(store.vehicles.next.replace("http", "https"));
                                        }}>Next Page
                                    </button>
                                )
                        }
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-12">
                        <h1 className='titulo' id="planets">Planets</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.planets &&
                        store.planets.results.map((element, index) => {
                            return (
                                <PlanetCard key={index} {...element} />
                            )
                        })
                    }
                </div>
                <div className="row mb-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        {
                            !!store.planets &&
                                store.planets.previous === null ?
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1" disabled>
                                        Back
                                    </button>
                                )
                                :
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1"
                                        onClick={() => {
                                            actions.getPlanets(store.planets.previous.replace("http", "https"));
                                        }}>Back
                                    </button>
                                )
                        }
                        {
                            !!store.planets &&
                                store.planets.next === null ?
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1" disabled>
                                        Next Page
                                    </button>
                                )
                                :
                                (
                                    <button id="controlButtons" className="btn btn-warning mx-1"
                                        onClick={() => {
                                            actions.getPlanets(store.planets.next.replace("http", "https"));
                                        }}>Next Page
                                    </button>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home) 
