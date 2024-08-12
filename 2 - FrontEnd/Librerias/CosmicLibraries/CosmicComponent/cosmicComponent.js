"use strict";

class CosmicComponent
{
	#error = function(){
		if(arguments.length > 1){
			for(let arg of arguments){
				error(arg);
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
	};

	#empty = data => {
		if(data === undefined || data === null || data === NaN) return true;
		else return false;
	};

	#name = null;
	#content = null;
	#byURL = false;

	set name(data = ""){this.#name = data;}
	get name(){return this.#name;}

	set content(data = ""){this.#content = data;}
	get content(){return this.#content;}

	/**
	 * Get template in (content) and the (name) of component.
	 */
	constructor(content = "", name = "", callback = function(){}){
		if(this.#empty(content)){
			this.#error("The content is not valid ("+content+")");
			return void 0;
		// If get by parameter a (url).
		}else if(content.startsWith("url:")){
			this.#byURL = true;
			content = content.slice("url:".length, content.length);

			fetch(content)
				.then(result => result.text())
				.then(contentComponent => {
					this.content = contentComponent.toString();
				})
				.finally(() => {
					callback(this);
				});
				
		}else{
			this.content = content;
		}

		if(!this.#empty(name) || name !== "") this.name = name;
	}

	/**
	 * Apply component with it variables and it values in a element.
	 */
	applyIn = function(selector = "", objectVars = null, callback = function(){}){

		// Validate the selector.
		if(this.#empty(selector)){
			this.#error("The selector ("+selector+") is not valid.");
			return void 0;
		}

		const apply = () => {
			let arrVars = new Array(), 
				contentGetVars = this.content, 
				element = document.querySelector(selector);

			// Get variables of component.
			while(true){
				if(contentGetVars.includes("<%")){
					let variable = contentGetVars.slice(
						(contentGetVars.indexOf("<%") + 2), 
						contentGetVars.indexOf("%>")
					);

					contentGetVars = contentGetVars.slice(
						(contentGetVars.indexOf("%>") + 2), 
						contentGetVars.length
					);

					arrVars.push(variable);
				}else{
					break;
				}
			}

			// Replace variables by new variables.
			let contentWithNewVars = this.content;
			arrVars.forEach(prop => {
				if(!objectVars[prop]) return void 0;

				contentWithNewVars = contentWithNewVars.replace(
					`<%${prop}%>`, objectVars[prop]
				);
			});

			/* Apply template with the variables and it values. */
			element.innerHTML = contentWithNewVars;
		};

		window.addEventListener("load", event => {
			apply();
		});

		if(this.#byURL) apply();
	};

	getTemplates = function(callback = function(){}){
		// Extract all tags with the (name) of component.
		let $listCosmic = document.querySelectorAll(
			`cosmic_com[name="${this.name}"]`
		);

		if($listCosmic.length <= 0) return void 0;

		// Iterate all tag (cosmic).
		$listCosmic.forEach(cosmic => {

			// Get tags of tag (cosmic).
			let collectChilds = cosmic.children;

			// Variables with the (name) and it (value).
			let	arrVars = new Array(), 
				objectVars = new Object({}), 
				objectParams = this.#getParams(cosmic);

			// Random id for the component.
			let	idElement = (
				"idCosmic" + this.name + 
				Math.round(Math.random()*1000)
			);

			// Extract (name="value").
			for(let child of collectChilds){
				let varName = child.tagName.toLowerCase();
				let varValue = child.innerHTML;
				arrVars.push(new Array(varName, varValue));
			}

			/* Create object with the (names) and values of component, and 
			write the tag (cosmic) with a new element. */

			arrVars.forEach(variable => {
				Object.defineProperty(objectVars, variable[0], {
					value: variable[1], 
					writeable: true
				});
			});

			cosmic.innerHTML = (`
				<div id="${idElement}"></div>
			`);

			// Concat the (params) object and the (tags child) object.
			objectParams.keys.forEach((key, index) => {
				if(key !== "name"){
					Object.defineProperty(objectVars, key, {
						value: objectParams.values[index], 
						writeable: true
					});
				}
			});

			// Create component in the (element) with the random (id).
			this.applyIn(`#${idElement}`, objectVars);
		});
	};

	#getParams = function(tag = document.createElement()){
		// Get this tag in text.
		let text = tag.outerHTML;

		// Cut tag text and get only the parameters.
		let paramsText = text.slice(
			(text.indexOf("cosmic_com") + "cosmic_com".length), 
			text.indexOf(">")
		);

		// Temporary variables.
		let property = "", 
			value = "", 
			hasValue = false;

		// Variables for storage the (variables) and (values) of component.
		var arrVars = new Array(), 
			arrValues = new Array(), 
			object = new Object({});

		paramsText.split("").forEach(letter => {
			if(letter === "\"") hasValue = !hasValue;

			// Get property letter by letter.
			if(/^[a-zA-Z]+$/.test(letter) && !hasValue){
				property += letter;
			}else{
				if(property.length){
					arrVars.push(property);
				}
				property = "";
			}

			// Get value of property letter by letter.
			if(hasValue && letter !== "\""){
				value += letter;
			}else{
				if(value.length){
					arrValues.push(value);
				}
				value = "";
			}
		});

		/* Return the object with: 
			--- (variables equal to keys).
			--- (values equal values). */
		return new Object({
			keys: arrVars, 
			values: arrValues
		});
	};
}