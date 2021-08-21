import React from "react";
import Main from "./pages/Main";
import Tutorial from "./pages/Tutorial";
import { Route, Switch } from 'react-router-dom';

const Routes = ({ status, config }) => {
    return (
        <Switch>
            <Route exact path="/">
                <div className="App">
                    <br />
                    <Main status={status} config={config} />
                    <br />
                </div>

            </Route>
            <Route path="/tutorial" component={Tutorial} />
        </Switch>
    )
}

export default Routes;