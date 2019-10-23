/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

const CounterDisplay = (props) => {
    return(
        <React.Fragment>
            <p>Counter : {props.counter}</p>
        </React.Fragment>
    );
};

/*
 *  defining Proptype for the CounterDisplay Class
 */
CounterDisplay.propTypes = {
    counter: PropTypes.number,
};

/*
 *  Export @CounterDisplay
 */
export default connect(mapStateToProps, mapDispatchToProps)(CounterDisplay);
