var Form = require('../../JS/Classes/Form');
var fakeParams = { param1: "foobar" };
var fakeMapAttrs = [{
	id: 20,
	selector: '#foobar',
	attribute: 'value',
	event: 'onChange',
	isEmail: false,
	isPhoneNumber: false
}, {
	id: 21,
	selector: '#barfoo',
	attribute: 'value',
	event: 'onChange',
	isEmail: false,
	isPhoneNumber: false
}];

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

		describe('User input handler', function () {

			var el;
			var str = 'test@test.cc';

			beforeEach(function () {
		
				form = new Form({
					mappings: fakeParams,
					dataReporter: fakeParams
				});

				el = document.createElement('input');
				el.setAttribute('name', 'foobar');
				el.setAttribute('id', 'foobar');
				el.value = 'foobar';

			});

			it('should retrieve data from DOM element based on its attributes', function () {

				expect(form.userInputHandler({
					el: el,
					attrs: fakeMapAttrs[0]
				})).toEqual('foobar');

			});

			it('validate the email address', function () {
				el.value = 'test@test.cc';
				expect(form.userInputHandler({
					el: el,
					attrs: fakeMapAttrs[1]
				})).toEqual('test@test.cc');
			});

		});

		describe('Data store', function () {

			var form;
			
			beforeEach(function () {
				
				form = new Form({
					mappings: fakeParams,
					dataReporter: fakeParams
				});

				form.dataReporter.store(1, 'new-data');

			});

			it('data should exist', function () {

				expect(form.dataReporter.data).toEqual({
					1: 'new-data'
				});

			});			

		});

});