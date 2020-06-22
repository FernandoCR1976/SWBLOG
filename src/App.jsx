import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './views/Home'

import inyectContext from './store/appContext'

import CharacterDetails from './components/CharacterDetails'
import VehicleDetails from './components/VehicleDetails'
import PlanetDetails from './components/PlanetDetails'
import NotFound from './views/NotFound'


const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/character/:id/details" component={CharacterDetails}/>
                <Route exact path="/vehicle/:id/details" component={VehicleDetails}/>
                <Route exact path="/planet/:id/details" component={PlanetDetails}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default inyectContext(App)

