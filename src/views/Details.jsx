import React, { useContext, useEffect } from 'react'
import { Context } from '../store/appContext'

import CharacterDetails from '../components/CharacterDetails';

const Details = (props) => {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacter("https://swapi.dev/api/people/" + props.match.params.id + "/");
    }, [])

    return (
            <CharacterDetails {...store} />
    )
}

export default Details