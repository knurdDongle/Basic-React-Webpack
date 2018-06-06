const path = require('path');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react']
                    }
                }
            },

            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: 'url-loader'
            }

        ]
    }
}
