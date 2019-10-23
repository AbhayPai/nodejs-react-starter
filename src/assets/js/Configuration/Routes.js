import React from 'react';

import Post from 'ComponentsPath/Post/Index';
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
