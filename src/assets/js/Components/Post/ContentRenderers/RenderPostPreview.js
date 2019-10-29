import React from 'react';
import PropTypes from 'prop-types';

const RenderPostPreview = (props) => {
    return (
        <React.Fragment>
            <h1
                className='d-block display-4 mb-0 font-weight-light text-break text-center text-success post-summaries-title'
            >
                Post Successfully Updated
            </h1>
            <div
                className='container pb-1 mt-1 mb-2 border clearfix post-summaries post-updated'
            >
                <h1
                    className='d-block display-4 mb-0 font-weight-light text-break text-center post-summaries-title'
                >
                    {props.data.postUpdate.title}
                </h1>
                <hr />
                <p
                    className='mb-0 lead text-break'
                >
                    {props.data.postUpdate.body.replace(/(\r\n|\n|\r)/gm, '')}
                </p>
            </div>
        </React.Fragment>
    );
};

RenderPostPreview.propTypes = {
    data: PropTypes.object,
};

export default RenderPostPreview;
