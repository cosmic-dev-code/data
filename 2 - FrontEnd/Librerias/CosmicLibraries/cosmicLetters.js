Cosmic.Letters = class
{
	text = null;
	time = 90;
	target = undefined;
	lang = "plain";
	css = new Object({
		background: "#2e2e2e", 
		white: "#fff", 
		red: "#ff001f", 
		green: "#50ff00", 
		yellow: "#ffe715", 
		comment: "#ccc", 
		cyan: "#00C9FF", 
		purple: "#9B59B6", 
		brown: "#EB984E"
	});
	$id = ("idCosmicLetters" + Math.round(Math.random()*1000) + "_");

	#has = new Object({
		tag: false, 
		com: 0, comLine: 0, 
		str: false, strT: false, strS: false, 
		attr: false, sym: false, 
		brown: 0, cyan: 0, red: 0
	});

	constructor(selector = "", text = ""){
		this.text = text;

		this.target = document.querySelector(selector);
	}

	#noTag = function(letter = ""){
		if(letter !== "<" && letter !== "/" && letter !== ">" && letter !== "=") return true;
		else return false;
	};

	#isString = function(letter = ""){
		if(letter === "\"" || letter === "'" || letter === "\`") return true;
		else return false;
	}

	#isSymbol = function(letter = "", arrSymbols = new Array()){
		let is = false;
		arrSymbols.forEach(symbol => {
			if(letter === symbol) is = true;
		});

		return is;
	};

	#noParameter = function(letter = ""){
		if(/^[a-zA-Z0-9_]$/.test(letter)) return true;
		else return false;
	};

	#isSpace = function(letter){
		if(letter === " " || letter === "\n" || letter === "\t" || letter === "\r") return true;
		else return false;
	}

	#nextPreviusSpace = function(word = "", index = 0){
		let nextIndex = (word.length + index), 
			previusIndex = (index - 1);
		if(this.#isSpace(this.text[previusIndex]) && this.#isSpace(this.text[nextIndex])) return true;
		else return false;
	};

	#getWord = function(word = "", index = ""){
		let nowWord = "";

		word.split("").forEach(letter => {
			nowWord += this.text[index];
			index++;
		});

		if(nowWord === word) return true
		else return false;
	};

	#getWordReserved = function(word = "", index = ""){
		const sanitize = data => {
			let newText = "";

			data.split("").forEach(letter => {
				if(letter !== " " && letter !== "\n" && letter !== "\t" && letter !== "\r"){
					newText += letter;
				}
			});

			return newText;
		};

		let nowWord = "";

		index--;
		if(this.text[index] !== undefined) nowWord += this.text[index];
		index++;

		word.split("").forEach(letter => {
			nowWord += this.text[index];
			index++;
		});

		if(this.text[index] !== undefined) nowWord += this.text[index];

		nowWord = sanitize(nowWord);

		if(nowWord === word) return true
		else{
			if(!/^[a-zA-Z0-9_ ]+$/.test(nowWord)) return true;
			else{
				if(nowWord === word) return true;
				else return nowWord;
			}
		}
	};

	#addEditor = function(){
		this.target.innerHTML = (`
			<div style="background-color: ${this.css.background}; padding: 10px; color: #fff;">
				<pre id="${this.$id}editor"></pre>
			</div>
		`);
	};

	#addText = function(letter = "", color = "", option = undefined){

		if(color === "#fff"){
			document.querySelector(`#${this.$id}editor`).innerHTML += letter;
		}else if(option === "italic"){
			document.querySelector(`#${this.$id}editor`).innerHTML += (`
				<span style="color: ${color}; font-style: italic;">${letter}</span>
			`.trim());
		}else{
			document.querySelector(`#${this.$id}editor`).innerHTML += (`
				<span style="color: ${color};">${letter}</span>
			`.trim());
		}
	};

	write = function(){
		this.#addEditor();

		if(this.lang === "plain") this.textPlain();
		else if(this.lang === "html" || this.lang === "xml" || this.lang === "xaml") this.textTags();
		else if(this.lang === "js") this.textProgramming();
		else this.textPlain();
	}

	textPlain(){
		let arrText = this.text.split(""), 
			i = 0;

		let interval = setInterval(() => {
			if(arrText[(i)] === undefined) clearInterval(interval);
			else{
				this.#addText(arrText[i], this.css.white);
				i++;
			}
		}, this.time);
	}

	textProgramming(){
		let arrText = this.text.split(""), 
			i = 0, 
			cyanItalic = 0, 
			wordReserved = "", 
			hasParameter = false,
			hasFunctionName = false;

		const sanitize = word => {
			let newWord = "";
			word.split("").forEach(letter => {
				if(!this.#isSpace(letter)) newWord += letter;
			});

			return newWord;
		};

		const browserWord = (word, type = "cyanI", option = null,) => {

			if(Array.isArray(word)){
				word.forEach(element => {
					browserWord(...element);
				});
			}else{
				let length = word.length;
				if(option === "space"){
					if(this.#getWord(word, i) && this.#nextPreviusSpace(word, i)){
						if(type === "cyanI") cyanItalic = length;
						else if(type === "brown") this.#has.brown = length;
						else if(type === "red") this.#has.red = length;
					}
				}else{
					if(this.#getWord(word, i)){
						if(type === "cyanI") cyanItalic = length;
						else if(type === "brown") this.#has.brown = length;
						else if(type === "red") this.#has.red = length;
					}
				}
			}
		};

		let interval = setInterval(() => {
			if(arrText[(i)] === undefined) clearInterval(interval);
			else{
				let letter = arrText[i];

				if(this.#getWord("/*", i)) this.#has.com = true;
				if(this.#getWord("*/", i)) this.#has.com = 2;

				if(this.#getWord("//", i)) this.#has.comLine = true;
				if(this.#has.comLine && letter === "\n") this.#has.comLine = false;

				if(/^[a-zA-Z0-9]$/.test(letter) && !this.#isString(letter)){
					wordReserved += letter;
				}else{
					if(letter === "("){
						let pre = document.getElementsByTagName("pre")[0], 
							contentHtml = pre.innerHTML;

						if(contentHtml.includes(wordReserved)){
							contentHtml = contentHtml.slice(
								0, contentHtml.lastIndexOf(wordReserved)
							);

							contentHtml = (contentHtml + `<span style="color: ${this.css.cyan};">${wordReserved}</span>`);
							pre.innerHTML = contentHtml;
						}
					}
					wordReserved = new String("");
				}

				browserWord([
					["let", "cyanI", "space"], ["var", "cyanI", "space"], ["const", "cyanI", "space"], 
					["function", "cyanI", "space"], ["async", "cyanI", "space"], 
					["window", "cyanI"], ["document", "cyanI"], ["console", "cyanI"], 
					
					["this", "brown"], 

					["else", "red"], ["if", "red"], ["await", "red"], ["try", "red"], ["catch", "red"], ["switch", "red"], 
					["break", "red"], ["for", "red"], ["while", "red"], ["do", "red"], ["return", "red"], 
					["await", "red", "space"], ["new", "red", "space"], ["of", "red", "space"]
				]);

				if(wordReserved === "function") hasFunctionName = true;
				if(hasFunctionName && letter === "("){
					hasFunctionName = false;
					hasParameter = true;
				}

				if(letter === ")") hasParameter = false;

				if(letter === "\"") this.#has.str = !this.#has.str;
				if(letter === "'") this.#has.strS = !this.#has.strS;
				if(letter === "`") this.#has.strT = !this.#has.strT;

				if(this.#has.comLine) this.#addText(letter, this.css.comment, "italic");
				else if(this.#has.com){
					this.#addText(letter, this.css.comment, "italic");
					if(Number.isInteger(this.#has.com)) this.#has.com--;
				}else if(this.#has.str || this.#isString(letter)){
					this.#addText(letter, this.css.yellow);
				}else if(this.#has.strS || this.#isString(letter)){
					this.#addText(letter, this.css.yellow);
				}else if(this.#has.strT || this.#isString(letter)){
					this.#addText(letter, this.css.yellow);
				}else if(this.#isSymbol(letter, ["+", "-", "*", "/", "=", "%", "^", "$", "!", "<", ">"])){
					this.#addText(letter, this.css.red);
				}else if(this.#has.brown){
					this.#addText(letter, this.css.brown);
					this.#has.brown--;
				}else if(cyanItalic){
					this.#addText(letter, this.css.cyan, "italic");
					cyanItalic--;
				}else if(hasFunctionName){
					this.#addText(letter, this.css.green, "italic");
				}else if(hasParameter && !/^[0-9]$/.test(letter) && this.#noParameter(letter)){
					this.#addText(letter, this.css.brown, "italic");
				}else if(this.#has.red){
					this.#addText(letter, this.css.red);
					this.#has.red--;
				}else{
					if(/^[0-9]$/.test(letter)){
						this.#addText(letter, this.css.purple);
					}else{
						this.#addText(letter, this.css.white);
					}
				}

				i++;
			}
		}, this.time);
	}

	textTags(){
		let arrText = this.text.split(""), 
			i = 0;

		let interval = setInterval(() => {
			if(arrText[(i)] === undefined){
				clearInterval(interval);
			}else{
				let letter = arrText[i];

				if(letter === "<") this.#has.tag = true;
				else if(letter === ">"){
					this.#has.tag = false; this.#has.attr = false;
				}

				if(this.#has.tag && letter === " ") this.#has.attr = true;
				if(this.#has.tag && this.#isString(letter)) this.#has.str = !this.#has.str;

				if(this.#getWord("<!--", i)) this.#has.com = true;
				if(this.#getWord("-->", i)) this.#has.com = "-->".length;

				if(this.lang === "xml" || this.lang === "xaml"){
					if(this.#has.tag && this.#getWord("xml", i)) this.#has.cyan = "xml".length;
					if(this.#has.tag && this.#getWord("xmlns", i)) this.#has.cyan = "xmlns".length;
					if(this.#has.tag && this.#getWord("xsl", i)) this.#has.cyan = "xsl".length;
				}

				if(this.lang === "xaml"){
					if(this.#has.tag && this.#getWord("mc", i)) this.#has.cyan = "mc".length;
					if(this.#has.tag && this.#getWord(":", i)) this.#has.cyan = ":".length;
				}

				if(this.#has.tag && this.#isString(letter) || this.#has.str){
					this.#addText(letter, this.css.yellow);
				}else if(this.#has.com){
					this.#addText(letter, this.css.comment);
					if(Number.isInteger(this.#has.com)) this.#has.com--;
				}else if(this.#has.cyan){
					this.#addText(letter, this.css.cyan);
					if(Number.isInteger(this.#has.cyan)) this.#has.cyan--;
				}
				else if(this.#has.tag && this.#has.attr && this.#noTag(letter)) this.#addText(letter, this.css.green);
				else if(this.#has.tag && this.#noTag(letter)) this.#addText(letter, this.css.red);
				else this.#addText(letter, this.css.white);

				i++;
			}
		}, this.time);
	}
}