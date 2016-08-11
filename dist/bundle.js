/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var mappings = __webpack_require__(1);
	var DataReporter = __webpack_require__(2);

	(function () {
		'use strict';

		/**
		 * This function is responsible for capturing data (based on mappings.js) and sending data (with use of DataReporter class).
		 *
		 * @name init
		 */
		function init () {

		}

		document.addEventListener('DOMContentLoaded', init, false);

	}());


/***/ },
/* 1 */
/***/ function(module, exports) {

	var mappings = [
	    {
	        id: 1,
	        selector: '#email',
	        attribute: 'value',
	        event: 'onChange',
	        isEmail: true,
	        isPhoneNumber: false
	    },
	    {
	        id: 2,
	        selector: '#firstName',
	        attribute: 'value',
	        event: 'onChange',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 3,
	        selector: '#lastName',
	        attribute: 'value',
	        event: 'onChange',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 4,
	        selector: 'input[name="sex"]',
	        attribute: 'radio',
	        event: 'onChange',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 5,
	        selector: '#phoneNumber',
	        attribute: 'value',
	        event: 'onChange',
	        isEmail: false,
	        isPhoneNumber: true
	    },
	    {
	        id: 6,
	        selector: '#termsAndConditions',
	        attribute: 'checkbox',
	        event: 'onChange',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 7,
	        selector: '.productName',
	        attribute: 'text',
	        event: 'onLoad',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 8,
	        selector: '.productQuantity',
	        attribute: 'text',
	        event: 'onLoad',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 9,
	        selector: '.productPrice',
	        attribute: 'text',
	        event: 'onLoad',
	        isEmail: false,
	        isPhoneNumber: false
	    },
	    {
	        id: 10,
	        selector: '#totalPrice',
	        attribute: 'text',
	        event: 'onLoad',
	        isEmail: false,
	        isPhoneNumber: false
	    }
	];

	module.exports = mappings;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * This class is managing the data by storing and sending them.
	 *
	 * @constructs DataReporter
	 */
	function DataReporter() {
		this.data = {};
	}

	/**
	 * This method is storing the new data in the class' instance property "data" and returning wherever the data has changed or not.
	 * 
	 * @name store
	 * @param {number} id - Id of the data to store.
	 * @param {string} data - data to store in the data property.
	 * @returns {boolean} If the value has changed or not.
	 */
	DataReporter.prototype.store = function (id, data) {
		var valueChanged = false;

		if (!this.data[id] || this.data[id] !== data) {
			valueChanged = true;
			this.data[id] = data;
		}

		return valueChanged;
	};

	/**
	 * This method is making the request to send the new data to the Back-end.
	 * In this exercise, this method will only be printing the captured data in the console.
	 * 
	 * @name makeRequest
	 * @param {number} id - Id of the data to send.
	 * @param {string} data - data to send to the Back-end.
	 */
	DataReporter.prototype.makeRequest = function (id, data) {
		window.console.log('dataCaptured: mapping id: ' + id + ' - data: ' + data);
	};

	/**
	 * This method is called in order to store and send the data to the Back-end.
	 * The data will be sent only if it has changed, this is why we are using ids to identify and store them. 
	 *
	 * @name send
	 * @param {number} id - Id of the data to send/store.
	 * @param {string} data - data to send to the Back-end.
	 */
	DataReporter.prototype.send = function (id, data) {
		var valueChanged = this.store(id, data);

		if (valueChanged) {
			this.makeRequest(id, data);
		}
	};

	module.exports = DataReporter;

/***/ }
/******/ ]);