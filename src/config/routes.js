import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Detail from '../views/Detail';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/detail" component={ Detail } />
        </Switch>
    </BrowserRouter>
);

export default Routes;
