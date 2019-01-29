let path = require('path');

module.exports = {
    "entry" : "./src/index.js",
    "mode" : 'development',

    "output" : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        library : 'mylib'
    },

    "module" : {
        "rules" : [
            {"test" : /\.css$/, "use": ['style-loader', 'css-loader']}
        ]
    }
}