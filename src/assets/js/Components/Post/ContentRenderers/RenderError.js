import React from 'react';
import PropTypes from 'prop-types';

const RenderError = (props) => {
    return (
        <h1 className='display-4 text-danger text-center post-summaries-title'>
            {
                props.data.error.message
            }
        </h1>
    );
};

RenderError.propTypes = {
    data: PropTypes.object,
};

export default RenderError;
