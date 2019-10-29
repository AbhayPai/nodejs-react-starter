const http = require('http');
const https = require('https');
const renderPage = require('./server/renderPage');
const setFilePath = require('./server/setFilePath');
const setContentType = require('./server/setContentType');

const server = http.createServer(
    (req, res) => {
        let url = req.url;
        let filePath = setFilePath({
            req
        });

        let contentType = setContentType(filePath);

        switch(url) {
            case '/':
                renderPage({
                    res,
                    filePath,
                    contentType,
                });
                break;
            case '/api/v1/posts':
                callAPI(function(response){
                    res.write(response);
                    res.end();
                }, 'posts');
                break;
            default:        
                renderPage({
                    res,
                    filePath,
                    contentType,
                });
        }
    }
);

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

const PORT = process.env.PORT || 8080;

server.listen(PORT);
