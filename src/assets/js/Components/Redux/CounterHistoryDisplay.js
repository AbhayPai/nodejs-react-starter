/*
 *  All Usable Libraries in this File
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from 'ActionsPath/MapToProps';

const CounterHistoryDisplay = (props) => {
    return(
        <React.Fragment>
            <p>History</p>
            <ul>
                {
                    props.history.map((value) => (
                        <li
                            key={value.random}
                            onClick={
                                () => props.handleDeleteItemCounter(
                                    value.random
                                )
                            }
                        >
                            {value.counter}
                        </li>
                    ))
                }
            </ul>
        </React.Fragment>
    );
};

/*
 *  defining Proptype for the CounterHistoryDisplay Class
 */
CounterHistoryDisplay.propTypes = {
    history: PropTypes.array,
    handleDeleteItemCounter: PropTypes.func,
};

/*
 *  Export @CounterHistoryDisplay
 */
export default
connect(mapStateToProps, mapDispatchToProps)(CounterHistoryDisplay);
