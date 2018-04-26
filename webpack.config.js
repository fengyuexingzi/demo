const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: (getPath) => {
        return "css/" + getPath("[name].css");
    },
    disable: process.env.NODE_ENV === "development"
});

const config = {
    entry: {
        app: './resources/assets/js/app.js',
        polyfill: 'babel-polyfill'
    },
    output:
        {
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].js',
            path: path.resolve(__dirname, 'public')
        },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        js: 'babel-loader',
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname,"resources/assets/js/jquery.js"),
                to: path.resolve(__dirname,"public/js/jquery.js")
            },
            {
                from: path.resolve(__dirname,"resources/assets/js/vue.js"),
                to: path.resolve(__dirname,"public/js/vue.js")
            }
        ])
    ],
    externals: {
        jquery: "jQuery",
        vue: "Vue"
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    optimization: {
        splitChunks: {
            chunks: "async",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    mode: "development"
};

module.exports = config;