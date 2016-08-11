var Form = require('../../JS/Classes/Form');
var fakeParams = { param1: "foobar" };

describe('Form', function () {

		var form;	

		describe('constructor', function () {
		
			beforeEach(function () {
		
				form = new Form({
					mappings: fakeParams,
					dataReporter: fakeParams
				});
		
			});

			it('initalizes the form with mappings and dataReporter properties declared', function () {
		
				expect(form.mappings).toEqual(fakeParams);
				expect(form.dataReporter).toEqual(fakeParams);
		
			});
		
		});

});