import React, { useContext } from 'react'
import {Context} from '../store/appContext'

import Card from '../components/Card'

const Home = () => {

    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Home</h1>
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
            </div>
        </>
    )
}

export default Home
