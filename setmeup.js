module.exports = function(config) {
    this.entry = {
        index: config.Path.join(config.Webpack_DIR, 'src', 'assets', 'js', 'Pages', 'index.js'),
        vendor: config.Path.join(config.Webpack_DIR, 'src', 'assets', 'js', 'Pages', 'vendor.js'),
    };

    this.alias = {
        ViewsPath: config.Path.resolve(config.Webpack_DIR, 'src/templates'),
        SassPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/scss/'),
        StatesPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/States'),
        ModulesPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Modules'),
        ActionsPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Actions'),
        ReducersPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Reducers'),
        ConfigPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Configuration'),
        ComponentsPath: config.Path.resolve(config.Webpack_DIR, 'src/assets/js/Components'),
    };

    this.copyFiles = [
        {
            to: config.Path.join(config.Webpack_DIR, 'public', 'images'),
            from: config.Path.join(config.Webpack_DIR, 'src', 'assets', 'images')
        },
        {
            to: config.Path.join(config.Webpack_DIR, 'public', 'js'),
            from: config.Path.join(config.Webpack_DIR, 'src', 'assets', 'js', 'Vendors', 'jquery.min.js')
        }
    ];

    this.createHtml = function() {
        return [
            new config.HtmlWebpackPlugin({
                title: 'Nodejs React',
                inject: false,
                minify: {
                    removeComments: true,
                    useShortDoctype: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                },
                template: config.Path.join(
                    config.Webpack_DIR,
                    'src', 'templates', 'html',
                    'index.html'
                ),
                filename: config.Path.join(
                    config.Webpack_DIR,
                    'public',
                    'index.html'
                ),
                assets: {
                    css: [
                        '/css/vendor.' + config.CustomTimeHash + '.css',
                        '/css/index.' + config.CustomTimeHash + '.css'
                    ],
                    js: [
                        '/js/jquery.min.js',
                        '/js/vendor.' + config.CustomTimeHash + '.js',
                        '/js/index.' + config.CustomTimeHash + '.js'
                    ]
                }
            }),
        ];
    };
}
