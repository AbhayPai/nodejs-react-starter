const path = require('path');

const setFilePath = (config) => {
    let filePath = path.join(
        __dirname,
        '..',
        'public',
        config.req.url === '/' ? 'index.html' : config.req.url
    );

    return filePath;
};

module.exports = setFilePath;