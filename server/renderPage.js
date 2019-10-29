const fs = require('fs');
const path = require('path');

const renderPage = (config) => {
    fs.readFile(
        config.filePath,
        (err, content) => {
            // Page Not Found
            if(err) {
                if(err.code === 'ENOENT') {
                    fs.readFile(
                        path.join(
                            __dirname,
                            '..',
                            'public',
                            'index.html'
                        ),
                        (err, content) => {
                            config.res.writeHead(
                                400,
                                {
                                    'Content-Type': 'text/html'
                                }
                            );
                            config.res.end(content, 'utf8');
                        }
                    );
                } else {
                    // Server Error
                    config.res.writeHead(500);
                    config.res.end(`Server Error ${err.code}`);
                }
            } else {
                config.res.writeHead(
                    200,
                    {
                        'Content-Type': config.contentType
                    }
                );
                config.res.end(content, 'utf8');
            }
        }
    );

};

module.exports = renderPage;
