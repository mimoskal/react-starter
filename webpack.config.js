

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        app: getEntrySources([
            './src/js/app.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/js/app.min.js'
    },
    module: {
        loaders: [
            { 
            	test: /\.js$/, 
            	loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
				},
            	exclude: /node_modules/ 
            },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
        ]
    }
};