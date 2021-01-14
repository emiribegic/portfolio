const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	module: {
		rules: [
			{
				// When webpack bundles assets, all .js files need to be run through this loader
				test: '/.js$/',
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html',
		}),
	],
};
