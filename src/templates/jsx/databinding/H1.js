import React from 'react';

import PropTypes from 'prop-types';

class H1 extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

H1.propTypes = {
    title: PropTypes.string
};

export default H1;
