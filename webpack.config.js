var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './JS/init.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: []
	}
};