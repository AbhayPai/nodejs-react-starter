import React from 'react';
import { BrowserRouter as Router, Route, NavLink, hashHistory, Switch } from 'react-router-dom';

import Routes from 'ConfigPath/Routes';

const Routers = () => {
    return (
        <Router histroy={hashHistory}>
            <nav className='navbar navbar-inverse'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <button className='navbar-toggle' type='button' data-toggle='collapse' data-target='#mainmenu'>
                            <span className='icon-bar' />
                            <span className='icon-bar' />
                            <span className='icon-bar' />
                        </button>
                        <NavLink title='Abhay Pai' className='nav-link p-0' to='/'>
                            <img src='/images/ap-logo.jpg' alt='Abhay Pai' className='img-responsive navbar-image' />
                        </NavLink>
                    </div>
                    <div className='collapse navbar-collapse' id='mainmenu'>
                        <ul className='nav navbar-nav navbar-right'>
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
