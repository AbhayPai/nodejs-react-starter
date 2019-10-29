import React from 'react';
import PropTypes from 'prop-types';

const RenderPostEdit = (props) => {
    return (
        <div
            className='container pb-1 mt-1 mb-2 border clearfix post-summaries'
        >
            <h1
                contentEditable
                suppressContentEditableWarning
                className='d-block display-4 mb-0 font-weight-light text-break text-center post-summaries-title'
            >
                {props.data.post.title}
            </h1>
            <hr />
            <p
                contentEditable
                suppressContentEditableWarning
                className='mb-0 lead text-break'
            >
                {props.data.post.body.replace(/(\r\n|\n|\r)/gm, '')}
            </p>
            <hr />
            <div className='text-right'>
                <button
                    onClick={props.data.saveContent}
                    className='btn btn-primary'
                >
                    Save Content
                </button>
                <button
                    onClick={props.data.editContent}
                    className='btn btn-primary ml-2'
                >
                    Edit Content
                </button>
                <button
                    onClick={() => location.reload()}
                    className='btn btn-primary ml-2'
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

RenderPostEdit.propTypes = {
    data: PropTypes.object,
};

export default RenderPostEdit;
