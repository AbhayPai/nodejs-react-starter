import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterReducers from 'ReducersPath/CounterReducers';

import Counter from 'ComponentsPath/Redux/Counter';
import CounterDisplay from 'ComponentsPath/Redux/CounterDisplay';
import CounterHistoryDisplay from 'ComponentsPath/Redux/CounterHistoryDisplay';

const Redux = () => {
    let store = createStore(CounterReducers);

    return(
        <Provider store={store}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <Counter />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <CounterDisplay />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <CounterHistoryDisplay />
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default Redux;
