const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const https = require('https');

app.use(express.static(__dirname + '/public'));

app.get('/api/v1/posts', (request, response) => {
    callAPI((posts) => {
        response.json(JSON.parse(posts));
    }, 'posts');
});

app.get('/api/v1/posts/:id', (request, response) => {
    let id = request.params.id;

    callAPI((postById) => {
        response.json(JSON.parse(postById));
    }, `posts/${id}`);
});

app.get('/api/v1/users/:id', (request, response) => {
    let id = request.params.id;

    callAPI((postByUserId) => {
        response.json(JSON.parse(postByUserId));
    }, `posts?userId=${id}`);
});

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});

const callAPI = (callback, helper) => {
    https.get(`https://jsonplaceholder.typicode.com/${helper}`,
        (getresp) => {
            let data = '';

            getresp.on('data', (chunk) => {
                data += chunk;
            });

            getresp.on('end', () => {
                return callback(data);
            })
        }).on('error', (err) => {
            return callback(err);
        }
    );
};
