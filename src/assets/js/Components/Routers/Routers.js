import React from 'react';
import { BrowserRouter as Router, Route, NavLink, hashHistory, Switch } from 'react-router-dom';

import Routes from 'ConfigPath/Routes';

const Routers = () => {
    return (
        <Router histroy={hashHistory}>
            <nav className='navbar navbar-expand-md bg-primary navbar-dark'>
                <NavLink className='navbar-brand' title='Abhay Pai' className='nav-link p-0' to='/'>
                    <img src='/images/ap-logo.jpg' alt='Abhay Pai' className='img-fluid' />
                </NavLink>

                <button className='navbar-toggler' type='button'
                    data-toggle='collapse' data-target='#mainmenu'>
                    <span className='navbar-toggler-icon' />
                </button>

                <div className='collapse navbar-collapse' id='mainmenu'>
                    <ul className='navbar-nav ml-auto'>
                        {
                            new Routes()
                                .filter(route => {return route.render;})
                                .map((route, index) => (
                                    <li className={'nav-item' + route.render} key={index}>
                                        <NavLink exact={route.exact}
                                            className='nav-link font-weight-bold'
                                            to={route.path}>
                                            {route.title}
                                        </NavLink>
                                    </li>
                                ))
                        }
                    </ul>
                </div>
            </nav>

            <Switch>
                {
                    new Routes().map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.pathComponent}
                        />
                    ))
                }
            </Switch>
        </Router>
    );
};

export default Routers;
