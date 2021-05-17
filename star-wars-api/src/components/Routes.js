import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import StarWarsCharacter from './StarWarsCharacter'; 
import StarWarsCharacterList from './StarWarsCharacterList'; 

function Routes()
 {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/list" component={StarWarsCharacterList} />
                <Route exact path="/list/:id" component={StarWarsCharacter} />
            </Switch>
        </Router>
    );
}

export default Routes;
