var path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: '../tribes-backend/src/main/resources/static/js/tribes.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            },
            // { 
            //     test: /\.svg$/,
            //     loader: 'svg-inline-loader'
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../tribes-backend/src/main/resources/static/images',
                        publicPath: '/images',
                    },
                  },
                ],
              },
        ]
    }
};