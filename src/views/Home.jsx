import React, { useContext } from 'react'
import { Context } from '../store/appContext'

import Card from '../components/Card'
import { withRouter } from 'react-router-dom';

const Home = (props) => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='titulo'>Home</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        !!store.characters &&
                        store.characters.results.map((element, index) => {
                            return (
                                <Card key={index} {...element} />
                            )
                        })
                    }

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button id="controlButtons" className="btn btn-warning mx-1"
                            onClick={() => {
                                actions.getCharacters(store.characters.previous.replace("http", "https"));
                            }}>Back
                        </button>
                        <button id="controlButtons" className="btn btn-warning mx-1"
                            onClick={() => {
                                actions.getCharacters(store.characters.next.replace("http", "https"));
                            }}>Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Home) 
