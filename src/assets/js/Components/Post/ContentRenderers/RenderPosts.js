import React from 'react';
import PropTypes from 'prop-types';

const RenderPosts = (props) => {
    return (
        <React.Fragment>
            {
                props.data.posts.slice(0, props.data.limit).map(
                    (post, index) => {
                        return (
                            <div
                                key={index}
                                className='container pb-1 mt-1 mb-2 border clearfix post-summaries'
                            >
                                <h1
                                    className='d-block display-4 mb-0 font-weight-light text-primary text-break post-summaries-title'
                                >
                                    {
                                        post.title
                                    }
                                </h1>
                                <a
                                    className='mb-0 font-italic post-by'
                                    href={'/user/' + post.userId}
                                >
                                    by {post.userId}
                                </a>
                                <hr />
                                <p
                                    className='mb-0 lead text-break'
                                >
                                    {
                                        post.body.substring(0, 200)
                                    }
                                </p>
                                <a
                                    href={'/post/' + post.id}
                                    className='readmore'
                                >
                                    Read More...
                                </a>
                            </div>
                        );
                    }
                )
            }
            {
                props.data.displayLoadMore ?
                    <div
                        className='container pb-1 mt-1 mb-2 border clearfix post-summaries'
                    >
                        <h1
                            className='d-block display-4 mb-0 font-weight-light text-break text-center loadmore post-summaries-title'
                            onClick={props.data.loadMore}
                        >
                            Load More
                        </h1>
                    </div> :
                    ''
            }
        </React.Fragment>
    );
};

RenderPosts.propTypes = {
    data: PropTypes.object,
};

export default RenderPosts;
