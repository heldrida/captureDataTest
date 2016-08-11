var _ = require('lodash');

function Form (params) {

	if (_.isEmpty(params.mappings) || _.isEmpty(params.dataReporter)) {

		throw new Error('Form required dependencies declaration failed!');

	}

	this.init(params);

}

Form.prototype = {
	
	init: function (params) {

		this.setProperties(params);

	},

	setProperties: function (params) {

		this.mappings = params.mappings;
		this.dataReporter = params.dataReporter;



	},

	setEventListeners: function () {



	}

};

module.exports = Form;