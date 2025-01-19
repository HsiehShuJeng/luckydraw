const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const merge = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // This is the correct plugin now
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const argv = require('yargs-parser')(process.argv.slice(2));

const { mode } = argv;
const isDev = mode === 'development';

const mergeConfig = isDev ? require('./webpack/webpack.config.dev') : require('./webpack/webpack.config.prod');

const file_entry = require('./webpack/webpack.config.entry');

const APP_DIR = path.resolve(__dirname, 'src/js');
const BUILD_DIR = path.resolve(__dirname, 'dist/js/');
// const ASSETS_PATH = path.resolve(__dirname, 'dist/assets/');

const jsConfig = {
    mode,
    devtool: isDev ? 'cheap-eval-source-map' : 'source-map',
    context: APP_DIR,
    entry: {
        ...file_entry.js,
    },
    output: {
        filename: '[name].bundle.js',
        path: BUILD_DIR,
        publicPath: 'dist/js/',
        chunkFilename: '[name].bundle.js?v=[chunkhash]',
    },
    resolve: {
        alias: {
            vendor: path.join(__dirname, '/src/js/vendor'),
            lib: path.join(__dirname, '/src/js/lib'),
            vue: 'vue/dist/vue.js',
            router: path.join(__dirname, '/src/js/router'),
            components: path.join(__dirname, '/src/js/components'),
        },
        extensions: ['.vue', '.jsx', '.js', '.json'],
    },
    target: 'web', // Ensure target is set to 'web' for browser environments
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: APP_DIR,
            exclude: [/node_modules/, /\.DS_Store$/],
            loader: 'babel-loader',
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,  // Use MiniCssExtractPlugin for CSS extraction
                'css-loader',
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource',
            generator: {
                filename: '../img/[name][ext]', // Output images to the `dist/img` folder
            },
        },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: '../css/[name].css', // Output file for extracted CSS
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            moment: 'moment',
        }),
        new WebpackBar({
            name: ' ------ JS Bundle ------ ',
            color: '#f79420',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                node_modules: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'chunk/node_modules',
                    chunks: 'all',
                    minSize: 10,
                },
                vendor: {
                    test: /[\\/]js[\\/]vendor[\\/]/,
                    name: 'chunk/vendor',
                    chunks: 'initial',
                    minSize: 100,
                    minChunks: 1,
                },

                ...file_entry.js_dynamic_group,
            },
        },
    },
};

let cssConfig = {
    mode,
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    entry: {
        ...file_entry.css,
    },
    output: {
        filename: './css_del/[name].bundle.css.js',
        path: BUILD_DIR,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin for CSS extraction
                    'css-loader',
                ],
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,  // Extract CSS to separate files
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    'postcss-loader', // Optional, for PostCSS processing
                    'sass-loader', // Compile Sass to CSS
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].css', // Output file for extracted CSS
        }),
        new WebpackBar({
            name: ' ------ CSS Bundle ------ ',
            color: '#009fba',
        }),
    ],
};

if (mode === 'production') {
    cssConfig = {
        ...cssConfig,
        performance: {
            hints: 'warning',
            maxEntrypointSize: 26214400,
            maxAssetSize: 524288,
        },
    };
}

const baseConfig = {
    jsConfig,
    cssConfig,
};

module.exports = merge.multiple(baseConfig, mergeConfig);