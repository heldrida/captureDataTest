var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'JS/Classes/DataReporter.js',
            'Test/**'
        ],
		preprocessors: {
			'./Test/Classes/*.js': ['webpack']
		},
	    colors: true,
	    browsers: ['PhantomJS']
    });
};