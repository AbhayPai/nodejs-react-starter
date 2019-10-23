import React from 'react';

import PropTypes from 'prop-types';

class Input extends React.Component {
    render() {
        return (
            <input type='text' className='form-control' id='input'
                size='255' onChange={this.props.handleUpdateTitle} />
        );
    }
}

Input.propTypes = {
    handleUpdateTitle: PropTypes.func
};

export default Input;
