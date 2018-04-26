const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: (getPath) => {
        return "css/" + getPath("[name].css");
    },
    disable: process.env.NODE_ENV === "development"
});

const config = {
    entry: {
        app: './resources/assets/js/app.js',
        jquery: 'jquery',
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
        extractSass
    ],
    // externals: {
    //     "vue": 'vue'
    // },
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