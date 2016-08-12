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
		this.setEventListeners();

	},

	setProperties: function (params) {

		this.mappings = params.mappings;
		this.dataReporter = params.dataReporter;
		this.form = document.querySelector('form');
		this.mappedEvents = { onChange: 'change', onLoad: 'load' };

	},

	setEventListeners: function () {

		_.forEach(this.mappings, function (obj, key) {

			var el = document.querySelector(obj.selector);

			if (el) {

				el.addEventListener(this.mappedEvents[obj.event], function (e) {

					this.userInputHandler.call(this, { el: e.target, attrs: obj });

				}.bind(this));

			}

		}.bind(this));

	},

	userInputHandler: function (params) {

		var el = params.el;
		var data = (function (attrs) {

			switch (attrs.attribute) {

				case 'value':

					data = '';

					if (attrs.isEmail) {

						if (this.validateEmail(el.value)) {

							data = el.value;

						}

					} else {
						
						data = el.value;

					}

				break;

				case 'text':

					data = el.text;

				break;

				default:

					data = '';

				break;

			}

			return data;

		}.call(this, params.attrs));

		return data;

	},

	validatePhoneNumber: function (data) {
		// no requirements, just number
		return data;
	},

	validateEmail: function (data) {
		// simplified validation *@*.*
		var re = /\S+@\S+\.\S+/;
		return re.test(data);
	}

};

module.exports = Form;