/*
 *  Require Sass file for the compilation
 */
require('SassPath/pages/index.scss');

import React from 'react';
import ReactDom from 'react-dom';
import Routers from 'ComponentsPath/Routers/Routers';

(() => {
    ReactDom.render(
        <Routers />,
        document.querySelector('#app')
    );
})();

