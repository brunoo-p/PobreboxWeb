import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
//import { useUserForm } from './Context/SetUser';
import { Home, Application } from './Pages';

export default function Routes() {

    const PrivateRoute = ({component: Component, ...rest}) => {
        return(
            <Route
                {...rest} render={props => (
                    localStorage.getItem('user')
                                    
                    
                    ? <Component {...props} />
                    
                    : <Redirect to="/" /> 
                )}
            />
        )
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <PrivateRoute exact path='/app' component={Application}/>
            </Switch>
        </BrowserRouter> 
    )
}
