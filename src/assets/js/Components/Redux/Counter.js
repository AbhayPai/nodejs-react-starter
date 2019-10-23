/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

const Counter = (props) => {
    return(
        <React.Fragment>
            <button onClick={props.handleIncrementCounter}>
                Increment
            </button>
            <button onClick={props.handleDecrementCounter}>
                Decrement
            </button>
            <button onClick={props.handleResetCounter}>
                Reset
            </button>
        </React.Fragment>
    );
};

/*
 *  defining Proptype for the Counter Class
 */
Counter.propTypes = {
    handleResetCounter: PropTypes.func,
    handleIncrementCounter: PropTypes.func,
    handleDecrementCounter: PropTypes.func,
};

/*
 *  Export @Counter
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
