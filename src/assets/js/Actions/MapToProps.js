const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        history: state.history,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleResetCounter: () => dispatch(
            {
                type: 'RESET'
            }
        ),
        handleIncrementCounter: () => dispatch(
            {
                type: 'INCREMENT'
            }
        ),
        handleDecrementCounter: () => dispatch(
            {
                type: 'DECREMENT'
            }
        ),
        handleDeleteItemCounter: (random) => dispatch(
            {
                type: 'DELETE_ITEM',
                key: random
            }
        ),
    };
};

export {
    mapStateToProps,
    mapDispatchToProps
};
