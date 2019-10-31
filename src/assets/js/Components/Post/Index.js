import { useParams, withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RenderError from 'ComponentsPath/Post/ContentRenderers/RenderError';
import RenderPosts from 'ComponentsPath/Post/ContentRenderers/RenderPosts';
import RenderSpinner from 'ComponentsPath/Post/ContentRenderers/RenderSpinner';
import RenderPostEdit from 'ComponentsPath/Post/ContentRenderers/RenderPostEdit';
import RenderPostPreview from 'ComponentsPath/Post/ContentRenderers/RenderPostPreview';

/*
 *
 *  Class Component.
 *  @posts = @array = []
 *  loading = @boolean = true
 *  error = null = null
 * 
 */
const Post = (props) => {
    let data = {};
    let { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayLoadMore, setDisplayLoadMore] = useState(true);
    const [postType, setPostType] = useState('all');
    const [postUpdate, setPostUpdate] = useState({});
    let fetchAPI = '/api/v1';

    useEffect(() => {
        if (props.location.pathname.indexOf('user') > 0) {
            fetchAPI += '/users/' + id;
        } else if (props.location.pathname.indexOf('post') > 0) {
            fetchAPI += '/posts/' + id;
            setPostType('single');
        } else {
            fetchAPI += '/posts';
        }

        fetch(fetchAPI)
            .then(response => response.json())
            .then(
                (posts) => {
                    setLimit(5);
                    setPosts(posts);
                    setLoading(false);
                }
            )
            .catch(
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
    }, []);

    const loadMore = () => {
        if(!(limit >= posts.length)) {
            setLimit(limit + 5);
        } else {
            setDisplayLoadMore(false);
        }
    };

    const editContent = (event) => {
        event.preventDefault();
        event.target.parentElement.previousSibling
            .previousSibling.previousSibling.previousSibling.click();
        event.target.parentElement.previousSibling
            .previousSibling.previousSibling.previousSibling.focus();
    };

    const saveContent = (event) => {
        event.preventDefault();
        if (event.target.parentElement.previousSibling
            .previousSibling.previousSibling.previousSibling.innerText === posts.title &&
            event.target.parentElement.previousSibling
                .previousSibling.innerText === posts.body.replace(/(\r\n|\n|\r)/gm, '')) {
            return;
        } else {
            fetch(
                'https://jsonplaceholder.typicode.com/posts/' + id,
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        title: event.target.parentElement.previousSibling
                            .previousSibling.previousSibling.previousSibling.innerText || 'Default Title',
                        body: event.target.parentElement.previousSibling
                            .previousSibling.innerText || 'Default Body',
                        id: id,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(
                    response => response.json()
                )
                .then(
                    postUpdate => setPostUpdate(postUpdate)
                )
                .catch (
                    // eslint-disable-next-line
                    error => console.log(error.message, postUpdate)
                );
        }
    };

    if (error) {
        data = {
            error
        };

        return <RenderError data={data} />;
    } else if (loading) {
        return <RenderSpinner />;
    } else {
        if (postType === 'all') {
            data = {
                posts,
                limit,
                loadMore,
                displayLoadMore,
            };

            return <RenderPosts data={data} />;
        }

        if (postUpdate.title) {
            data = {
                postUpdate,
                post: posts,
                saveContent,
                editContent,
            };

            return (
                <div
                    className='jumboron-fluid'
                >
                    <RenderPostEdit data={data} />
                    <RenderPostPreview data={data} />
                </div>
            );
        }

        data = {
            post: posts,
            saveContent,
            editContent,
        };

        return (
            <div
                className='jumboron-fluid'
            >
                <RenderPostEdit data={data} />
            </div>
        );
    }
};

export default withRouter(props => <Post {...props} />);
