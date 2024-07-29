/**
 * @class CosmicValidate
 */
Cosmic.Validate = class 
{
	// Regular expresions, for the validations.
	static expresions = new Object({
		// Data.
		number: new RegExp(/^[0-9.]+$/),
		text: new RegExp(/^[a-z .A-Z\u00E0-\u00FC]+$/),
		textAndNumber: new RegExp(/^[a-z 0-9.A-Z\u00E0-\u00FC]+$/),
		// User.
		email: new RegExp(/^\w+@[a-zA-Z]+\.[a-zA-Z]+$/), 
		age: new RegExp(/^[0-9]{2}$/), 
		// Date and time.
		date: new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/), 
		time: new RegExp(/^[0-9]{2}:[0-9]{2}$/), 
		month: new RegExp(/^[0-9]{4}-[0-9]{2}$/), 
		dateTimeLocal: new RegExp(
			/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}$/
		)
	});

	static #error(){
		if(arguments.length > 1){
			for(let arg of arguments){
				this.#error(arg);
			}
		}else{
			console.log(`%c${arguments[0]}`, `
				display: block;
				width: 100%;
				padding: 10px;
				color: #B03A2E;
				background-color: #F5B7B1;
				font-size: 14px;
				letter-spacing: 3px;
			`);
		}
	}

	// Function for write less code, (only check a (array)).
	static #verifyArray(callback = new Function(), arrData){
		if(Array.isArray(arrData)){
			try{
				let arrValidate = new Array();
				callback(arrValidate);
				return arrValidate;
			}catch(error){
				this.#error("Error -> "+error);
			}
		}else{
			this.#error("The data is not type array.");
		}
	};

	static getSelector = function(selector = ""){
		var $form = document.createElement('form');

		if(this.empty(selector)) return false;
		else if(!this.isString(selector)) return false;
		else $form = document.querySelector(selector);

		if(this.empty($form)){
			this.#error(`Selector ${selector} is not valid.`);
			return false;
		}

		return $form;
	};

	/**
	 * @Validate data type.
	 */

	static isSpace = value => {
		if(value === "\t" || value === " " || value === "\n" || value === "\t") return true;
		else return false;
	};

	static isNumber = value => {
		if(typeof value === "number" || Number.isInteger(value)) return true;
		else return false;
	};

	static isInteger = value => {
		if(!this.isNumber(value)) return false;

		if(Number.isInteger(value)) return true;
		else return false;
	};

	static isFloat = value => {
		if(!this.isNumber(value)) return false;

		if(String(value).includes(".")) return true;
		else return false;
	};

	static isString = value => {
		if(typeof value === "string") return true;
		else return false;
	};

	static isArray = value => {
		if(Array.isArray(value)) return true;
		else return false;
	};

	static isBoolean = value => {
		if(typeof value === "boolean") return true;
		else return false;
	};

	static isChar = value => {
		if(this.isString(value) && !this.empty(value)){
			if(value.length === 1) return true;
		}
		return false
	};

	static isType = value => {
		if(
			this.isNumber(value) || 
			this.isString(value) || 
			this.isBoolean(value) 
		) return true;
		else return false;
	};

	static isFunction = value => {
		if(typeof value === "function" || value.toString().indexOf(`function ${value.name}`) === 0) return true;
		else return false;
	};

	static isClass = value => {
		if(value.toString().indexOf(`class ${value.name}`) === 0) return true;
		if(value.toString().indexOf(`class`) === 0) return true;
		else return false;
	};

	static empty = data => {
		if(data === undefined || data === null || data === NaN) return true;
		else if(data === "" || data.length <= 0) return true;
		else return false;
	};

	/**
	 * @Varify data.
	 */

	static pattern = function(value = null, pattern = "text"){
		// Except data.
		if(pattern === "except" || pattern === "file") return true;
		// Verify data is not empty.
		if(this.empty(value)) return false;

		// Browser if pattern not exists then return false.
		if(this.empty(this.expresions[pattern])) return false;
		// Browser pattern and validate with the (test) method.
		else if(this.expresions[pattern].test(value)) return true;
		else return false;
	};

	// Validate data (length).
	static minMax = function(value = "0", expresion = 0, stop = "equal"){
		value = String(value);
		if(typeof expresion !== "number") return false;
		switch(stop){
			case "min": 
				if(value.length >= expresion) return true;
				else return false;
				break;
			case "max": 
				if(value.length <= expresion) return true;
				else return false;
				break;
			case "equal": 
				if(value.length === expresion) return true;
				else return false;
				break;
			default: return false; break;
		}
	};

	static sanitizeString = string => {
		/* Remove tag (HTML). */
		const cutHTMLCode = function(str = "", opc = true){
			let posOne, posTwo, cutOne, cutTwo;
			if(opc){
				posOne = str.indexOf("<");
				posTwo = (str.indexOf("</") + "</".length);
			}else{
				posOne = str.indexOf(">");
				posTwo = (str.indexOf(">") + 1);
			}

			cutOne = str.slice(0, posOne);
			cutTwo = str.slice(posTwo, str.length);

			return (cutOne + cutTwo);
		};
		if(this.empty(string)) return false;

		/* While data includes (<) or (>) then remove symbols. */
		while(true){
			if(string.includes("<") && string.includes("</")){
				string = cutHTMLCode(string);
			}else if(string.includes(">")){
				string = cutHTMLCode(string, false);
			}else break;
		}

		// Returns string.
		return string;
	};

	// Validate if all data is valid.
	static patternAll = function(arrData = new Array()){
		return this.#verifyArray(arrValidate => {
			arrData.forEach(data => {
				if(this.pattern(data[1], data[2])) arrValidate.push([data[0], true]);
				else arrValidate.push([data[0], false]);
			});
		}, arrData);
	};

	// Validate all data, if is empty.
	static emptyAll = function(arrData = new Array(), options = new Object()){
		let arrValidate = new Array();
		let hasEmpty = false;

		arrData.forEach(data => {
			if(options.except){
				options.except.forEach(except => {
					if(data[0] === except) data[1] = "default";
				});
			}

			if(this.empty(data[1])){
				arrValidate.push([data[0], true]);
				hasEmpty = true;
			}else{
				arrValidate.push([data[0], false]);
			}
		});

		return new Object({
			dataEmpty: arrValidate, 
			hasEmpty: hasEmpty
		});
	};

	// Verify all length data.
	static minMaxAll = function(arrData = new Array()){
		return this.#verifyArray(arrValidate => {
			arrData.forEach(data => {
				if(this.minMax(data[1], data[2], data[3])) arrValidate.push([data[0], true]);
				else arrValidate.push([data[0], false]);
			});
		}, arrData);
	};

	// Get all inputs of a element.
	static getInputs = function(selector = document){
		// Verify and get element.
		if(this.isString(selector)){
			if(this.empty(selector)) return false;
			else selector = document.querySelector(selector);
		}

		/* Get inputs. */
		let arrInputs = selector.getElementsByTagName('input'),
			arrAreas = selector.getElementsByTagName('textarea'), 
			arrSelects = selector.getElementsByTagName('select');
			
		/* Slice all inputs, input of (string) and inputs of (option). */

		let	arrInputsString = new Array(), 
			arrInputsOption = new Array(),
			// Input no string.
			arrDifferent = new Array('submit', 'button', 'checkbox', 'radio');

		for(let input of arrInputs){
			let isDifferent = false;
			arrDifferent.forEach(different => {
				if(input.type !== "button" && input.type !== "submit"){
					if(input.type === different) isDifferent = true;
				}else{
					isDifferent = "aButton";
				}
			});
			if(isDifferent === true) arrInputsOption.push(input);
			else if(isDifferent === false) arrInputsString.push(input);
		}

		arrInputsString = new Array(...arrInputsString, ...arrAreas, ...arrSelects);

		return new Object({
			inputString: arrInputsString, 
			inputOption: arrInputsOption, 
			inputAll: new Array(...arrInputsString, ...arrInputsOption)
		});
	};

	static getValues(selector = document, getTypes = false){
		if(this.isString(selector)){
			if(this.empty(selector)) return false;
			else selector = document.querySelector(selector);
		}
		const arrInputsStrings = this.getInputs(selector).inputString, 
			  arrInputsOptions = this.getInputs(selector).inputOption,
			  arrValuesStrings = new Array(), 
			  arrValuesOptions = new Array();

		for(let input of arrInputsStrings){
			if(!getTypes) arrValuesStrings.push([input.getAttribute('name'), input.value]);
			else arrValuesStrings.push([input.getAttribute('name'), input.value, input.type]);
		}

		for(let input of arrInputsOptions){
			if(input.checked) arrValuesOptions.push([input.getAttribute('name'), input.value, true]);
			else arrValuesOptions.push([input.getAttribute('name'), input.value, false]);
		}

		function toObject(){
			let object = new Object({});

			this.all.forEach(data => {
				Object.defineProperty(object, data[0], {
					value: data[1], 
					writable: true
				});
			});
			return object;			
		}

		return new Object({
			strings: {
				all: arrValuesStrings, 
				toObject: toObject
			}, 
			options: {
				all: arrValuesOptions, 
				toObject: toObject
			}, 
			valuesAll: new Array(...arrValuesStrings, ...arrValuesOptions), 
		});
	};

	static reviewForm(selector = "", options = new Array()){
		if(!this.getSelector(selector)) return 0;
		var $form = this.getSelector(selector);
		
		const dataSelector = this.getValues($form, true);
		const dataString = dataSelector.strings.all, 
			  arrDataOption = dataSelector.options.all;

		for(let i = 0; i < dataString.length; i++){
			if(dataString[i][2] === "datetime-local") dataString[i][2] = "dateTimeLocal";
			if(dataString[i][2] === "select") dataString[i][2] = "textAndNumber";
			if(dataString[i][2] === "textarea") dataString[i][2] = "textAndNumber";
			if(dataString[i][2] === "password") dataString[i][2] = "textAndNumber";
		}

		for(let i = 0; i < dataString.length; i++){
			if(options.replacePatterns){
				if(!this.empty(options.replacePatterns[dataString[i][0]])){
					dataString[i][2] = options.replacePatterns[dataString[i][0]];
				}
			}
		}

		for(let i = 0; i < dataString.length; i++){
			if(options.replaceNames){
				if(!this.empty(options.replaceNames[dataString[i][0]])){
					dataString[i][0] = options.replaceNames[dataString[i][0]];
				}
			}
		}

		let arrTrueString = new Array(), 
			arrFalseString = new Array(),
			arrDataString = this.patternAll(dataString);
		let arrTrueOption = new Array(), 
			arrFalseOption = new Array();

		let hasInvalid = false, 
			hasEmpty = this.emptyAll(dataString).hasEmpty;

		for(let i in arrDataString){
			if(arrDataString[i][1]) arrTrueString.push(arrDataString[i][0]);
			else{
				arrFalseString.push(arrDataString[i][0]);
				hasInvalid = true;
			}
		}

		for(let i in arrDataOption){
			if(arrDataOption[i][1]) arrTrueOption.push(arrDataOption[i][0]);
			else arrFalseOption.push(arrDataOption[i][0]);
		}

		return new Object({
			strings: {
				valid: arrTrueString, 
				invalid: arrFalseString, 
				all: arrDataString
			}, 
			options: {
				valid: arrTrueOption, 
				invalid: arrFalseOption, 
				all: arrDataOption
			}, 
			reviewsAll: {
				valid: new Array(...arrTrueString, ...arrTrueOption), 
				invalid: new Array(arrFalseString, ...arrFalseOption), 
				all: new Array(...arrDataString, ...arrDataOption), 
			}, 
			dataEmpty: this.emptyAll(dataString).dataEmpty, 
			hasInvalid: hasInvalid, 
			hasEmpty: hasEmpty
		});
	};

	static Form = class{
		target = document.createElement('form');
		selector = "";

		constructor(selector = ""){
			if(!$.Validate.getSelector(selector)) return 0;

			this.target = $.Validate.getSelector(selector);
			this.selector = selector;
		}

		selectByName = function(selector = ""){return this.target.querySelectorAll(`[name="${selector}"]`);};
		selectById = function(selector = ""){return this.target.querySelector(`[id="${selector}"]`);};
		selectByClass = function(selector = ""){return this.target.querySelectorAll(`[class="${selector}"]`);};
		selectByType = function(selector = ""){return this.target.querySelectorAll(`[type="${selector}"]`);};

		validate(options = new Object()){
			return $.Validate.reviewForm(this.selector, options);
		}

		getValues(getTypes = false){
			return $.Validate.getValues(this.target, getTypes);
		}

		getInputs(){return this.target.getElementsByTagName('input');}
	};
}