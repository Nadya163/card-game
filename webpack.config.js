const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production" ? "production" : "development";


module.exports = {
    entry: "./scr/script.js",
    mode: isProduction ? "production" : "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {   
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, "css-loader"], 
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./scr/static", to: "static" }],
        }),
        new HtmlWebpackPlugin({
            template: "./scr/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: './scr/style/style.css',
        })
    ],
    optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin(),
        ],
      },
      devtool: isProduction ? false : "source-map",
};