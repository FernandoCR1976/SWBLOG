import React from 'react'
import { withRouter } from 'react-router-dom'

const CharacterDetails = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='titulo'>Character Detail</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3" style={{ maxWidth: 740 + "px" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {!!props.character && 
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${props.character.url.replace('http://swapi.dev/api/people/', '').replace('/', '')}.jpg`} className="card-img" alt="..." />}
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    {
                                        !!props.character&&
                                        (
                                            <>
                                            <h5 className="card-title">Name: {props.character.name}</h5>
                                            <p className="card-text my-0">Height: {props.character.height}</p>
                                            <p className="card-text my-0">Mass: {props.character.mass}</p>
                                            <p className="card-text my-0">Hair color: {props.character.hair_color}</p>
                                            <p className="card-text my-0">Eye color: {props.character.skin_color}</p>
                                            <p className="card-text my-0">Birth year: {props.character.birth_year}</p>
                                            <p className="card-text my-0">Gender: {props.character.gender}</p>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning" onClick={()=> props.history.goBack()}>Go back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(CharacterDetails)
