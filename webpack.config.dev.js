const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html"
  });

module.exports = {
    devtool: 'inline-source-map',
    mode: "development",
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/dev/')
    },
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                            plugins: ['transform-class-properties']
                        }
                    }
                ],
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};