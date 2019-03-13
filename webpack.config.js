const path = require('path');
const webpack = require('webpack');
const extractCss = require('extract-text-webpack-plugin');
const friendly = require('friendly-errors-webpack-plugin');
const wplib = [
	'blocks',
	'components',
	'date',
	'editor',
	'element',
	'i18n',
	'utils',
	'data'
];

let blocksCss = new extractCss( {
	filename: './block.css'
} );
let editorCss = new extractCss( {
	filename: './editor.css'
} );
let extractConfig = {
	use: [
		{ loader: 'raw-loader' },
		{
			loader: 'sass-loader',
			options: {
				outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'nested'
			}
		}
	]
};
module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	entry: './index.js',
	devtool: 'source-map',
	output: {
		path: __dirname + '/dist',
		filename: 'blocks.js',
		library: ['wp', '[name]'],
		libraryTarget: 'window'
	},
	/**
	* Setting `externals` allows the use of `import __ from __` syntax for WP's
	* built-in JS libraries. They first need to be listed as dependencies for
	* the script that's designated as `editor_script` when you first call
	* `register_block_type` in PHP.
	*
	* @link https://www.cssigniter.com/importing-gutenberg-core-wordpress-libraries-es-modules-blocks/
	* @link https://webpack.js.org/configuration/externals/
	*/
	externals: wplib.reduce((externals, lib) => {
		externals[`@wordpress/${lib}`] = {
			window: ['wp', lib]
		};

		return externals;
	}, {}),
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /editor\.scss$/,
				exclude: /node_modules/,
				use: editorCss.extract( extractConfig )
			},
			{
				test: /block\.scss$/,
				exclude: /node_modules/,
				use: blocksCss.extract( extractConfig )
			}
		]
	},
	plugins: [
		blocksCss,
		editorCss,
		new friendly( {
			clearConsole: true
		} )
	]
}
