const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,  './dist'),
        // clean: true,
    },
    module: {
        rules:[
            {
                test: /\.html$/i,
                use:[
                HtmlWebpackPlagin.loader,
                    'html-loader'
            // //     exclude: /node_modules/,
            // //     use: ['babel-loader'],
                ]
            },
        {
            test: /\.css$/i,
            use:[ 
                MiniCSSExtractPlugin.loader,
                'css-loader'
            ]
        }],
    },

    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),  
        },
        open: true, 
      },
    //   mode: 'development',

      plugins: [
        new HtmlWebpackPlagin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCSSExtractPlugin()
    ],

}

