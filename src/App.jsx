import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './views/Home'
import Details from './views/Details'

import inyectContext from './store/appContext'


const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/character/:id/details" component={Details}/>
                <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
        </Router>
    )
}

export default inyectContext(App)

