var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

console.log(config.output.publicPath);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(1337, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost: 1337');
});