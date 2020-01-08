
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: [
        './src/js/app.js',
        'jquery/dist/jquery.js',
        'bootstrap/dist/css/bootstrap.min.css',
        './src/css/style.css'
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: "[name].js",
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: path.join(__dirname, "public"),
                    },
                },
                {
                    loader: 'css-loader'
                }
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new FixStyleOnlyEntriesPlugin(),
        new OptimizeCSSAssetsPlugin({})
    ]
};