const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/client/index.js',
	stats: 'verbose',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
	},
	module: {
		rules: [
			{
				// When webpack bundles assets, all .js files need to be run through this loader
				test: '/.js$/',
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: 'img/[hash]-[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html',
		}),
		new CleanWebpackPlugin({
			// Simulate the removal of files
			dry: true,
			// Write Logs to Console
			verbose: true,
			// Automatically remove all unused webpack assets on rebuild
			cleanStaleWebpackAssets: true,
			protectWebpackAssets: false,
		}),
	],
};
