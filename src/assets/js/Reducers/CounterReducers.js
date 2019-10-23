import initialState from 'StatesPath/GlobalStates';

/*
 *  Example:-
 *  createStore(CounterReducers);
 */
const CounterReducers = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return false;
    }

    const newState = Object.assign({}, state);

    if (action.type === 'INCREMENT') {
        newState.history = state.history.concat(
            {
                random: Math.random(),
                counter: state.counter++
            }
        );
        newState.counter++;
    }

    if (action.type === 'DECREMENT') {
        newState.history = state.history.concat(
            {
                random: Math.random(),
                counter: state.counter--
            }
        );
        newState.counter--;
    }

    if (action.type === 'RESET') {
        newState.counter = initialState.counter;
        newState.history = state.history.concat(
            {
                random: Math.random(),
                counter: initialState.counter
            }
        );
    }

    if (action.type === 'DELETE_ITEM') {
        newState.history = state.history.filter(
            counter => counter.random !== action.key
        );
    }

    return newState;
};

export default CounterReducers;
