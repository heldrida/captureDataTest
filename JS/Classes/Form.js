function Form (params) {

	this.init(params);

}

Form.prototype = {
	
	init: function (params) {

		this.setProperties(params);

	},

	setProperties: function (params) {

		this.mappings = params.mappings;
		this.dataReporter = params.dataReporter;
	
	}

};

module.exports = Form;