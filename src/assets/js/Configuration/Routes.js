import React from 'react';

import Post from 'ComponentsPath/Post/Index';
import Redux from 'ComponentsPath/Redux/Index';
import Databinding from 'ComponentsPath/Databinding/Index';
import NotFound from 'ComponentsPath/NotFound/NotFound';

const Routes = () => {
    return [
        {
            path: '/',
            exact: true,
            title: 'Home',
            render: true,
            pathComponent: () => <Post />
        },
        {
            path: '/react-redux',
            exact: true,
            title: 'React Redux',
            render: true,
            pathComponent: () => <Redux />
        },
        {
            path: '/databinding',
            exact: true,
            title: 'Data Binding',
            render: true,
            pathComponent: () => <Databinding />
        },
        {
            path:  '/user/:id',
            title: 'User',
            render: false,
            pathComponent: () => <Post />
        },
        {
            path:  '/post/:id',
            title: 'Post',
            render: false,
            pathComponent: () => <Post />
        },
        {
            path: '',
            title: '',
            render: false,
            pathComponent: () => <NotFound />
        }
    ];
};

export default Routes;
