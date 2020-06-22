import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Context } from '../store/appContext';

const CharacterDetails = (props) => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacter("https://swapi.dev/api/people/" + props.match.params.id + "/");
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='titulo'>Character Detail</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-3" style={{ maxWidth: 100 + "%" }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {!!store.character &&
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${store.character.url.replace('http://swapi.dev/api/people/', '').replace('/', '')}.jpg`} className="card-img img-fluid" alt="..." />}
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    {
                                        !!store.character &&
                                        (
                                            <>
                                                <h5 className="card-title"><span>Name:</span> {store.character.name}</h5>
                                                <p className="card-text my-0"><span>Height:</span> {store.character.height}</p>
                                                <p className="card-text my-0"><span>Mass:</span> {store.character.mass}</p>
                                                <p className="card-text my-0"><span>Hair color:</span> {store.character.hair_color}</p>
                                                <p className="card-text my-0"><span>Eye color:</span> {store.character.skin_color}</p>
                                                <p className="card-text my-0"><span>Birth year:</span> {store.character.birth_year}</p>
                                                <p className="card-text my-0"><span>Gender:</span> {store.character.gender}</p>
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

export default withRouter(CharacterDetails)
