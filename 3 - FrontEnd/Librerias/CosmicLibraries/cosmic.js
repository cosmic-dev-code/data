"use strict";

var $ = (function(){

	function Cosmic(selector = "", allCosmics = false){
		var target = document.createElement("div");

		if(selector === undefined || selector === null || selector === NaN) return void(0);

		/**
		 * Obtener solo los nodos de tipo (#text).
		 */
		const getTexts = childNodes => {
			let allNodes = [...childNodes];

			return allNodes.filter(node => {
				return (node.nodeName === "#text");
			});
		};

		/**
		 * Convertir los elementos de un arreglo a elementos cosmic.
		 */
		const toObjectCosmic = arrItems => {
			return arrItems.map(item => {
				return $(item);
			});
		};

		const isSpace = value => {
			return (value === "" || value === " ")
		};

		/**
		 * 
		 * @return CosmicList<[Cosmic, Cosmic, Cosmic]>
		 * 
		 * Retorno de un arreglo con elementos (cosmic).
		 */
		const CosmicList = (function(){
			function CosmicList(array = []){
				this.data = array;

				this.each = function(callback = function(){}){
					this.data.forEach((cosmicElement, index, array) => {
						callback(cosmicElement, index, new CosmicList(array))
					});
					return true;
				};

				this.len = function(){
					return this.data.length;
				};
			}

			return CosmicList;
		}());

		// Si por segundo parametro se recibe un callback.
		if(typeof allCosmics === "function"){
			$(selector, true).each((element, index, array) => {
				allCosmics(element, index, new CosmicList(array));
			});
			return true;
		}

		if(allCosmics){
			if(typeof selector === "object"){
				target = selector;
			}else{
				target = toObjectCosmic([
					...document.querySelectorAll(selector)
				]);
				return new CosmicList(target);
			}
		}else{
			if(typeof selector === "object"){
				target = selector;
			}else{
				target = document.querySelector(selector);
			}
		}

		if(typeof selector === "object") selector = selector.tagName;
		if(typeof selector === null || selector === undefined || selector === NaN) selector = "body";

		let typeObject = target.toString().slice(
			(target.toString().indexOf("object") + "object".length + 1), 
			(target.toString().length - 1)
		);

		let typeTag = null;
		if(target.tagName) typeTag = target.tagName.toLowerCase();
		else typeTag = target.toString();

		return new Object({
			target: target, 
			typeObject: typeObject, 
			typeTag: typeTag, 
			typeOf: (typeof target), 
			bySelector: selector, 
			/**
			 * Obtener valores.
			 */
			isInput: function(){
				if(typeObject === "HTMLInputElement" || target.tagName === "INPUT" || typeTag === "textarea" || typeTag === "select") return true;
				else return false;
			}, 
			val: function(){
				if(this.isInput()) return this.target.value;
				else return this.target.textContent;
			}, 
			ValHtml: function(){
				return this.target.innerHTML;
			},  
			valText: function(){
				return this.target.textContent
			}, 
			valTag: function(){
				return this.target.outerHTML;
			}, 
			/**
			 * Modificar valores.
			 */
			remove: function(){
				this.target.remove();
			}, 
			setVal: function(text = ""){
				this.target.value = text;
			}, 
			html: function(text = ""){
				this.target.innerHTML = text;
			}, 
			addHtml: function(text = ""){
				this.target.innerHTML += text;
			}, 
			text: function(text = ""){
				this.target.textContent = text;
			}, 
			addText: function(text = ""){
				this.target.textContent += text;
			}, 
			reset: function(){
				if(typeObject === "HTMLFormElement" || typeTag === "form") this.target.reset();
				else if(this.isInput()) this.setVal("");
				else this.text("");
			}, 
			/**
			 * Elementos hijo y padre.
			 */
			lenTags: function(){
				return this.target.childElementCount;
			}, 
			rmTag: function(selector = ""){
				this.target.querySelector(selector).remove();
			}, 
			rpcTag: function(newElement = document.createElement('div'), oldElement = document.createElement('div')){
				if(newElement.target) newElement = newElement.target;
				if(oldElement.target) oldElement = oldElement.target;

				this.target.replaceChild(newElement, oldElement);
			}, 
			firstTag: function(){
				return $(this.target.firstElementChild);
			}, 
			lastTag: function(){
				return $(this.target.lastElementChild);
			}, 
			allTags: function(callback = undefined){
				let arrTagsCosmic = toObjectCosmic(new Array(...this.target.children));

				if(callback !== undefined){
					arrTagsCosmic.forEach((tag, index, array) => {
						callback(tag, index, new CosmicList(array));
					});
					return true;
				}

				return new CosmicList(arrTagsCosmic);
			}, 
			tags: function(sequence = ""){
				const getTag = (type, element) => {
					switch(type){
						case "p": 
							element = element.parentTag();
							break;
						case "f": 
							element = element.firstTag();
							break;
						case "l": 
							element = element.lastTag();
							break;
						default: 
							element = element.allTags().data[parseInt(type)];
							break;
					}

					return element;
				};

				let arrSequence = sequence.split(":");
				var finalTag = getTag(arrSequence[0], this);

				arrSequence.forEach((sec, i) => {
					if(i !== 0){
						finalTag = getTag(sec, finalTag);
					}
				});

				return finalTag;
			}, 
			nodes: function(){
				return new Object({
					first: this.target.firstChild, 
					last: this.target.lastChild, 
					all: new Array(...this.target.childNodes), 
					allText: getTexts(this.target.childNodes), 
					count: this.target.childNodes.length, 
				});
			}, 
			parentTag: function(){
				return $(this.target.parentElement);
			}, 
			append: function(newElement = document.createElement('div')){
				if(newElement.target){
					this.target.appendChild(newElement.target);
				}else{
					this.target.appendChild(newElement);
				}
			}, 
			// Eventos.
			on: function(event = "click", callback = function(){}){
				this.target.addEventListener(event, e => {
					callback(e);
				});
			}, 
			click: function(callback = function(){}){
				this.on("click", event => {
					callback(event);
				});
			}, 
			dblclick: function(callback = function(){}){
				this.on("dblclick", event => {
					callback(event);
				});
			}, 
			hover: function(callback = function(){}, callbackTwo = undefined){
				this.on("mouseover", event => {
					callback(event);
				});

				if(callbackTwo !== undefined){
					this.on("mouseout", event => {
						callback(event);
					});
				}
			}, 
			mouseover: function(callback = function(){}){
				this.on("mouseover", event => {
					callback(event);
				});
			}, 
			load: function(callback = function(){}){
				this.on("load", event => {
					callback(event);
				});
			}, 
			keydown: function(callback = function(){}){
				this.on("keydown", event => {
					callback(event);
				});
			}, 
			keyup: function(callback = function(){}){
				this.on("keyup", event => {
					callback(event);
				});
			}, 
			keypress: function(callback = function(){}){
				this.on("keypress", event => {
					callback(event);
				});
			}, 
			key: function(code = "", callback = function(){}){
				if(code === ""){
					this.keydown(callback);
					return void 0;
				}

				var keys = new Object({
					arrowUp: 38, arrowRight: 39, 
					arrowDown: 40, arrowLeft: 37, 
					enter: 13, shift: 16, 
					control: 17, capsLock: 20, 
					tab: 9, alt: 18, 
					space: 32, backSpace: 8, 
					delete: 46
				});

				if(code.length !== 1){
					if(keys[code] !== undefined){
						this.keydown(event => {
							if(event.keyCode == keys[code]) callback(event);
						});
					}
				}else{
					this.keydown(event => {
						if(event.code === ("Key" + code.toUpperCase())) callback(event);
					});
				}
			}, 
			rmEvent: function(event = "click"){
				this.target.removeEventListener(event);
			}, 
			fireEvent: function(event = "click"){
				this.target.dispatchEvent(new Event(event));
			}, 
			// Modificar atributos.
			attr: function(attribute = "", value = ""){
				if(attribute.toString() === "[object Object]"){
					let values = Object.values(attribute), 
						keys = Object.keys(attribute);

					keys.forEach((key, index) => {
						this.attr(key, values[index]);
					});
				}else{
					this.target.setAttribute(attribute, value);
				}
			}, 
			hasAttr: function(attribute = ""){
				if(this.getAttr(attribute) !== null) return true;
				else return false;
			}, 
			rpcAttr: function(oldAttribute = "", attribute = "", value = ""){
				if(this.hasAttr(oldAttribute)) this.rmAttr(oldAttribute);

				this.attr(attribute, value);
			}, 
			rmAttr: function(attribute = ""){
				this.target.removeAttribute(attribute);
			}, 
			getAttr: function(attribute = ""){
				return this.target.getAttribute(attribute);
			}, 
			togAttr: function(attribute = "", value = ""){
				if(this.hasAttr(attribute)){
					this.rmAttr(attribute);
				}else{
					this.attr(attribute, value);
				}
			}, 
			allAttr: function(){
				let tagAll = this.target.outerHTML;

				tagAll = tagAll.slice(
					(tagAll.indexOf(`<${this.typeTag}`) + (`<${this.typeTag}`.length + 1)), 
					tagAll.indexOf(">")
				);

				let arrAll = new Array();
				let arrAttributes = new Array();
				let arrValues = new Array();

				let attribute = "";
				tagAll.split("").forEach(letter => {
					if(!isSpace(letter)){
						if(letter !== "\"") attribute += letter;
					}else{
						if(attribute !== "") arrAll.push(attribute);
						attribute = "";
					}
				});

				if(attribute){
					arrAll.push(attribute);
					attribute = "";
				}

				arrAll = arrAll.map(attrib => {
					return attrib.split("=");
				});

				arrAll.forEach(attrib => {
					arrAttributes.push(attrib[0]);
					arrValues.push(attrib[1]);
				});

				return new Object({
					all: arrAll, 
					attribs: arrAttributes, 
					values: arrValues
				});
			}, 
			// Modificar clases.
			addClass: function(newClass = ""){
				this.target.classList.add(newClass);
			}, 
			rmClass: function(oldClass = ""){
				this.target.classList.remove(oldClass);
			}, 
			hasClass: function(browserClass = ""){
				return this.target.classList.contains(browserClass);
			}, 
			togAttr: function(browserClass = ""){
				this.target.classList.toggle(browserClass);
			}, 
			rpcClass: function(oldClass = "", newClass = ""){
				this.target.classList.replace(oldClass, newClass);
			}, 
			allClass: function(){
				let classes = new Array();

				if(this.hasAttr("class")){
					let attributeClass = this.getAttr("class");

					let classNow = "";
					attributeClass.split("").forEach(letter => {
						if(!isSpace(letter)) classNow += letter;
						else{
							classes.push(classNow);
							classNow = "";
						}
					});

					if(classNow) classes.push(classNow);
					classNow = "";
				}

				return classes;
			}, 
			// Modificar CSS.
			css: (function css(){
				function css(property = "", value = ""){
					if(property === "to-glass"){
						this.css({
							"background-image": `
								linear-gradient(
									to top left, 
									transparent 10%, 
									rgb(248 249 249 / 40%) 30%, 
									transparent 50%, 
									rgb(248 249 249 / 50%) 70%, 
									transparent 90%, 
									rgb(248 249 249 / 40%) 100%
								)
							`.trim(), 
							"border-top": "3px solid #fff", 
							"border-left": "3px solid #fff", 
							"border-bottom": "2px solid #ccc", 
							"border-right": "2px solid #ccc", 
							"border-radius": "6px"
						});
						return void 0;
					}else if(property === "title"){
						this.css({
							"font-size": "60px", 
							"font-family": "Arial, sans-serif, serif", 
							"letter-spacing": "2px", 
							"text-align": "center"
						});
						return void 0;
					}else if(property.toString() === "[object Object]"){
						let keys = Object.keys(property), 
							values = Object.values(property);
						
						keys.forEach((key, index) => {
							this.css(key, values[index]);
						});
					// Agregar estilos por primera vez.
					}else if(!this.hasAttr("style")){
						this.attr("style", `${property}: ${value};`);
					// Extraer estilos y agregarlos con los nuevos.
					}else{
						let styles = (this.getAttr("style") + ` ${property}: ${value};`);
						this.attr("style", styles);
					}
				}

				return css;
			}()), 
			toArrow: function(mode = "top", color = "#000"){
				this.css({
					"box-sizing": "border-box", 
					"display": "inline-block", 
					"width": "10px", 
					"height": "10px", 
					"border-top": "13px solid transparent", 
					"border-right": "13px solid transparent", 
					"border-bottom": "13px solid transparent", 
					"border-left": "13px solid transparent", 
					"cursor": "pointer"
				});

				if(mode === "top"){
					this.css({
						"border-top": "13px solid transparent",  
						"border-bottom": `13px solid ${color}`
					});
				}else if(mode === "right"){
					this.css({
						"border-top": "13px solid transparent", 
						"border-left": `13px solid ${color}`
					});
				}else if(mode === "bottom"){
					this.css({
						"border-top": `13px solid ${color}`
					});
				}else{
					this.css({
						"border-top": "13px solid transparent", 
						"border-right": `13px solid ${color}`
					});
				}
			}, 
			fullScreen: function(){
				if(this.target.requestFullscreen){
					this.target.requestFullscreen();
				}else if(this.target.webkitRequestFullscreen){
					this.target.webkitRequestFullscreen();
				}
			}
		});
	}

	Cosmic.log = function(){
		var type = arguments[arguments.length - 1], 
			args = null;

		switch(type){
			case "i": 
				args = [...arguments].slice(0, arguments.length - 1);

				console.log(`%c${args}`, `
					display: block;
					width: 100%;
					padding: 10px;
					color: #2E86C1;
					background-color: #AED6F1;
					font-size: 14px;
					letter-spacing: 3px;
				`);
				break;
			case "e": 
				args = [...arguments].slice(0, arguments.length - 1);

				console.log(`%c${args}`, `
					display: block;
					width: 100%;
					padding: 10px;
					color: #B03A2E;
					background-color: #F5B7B1;
					font-size: 14px;
					letter-spacing: 3px;
				`);
				break;
			case "s": 
				args = [...arguments].slice(0, arguments.length - 1);

				console.log(`%c${args}`, `
					display: block;
					width: 100%;
					padding: 10px;
					color: #239B56;
					background-color: #ABEBC6;
					font-size: 14px;
					letter-spacing: 3px;
				`);
				break;
			default: 
				console.log(...arguments);
				break;
		}
	}

	return Cosmic;
}());