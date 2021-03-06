'use strict';

var mappings = require('../mappings.js');
var DataReporter = require('./Classes/DataReporter');
var Form = require('./Classes/Form');

/**
 * Captures data (based on mappings.js) and send data (using the DataReporter class).
 */
document.addEventListener('DOMContentLoaded', function () {

	// init Form module with the required dependencies
	new Form({
		mappings: mappings,
		dataReporter: new DataReporter()
	});

}, false);