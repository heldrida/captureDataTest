var Form = require('../../JS/Classes/Form');

describe('Form', function () {

		var form;	

		describe('constructor', function () {
		
			beforeEach(function () {
		
				form = new Form({
					mappings: {},
					dataReporter: {}
				});
		
			});

			it('initalizes the form with mappings and dataReporter properties declared', function () {
		
				expect(form.mappings).toEqual({});
				expect(form.dataReporter).toEqual({});
		
			});
		
		});

});