/**
 * @class CosmicCarrousel
 */
const CosmicCarrousel = (function(){
	function CosmicCarrousel(){
		// Private properties.
		var elements = new Array(), 
			title = null, 
			template = null, 
			callbackTerminated = function(){};

		// Variables for the control of the pagination.
		/*	--- If has pagination.
			--- Type of pagination.
			--- Index now of the pagination. */
		var withPaginate = false, 
			typePaginate = null, 
			captionPaginateNumerics = "", 
			indexAutoPaginate = 0;

		// Variable que verify if inyected code (HTML, CSS and Javascript).
		var	TERMINATE = false;

		// Indentifier of the elements.
		var classCosmicContainer = null, 
			idContainerCarrousel = null, 
			idCarrousel = null, 
			idButtons = null, 
			classCosmicPaginate = null;

		// Public properties.
		this.media = new Object({
			default: 50, 
			maxWidth1200: 80, 
			maxWidth700: 100
		});

		this.margin = new Object({
			y: "1rem", 
			x: "auto"
		});

		// If the data is empty.
		const empty = data => {
			if(data === null || data === undefined || data === NaN){
				return true;
			}else if(data == "" || data.length <= 0 || data === 0){
				return true;
			}else{
				return false;
			}
		};

		/* Determine if: 
			--- The pagination is type: (circles or numerics), then 
			inyect the type of pagination in 
			the (withPaginate) variable. */
		const addPaginate = classCosmicPaginate => {
			if(typePaginate === "circles"){
				let circles = new Array();

				for(let i = 0; i < elements.length; i++){
					if(i === 0){
						circles.push("<figure class=\"cosmic-circle-selected\"></figure>");
					}else{
						circles.push("<figure class=\"cosmic-circle\"></figure>");
					}
				}

				withPaginate = (`
					<div class="${classCosmicPaginate}">
						${circles.join("")}
					</div>
				`);
			}else if(typePaginate === "numerics"){
				withPaginate = (`
					<div class="${classCosmicPaginate}">
						<span>${captionPaginateNumerics}</span>
						<label>1</label> / 
						<b>${elements.length}</b>
					</div>
				`);
			}
		};

		// Implements auto paginate for the carrousel in orientation to (right).
		this.autoPaginate = function(newTime = 3000){
			let interval = setInterval(() => {
				if(TERMINATE){
					let countElements = (elements.length - 1);
					if(indexAutoPaginate >= countElements){
						if(typePaginate === "circles"){
							document.getElementsByClassName(classCosmicPaginate)[0]
								.children[0]
									.dispatchEvent(new Event('click'));
						}else if(typePaginate === "numerics"){
							for(let i = 0; i < countElements; i++){
								document.getElementById(idButtons)
									.getElementsByTagName('figure')[0]
										.dispatchEvent(new Event('click'));
							}
						}
						indexAutoPaginate = 0;
					}else{
						document.getElementById(idButtons)
							.getElementsByTagName('figure')[1]
								.dispatchEvent(new Event('click'));
					}
				}
			}, newTime);
		};

		// Implements auto paginate for the carrousel in orientation to (left).
		this.autoPaginateReverse = function(newTime = 3000){
			let interval = setInterval(() => {
				if(TERMINATE){
					let countElements = (elements.length - 1);
					if(indexAutoPaginate <= 0){
						if(typePaginate === "circles"){
							let circles = document.getElementsByClassName(classCosmicPaginate)[0].children;
							circles[(circles.length - 1)].dispatchEvent(new Event('click'));
						}else if(typePaginate === "numerics"){
							for(let i = 0; i < countElements; i++){
								document.getElementById(idButtons)
									.getElementsByTagName('figure')[1]
										.dispatchEvent(new Event('click'));
							}
						}

						indexAutoPaginate = countElements;
					}else{
						document.getElementById(idButtons)
							.getElementsByTagName('figure')[0]
								.dispatchEvent(new Event('click'));
					}
				}
			}, newTime);
		};

		// Implements type of pagination to (numbers).
		this.paginateNumerics = function(newCaption = ""){
			typePaginate = "numerics";
			captionPaginateNumerics = newCaption;
		};

		// Implements type of pagination to (circles).
		this.paginateCircles = function(){
			typePaginate = "circles";
		};

		// Layout for the elements of carrousel.
		this.template = function(newTemplate = ""){
			if(empty(newTemplate)) return false;
			template = newTemplate;
		};

		this.addFullDataTemplate = function(object = {}){
			let keys = Object.keys(object), 
				values = Object.values(object), 
				indexLg = null, 
				newObject = new Object({});

			// Determine the index more big of the values.
			for(let i = 0; i < values.length; i++){
				if(values[(i + 1)] !== undefined){
					if(values[i].length > values[(i + 1)].length){
						indexLg = i;
					}
				}else{
					if(indexLg === null) indexLg = i;
				}
			}

			// Extract the values where with the big (index).
			for(let i in values[indexLg]){
				for(let key of keys){
					if(empty(object[key][i])){
						newObject[key] = "";
					}else{
						newObject[key] = object[key][i];
					}
				}

				// Add a new element use the template.
				this.addDataTemplate(newObject);
			}
		};

		// Add a element use the template.
		this.addDataTemplate = function(object = {}){
			let newTemplate = template, 
				varKeys = Object.keys(object), 
				varValues = Object.values(object);

			for(let i in varKeys){
				if(newTemplate.includes(`<%${varKeys[i]}%>`)){
					newTemplate = newTemplate.replace(`<%${varKeys[i]}%>`, varValues[i]);
				}
			}

			this.addData(newTemplate);
		};

		// Set title of carrousel.
		this.setTitle = function(newTitle = ""){
			if(empty(newTitle)) return (void 0);
			title = newTitle;
		};

		this.addData = function(element = ""){
			if(empty(element)) return (void 0);
			elements.push(element);
		};

		this.getData = function(){
			return elements;
		};

		// When the code is inyected, then invoke (callback).
		this.terminate = function(newCallback = function(){}){
			callbackTerminated = newCallback;
		};

		/**
		 * @Create the carrousel in a element specifield.
		 */
		this.createIn = function(selector = ""){
			// Determine if the selector is empty.
			if(empty(selector) || empty(elements)) return (void 0);
			const target = document.querySelector(selector);
			if(empty(target)) return (void 0);

			// Create the identifiers with a random (id).
			let id = Math.round(Math.random() * 1000);
			classCosmicContainer = (`cosmic-container-${id}`);
			idContainerCarrousel = ("containerCarrouselId_"+id);
			idCarrousel = ("carrouserId_"+id);
			idButtons = ("buttons_"+id);
			classCosmicPaginate = (`cosmic-paginate-${id}`);
			
			// Add paginate if exists.
			addPaginate(classCosmicPaginate);

			// Add class to selector specifield.
			target.classList.add(classCosmicContainer);

			/* Inyected code (HTML, CSS and Javascript) in the selector specifield. */
			target.innerHTML += (`
				<style type="text/css">
					:root{
						--cosmic-blue-min: rgb(93 173 226 / 5%);
						--cosmic-blue-2xs: rgb(40 116 166 / 5%);
						--cosmic-blue-xs: rgb(93 173 226 / 10%);
						--cosmic-blue: rgb(93, 173, 226);
						--cosmic-blue-sm: rgb(40 116 166 / 10%);
						--cosmic-blue-lg: rgb(40 116 166);
					}

					.${classCosmicContainer}{
						width: ${this.media.default}%;
						margin: ${this.margin.y} ${this.margin.x};
					}

					@media screen and (max-width: 1200px){
						.${classCosmicContainer}{
							width: ${this.media.maxWidth1200}%;
						}
					}

					@media screen and (max-width: 700px){
						.${classCosmicContainer}{
							width: ${this.media.maxWidth700}%;
						}
					}

					.${idContainerCarrousel}{
						display: block;
						overflow: hidden;
						box-shadow: 0 0 0.6rem 0.3rem rgb(0 0 0 / 5%);
						border-radius: 0.3rem;
					}

						.${idContainerCarrousel} > section{
							display: block;
							width: ${(elements.length * 100)}%;
							transition: 0.3s all ease;
						}

						.${idContainerCarrousel} h6{
							text-align: center;
							font-size: 2rem;
							letter-spacing: 0.2rem;
							padding: 1rem 0;
							font-family: "Arial", "arial", sans-serif, serif;
							color: var(--cosmic-blue);
							text-shadow: 0 0.3rem 1rem var(--cosmic-blue);
							user-select: none;
							background-color: #fff;
						}

						.${idContainerCarrousel} .${classCosmicPaginate}{
							font-family: "arial", "Arial", sans-serif, serif;
							text-align: center;
							color: var(--cosmic-blue);
							padding: 1rem 0;
							user-select: none;
							background-color: #fff;
						}

							.${classCosmicPaginate} label{
								display: inline-block;
								padding: 0.1rem 0.3rem;
								box-shadow: 
									0 0.1rem 0.3rem rgb(0 0 0 / 10%), 
									inset 0 -0.1rem 0.3rem rgb(0 0 0 / 5%);
								border-radius: 0.3rem;
							}

							.${classCosmicPaginate} .cosmic-circle, 
							.${classCosmicPaginate} .cosmic-circle-selected{
								display: inline-block;
								width: 0; height: 0;
								padding: 0.6rem;
								margin: 0.3rem;
								border-radius: 50%;
								cursor: pointer;
								box-shadow: 
									0 0.3rem 1rem rgb(0 0 0 / 10%), 
									inset 0 -0.3rem 1rem rgb(0 0 0 / 10%);
								transition: 0.3s all ease;
							}.cosmic-circle-selected{
								box-shadow: 
									0 0.1rem 0.3rem var(--cosmic-blue), 
									inset 0 -0.1rem 0.3rem var(--cosmic-blue) 
									!important;
							}

						.${idContainerCarrousel} > section > article{
							position: relative;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							justify-content: space-around;
							align-items: center;
							background-color: rgb(242, 243, 244);
							padding: 1rem 0;
						}

					#${idButtons}{position: relative;}
					#${idButtons} > figure{
						position: absolute;
						top: 0; right: 0; bottom: 0; left: 0;
						z-index: 1000;
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: center;
						align-items: center;
						width: 0; height: 0;
						padding: 1.3rem;
						background-color: #fff;
						border-radius: 50%;
						font-weight: bold;
						font-size: 1.6rem;
						cursor: pointer;
						user-select: none;
						box-shadow: 
							0 0 0.6rem 0.3rem rgb(0 0 0 / 10%), 
							inset 0 -0.1rem 0.7rem rgb(0 0 0 / 10%), 
							inset 0 -0.3rem 0.7rem rgb(0 0 0 / 5%);
						color: #ccc;
						transition: 0.4s all ease;
					}

						#${idButtons} > figure:first-child{
							margin-left: 0.6rem;
						}#${idButtons} > figure:last-child{
							left: initial;
							margin-right: 0.6rem;
						}#${idButtons} > figure:hover{
							box-shadow: 
								0 0 0.6rem 0.3rem var(--cosmic-blue-xs), 
								inset 0 -0.1rem 0.7rem var(--cosmic-blue-xs), 
								inset 0 -0.3rem 0.7rem var(--cosmic-blue-min);
							color: var(--cosmic-blue);
						}#${idButtons} > figure:active{
							box-shadow: 
								0 0 0.6rem 0.3rem var(--cosmic-blue-sm), 
								inset 0 -0.1rem 0.7rem var(--cosmic-blue-sm), 
								inset 0 -0.3rem 0.7rem var(--cosmic-blue-2xs);
							color: var(--cosmic-blue-lg);
						}
				</style>
				${((elements.length > 1) ? `
					<center id="${idButtons}">
						<figure><</figure>
						<figure>></figure>
					</center>
				` : '')}
				<main class="${idContainerCarrousel}">
					${(title) ? (`<h6>${title}</h6>`) : ""}
					<section id="${idCarrousel}">
						<article>
							${elements.join("")}
						</article>
					</section>
					${(withPaginate) ? withPaginate : ""}
				</main>
			`);

			/* Now extract the selectors creates with the random selectors. */

			// Get elements by selectors.
			const carrousel = document.getElementsByClassName(idContainerCarrousel)[0], 
				  container = document.getElementById(idCarrousel), 
				  buttons = document.getElementById(idButtons);

			// Determine the width of carrousel, only with the count of elements.
			let transform = 0, 
				max = ((elements.length * 100) - 100);
			
			// Determine the height of principal selector.
			let height = document.getElementsByClassName(idContainerCarrousel)[0].getBoundingClientRect().height;
			height = (height / 40);

			// Enabled buttons only if the count of elements is greater 1.
			if(elements.length > 1){
				document.querySelectorAll(`#${idButtons} > figure`)[0].style.marginTop = (`${height}rem`);
				document.querySelectorAll(`#${idButtons} > figure`)[1].style.marginTop = (`${height}rem`);
			}

			// Width of the elements of carrousel.
			for(let element of container.getElementsByTagName('article')[0].children){
				element.style.width = (`calc(100% / ${elements.length})`);
			}

			/* Next and previus page of carrousel. */

			const next = distance => {
				if(distance === (void 0)) distance = 100;
				if(transform !== max) transform += distance;

				container.style.transform = (
					"translateX(calc(-"+transform+"% / "+elements.length+"))"
				);
			};

			const previus = distance => {
				if(distance === (void 0)) distance = 100;
				transform -= distance;
				if(transform <= 0) transform = 0;

				container.style.transform = (
					"translateX(calc(-"+transform+"% / "+elements.length+"))"
				);
			};

			if(!(elements.length > 1)){
				callbackTerminated();
				TERMINATE = true;
				return true;
			}

			/**
			 * @Implements functionality of buttons only if count elements is greater 1.
			 */

			buttons.getElementsByTagName("figure")[0]
				.onclick = (event) => {
					previus();
					if(typePaginate === "numerics"){
						const label = carrousel.getElementsByClassName(classCosmicPaginate)[0]
							.getElementsByTagName('label')[0];
						let page = parseInt(label.textContent);

						if(page > 1) label.textContent = (page - 1);
					}
					if(typePaginate === "circles"){
						let circles = carrousel.getElementsByClassName(classCosmicPaginate)[0].children;

						for(let i = 0; i < circles.length; i++){
							if(circles[i].classList.contains("cosmic-circle-selected") && circles[(i - 1)] !== undefined){
								circles[i].classList.remove("cosmic-circle-selected");
								circles[i].classList.add("cosmic-circle");

								circles[(i - 1)].classList.remove("cosmic-circle");
								circles[(i - 1)].classList.add("cosmic-circle-selected");
								break;
							}
						}
					}
					indexAutoPaginate--;
				}

			buttons.getElementsByTagName("figure")[1]
				.onclick = (event) => {
					next();
					if(typePaginate === "numerics"){
						const label = carrousel.getElementsByClassName(classCosmicPaginate)[0]
							.getElementsByTagName('label')[0];
						let page = parseInt(label.textContent);

						if(page < elements.length) label.textContent = (page + 1);
					}
					if(typePaginate === "circles"){
						let circles = carrousel.getElementsByClassName(classCosmicPaginate)[0].children;

						for(let i = 0; i < circles.length; i++){
							if(circles[i].classList.contains("cosmic-circle-selected") && circles[(i + 1)] !== undefined){
								circles[i].classList.remove("cosmic-circle-selected");
								circles[i].classList.add("cosmic-circle");

								circles[(i + 1)].classList.remove("cosmic-circle");
								circles[(i + 1)].classList.add("cosmic-circle-selected");
								break;
							}
						}
					}
					indexAutoPaginate++;
				}

			if(typePaginate === "circles"){
				const circles = carrousel.getElementsByClassName(classCosmicPaginate)[0].children;
				for(let i = 0; i < circles.length; i++){
					circles[i].onclick = event => {
						let oldPoint = 0;
						let newPoint = 0;
						for(let j = 0; j < circles.length; j++){
							if(circles[j].classList.contains("cosmic-circle-selected")){
								circles[j].classList.remove("cosmic-circle-selected");
								circles[j].classList.add("cosmic-circle");
								oldPoint = j;
							}
						}
						circles[i].classList.add("cosmic-circle-selected");
						for(let j = 0; j < circles.length; j++){
							if(circles[j].classList.contains("cosmic-circle-selected")){
								newPoint = j;
							}
						}
						indexAutoPaginate = i;
						if(newPoint > oldPoint) next((newPoint - oldPoint) * 100);
						else previus((oldPoint - newPoint) * 100);
					};
				}
			}

			callbackTerminated();
			TERMINATE = true;
		};
	}

	return CosmicCarrousel;
}());