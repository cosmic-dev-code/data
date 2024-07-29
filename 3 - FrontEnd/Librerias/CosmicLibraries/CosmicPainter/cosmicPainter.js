"use strict";

/**
 * @class CosmicPainter
 */
Cosmic.Painter = class{
	// CosmicPainter (settings).
	settings = new Object({
		title: "Cosmic Painter",
		controls: true,
		background: "#fff",
		lineWidth: 6,
		lineColor: "#000",
		zIndex: 100,
		float: true
	});
	
	// CosmicPainter (media queries).
	mediaQueries = new Object({
		minMedia1210: [600,500],
		maxMedia1200: [500,450],
		maxMedia800: [400,350],
		maxMedia500: [300,250],
		maxMedia350: [200, 150]
	});
	
	// CosmicPainter (styles).
	theme = new Object({
		background: "#b5aaff",
		buttonBg: "#6633CC",
		buttonBgHover: "#6723ef",
		buttonValue: "Borrar"
	});

	#errorMessage(message = "Error"){
		let stylesMessage = (`
			background-color: lightred;
			color: red;
			padding: 1rem 2rem 0 2rem;
			text-align: center;
			letter-spa689cing: 2px;
			line-height: 2.3rem;
			font-size: 14px;
			font-weight: bold;
		`);

		let errorMessage = (`
			%cCosmicPainter error: ${message}
		`);

		console.error(errorMessage, stylesMessage);
		return 0;
	}

	$container = undefined;
	$id = (`idCosmicPainter${Math.round(Math.random()*1000)}_`);
	$class = (`class-cosmic-painter-${Math.round(Math.random()*1000)}-`);

	constructor(selector, shadow = true){
		// Extract the element.
		this.$container = document.querySelector(selector);

		// Check if the selector is valid.
		if(this.$container === undefined || this.$container === null){
			this.#errorMessage("The ("+selector+") is not selector.");
			return false;
		}

		// Check if the (shadow) is valid.
		if(shadow === undefined){
			this.#errorMessage('Shadow not accepted.');
			return false;
		}

		if(typeof(shadow) !== "boolean"){
			this.#errorMessage('Value of shadow ('+shadow+') is not boolean.');
			return false;
		}

		// HTML code for the controls.
		let controls = (`
			<div>
				<label for="${this.$id}range" class="${this.$class}label">Grosor del pincel: </label>
				<input type="range" id="${this.$id}range" value="4"/>
			</div>
			<div>
				<label for="${this.$id}color" class="${this.$class}label">Color del pincel: </label>
				<input type="color" id="${this.$id}color"/>
			</div>
		`);
		
		/* Settings of the shadows, if the (theme) is change for user. */
		let shadows = {
			default: {
				txt: 'rgba(28,6,75,0.2)',
				btn: '#331571'
			},
			personalize: {
				txt: 'rgba(0,0,0,0.2)',
				btn: '#000'
			}
		};


		const getShadow = option => {
			// Returns the shadow where change the settings default.
			if(this.theme.buttonBg !== "#6633CC" || this.theme.buttonBgHover !== "#6723ef"){
				if(option === "txt") return shadows.personalize.txt;
				else return shadows.personalize.btn;
			}else{
			// Returns the shadow by default.
				if(option === "txt") return shadows.default.txt;
				else return shadows.default.txt;
			}
		};

		/* Inject HTML code to (container) for create (CosmicPainter). 
		Set all the attributes in the HTML code, of attribute 
		(settings). */
		this.$container.innerHTML = (`
			<!-- CosmicPainter styles -->
			<style type="text/css">
				.${this.$class}container{
					box-sizing: border-box;
					background-color: ${this.theme.background};
					padding: 10px 16px;
					border-radius: 6px;
					text-align: center; display: block; width: 100%;
				}
				
				.${this.$class}container > figure h5{
					padding: 0; margin: 10px 0;				
					font-size: 30px;
					letter-spacing: 3px;
					text-transform: uppercase;
					font-family: "Arial", sans-serif, serif;
					font-weight: bold;
				}#${this.$id}content{
					margin-top: 10px;
					margin-right: auto;
					margin-left: auto;
				}#${this.$id}content article{
					display: block;
					margin-top: 20px;
				}#${this.$id}content article div{
					text-align: left;
					margin: 10px 0;
				}

				.${this.$class}label{
					display: inline-block;
					letter-spacing: 2px;
					font-family: "Arial", sans-serif, serif;
					font-weight: bold;
					color: ${this.theme.txt};
					text-shadow: 
						0 -2px 6px ${getShadow('txt')},
						2px 0 6px ${getShadow('txt')},
						0 2px 6px ${getShadow('txt')},
						-2px 0 6px ${getShadow('txt')};
					margin: 10px 0;
					user-select: none;
					cursor: pointer;
				}

				.${this.$class}button, #${this.$id}color{
					display: inline-block;
					margin: 0.2rem 0.6rem;
					padding: 13px 30px;
					border-radius: 6px;
					outline: none;
					background-color: ${this.theme.buttonBg};
					color: #fff;
					cursor: pointer;
					border: none;
					font-size: 14px;
					font-family: "Arial", sans-serif, serif;
					letter-spacing: 1px;
					transition: 0.4s ease;
					box-shadow: 0 3px 4px ${getShadow('btn')};
				}.${this.$class}button:hover{
					transform: scale(1.1);
					background-color: ${this.theme.buttonBgHover};
				}.${this.$class}button:active{
					transform: scale(1.2);
				}#${this.$id}color{padding: 0;}

				.${this.$class}container canvas{
					display: inline-block;
					${((shadow) ? 'border-radius: 10px;' : '')}
					${((shadow) ? `box-shadow: 
						0 3px 4px rgba(0,0,0,0.3),
						0 20px 30px rgba(0,0,0,0.2);` : '')}
					background-color: ${this.settings.background};
				}
				
					.painter-overlay{
						position: fixed;
						top: 0; right: 0; bottom: 0; left: 0;
						z-index: ${this.settings.zIndex};
					
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						
						background-color: rgba(0,0,0,0.7);
					}
			</style>
			<!-- CosmicPainter -->
			<section class="${this.$class}container">
				<figure id="${this.$id}content">
					<figcaption>
						<h5>${this.settings.title}</h5>
					</figcaption>
					<picture id="${this.$id}overlay">
    					<canvas 
    						id="${this.$id}canvas"
    						width="500"
    						height="400">
    					</canvas>
					</picture>
					<article>
						<div>
							${((this.settings.controls) ? controls : '')}
							<input type="button" class="${this.$class}button" value="${this.theme.buttonValue}" id="${this.$id}buttonReset"/>
						</div>
					</article>
				</figure>
			</section>
		`);

		/**
		 * Media queries
		 */

		// Get all the settings of (Media Queries).
		const queries = this.mediaQueries;

		// Function (Media Queries).
		const painterMediaQueries = () => {
			// All the dimensions of the window.
			let minWidth1210 = window.matchMedia('(min-width: 1210px)');
			let maxWidth1200 = window.matchMedia('(max-width: 1200px)');
			let maxWidth800 = window.matchMedia('(max-width: 800px)');
			let maxWidth500 = window.matchMedia('(max-width: 500px)');
			let maxWidth350 = window.matchMedia('(max-width: 350px)');

			// Function for comprobate if the (media query) is executed.
			const actionQuery = (query = null, width = 0, height = 0) => {
				if(query.matches){
					/* If change the (media), then modify the (width) and (height) of (canvas). */
					document.getElementById((this.$id + "canvas")).setAttribute('width', width);
					document.getElementById((this.$id + "canvas")).setAttribute('height', height);
					// Modify width in css.
					document.querySelector(("#" + this.$id + "content")).style.maxWidth = (`${width}px`);
				}
			};

			// When start (CosmicPainter), verify the (media screen).
			actionQuery(minWidth1210, queries.minMedia1210[0], queries.minMedia1210[1]);
			actionQuery(maxWidth1200, queries.maxMedia1200[0], queries.maxMedia1200[1]);
			actionQuery(maxWidth800, queries.maxMedia800[0], queries.maxMedia800[1]);
			actionQuery(maxWidth500, queries.maxMedia500[0], queries.maxMedia500[1]);
			actionQuery(maxWidth350, queries.maxMedia350[0], queries.maxMedia350[1]);

			// Verify the (media screen) only if this change during the execute.
			minWidth1210.addEventListener('change', event => {
				actionQuery(minWidth1210, queries.minMedia1210[0], queries.minMedia1210[1]);
			});

			maxWidth1200.addEventListener("change", event => {
				actionQuery(maxWidth1200, queries.maxMedia1200[0], queries.maxMedia1200[1]);
			});

			maxWidth800.addEventListener("change", event => {
				actionQuery(maxWidth800, queries.maxMedia800[0], queries.maxMedia800[1]);
			});

			maxWidth500.addEventListener("change", event => {
				actionQuery(maxWidth500, queries.maxMedia500[0], queries.maxMedia500[1]);
			});

			maxWidth350.addEventListener("change", event => {
				actionQuery(maxWidth350, queries.maxMedia350[0], queries.maxMedia350[1]);
			});

			return false;
		};
		
		// Execute the (media screen).
		painterMediaQueries();

		// Line width, get the width of the line, by the ('this.$id_range') element.
		let range = document.getElementById((this.$id + "range"));
		if(range !== undefined && range !== null){
			range.value = this.settings.lineWidth;
		}
		
		/**
		 * Draw CosmicPainter
		 */
		const drawPainter = () => {
			// Styles of the line.
			const lineStyle = context => {
				if(this.settings.controls){
					context.strokeStyle = document.getElementById((this.$id + "color")).value;
					context.lineWidth = parseFloat(document.getElementById((this.$id + "range")).value);
				}else{
					context.strokeStyle = this.settings.lineColor;
					context.lineWidth = this.settings.lineWidth;
				}
				context.stroke();
			};

			// Extract (canvas) and (context) for draw.
			let canvas = document.getElementById((this.$id + "canvas"));
			let context = canvas.getContext('2d');

			// Function for draw in computer.
			const drawPainterComputer = function(){
				let draw = false;

				const getPosition = event => {
					// Get coords of the element.
					let coords = canvas.getBoundingClientRect();
					// Get coords of the mouse on (click), (event).
					return {
						x: (event.clientX - coords.left),
						y: (event.clientY - coords.top)
					};
				};

				// On (mousedowm) start draw.
				canvas.addEventListener('mousedown', event => {
					let position = getPosition(event);
					context.beginPath();
					context.moveTo(position.x, position.y);
					lineStyle(context);
					draw = true;
				});

				// Stop draw.
				canvas.addEventListener('mouseup', event => draw = false);
				canvas.addEventListener('mouseout', event => draw = false);

				// While mouse move, draw if the variable (draw is equal to true).
				canvas.addEventListener('mousemove', event => {
					if(!draw) return false;
					let position = getPosition(event);
					context.lineTo(position.x, position.y);
					lineStyle(context);
				});
			};
			
			// Function for draw in smartphone.
			const drawPainterSmartphone = () => {
			    // Settings the positions of the (container) element.
				document.getElementsByClassName(`${this.$class}container`)[0].style.top = 0;
				document.getElementsByClassName(`${this.$class}container`)[0].style.right = 0;
				document.getElementsByClassName(`${this.$class}container`)[0].style.bottom = 0;
				document.getElementsByClassName(`${this.$class}container`)[0].style.left = 0;

				// Add position to (canvas), (float).
				const stylesOverlay = position => {
					const overlay = document.getElementById((this.$id + "overlay"));
					if(position === "fixed"){
						overlay.classList.add('painter-overlay');
					}else{
						overlay.classList.remove('painter-overlay');
					}

				    return overlay;
				};

				// Get position of the finger of user.
				const getPosition = event => {
					return {
						x: event.touches[0].clientX - canvas.offsetLeft,
						y: event.touches[0].clientY - canvas.offsetTop
					};
				};
				
				// When the user press in the (canvas)...
				canvas.addEventListener('touchstart', event => {
					// If (float) enable then the (canvas) float.
					if(this.settings.float) stylesOverlay("fixed");
				    // get position and draw.
					let pos = getPosition(event);
					context.beginPath();
					lineStyle(context);
					context.moveTo(pos.x, pos.y);
					// Stop scroll in page.
					document.querySelectorAll('body')[0].style.overflow = ("hidden");
				});
				
				// When the user move your finger in (canvas), then draw.
				canvas.addEventListener('touchmove', event => {
					let pos = getPosition(event);
					context.lineTo(pos.x, pos.y);
					lineStyle(context);
					context.stroke();
					// Stop scroll in page.
					document.querySelectorAll('body')[0].style.overflow = ("hidden");
				});

				// When the user leave your finger, stop draw in (canvas).
				canvas.addEventListener('touchend', event => {
					// The (canvas) not float, (only if (float) is enable).
					if(this.settings.float) stylesOverlay("static");
					document.querySelectorAll('body')[0].style.overflow = ("auto");
				});
			};

			// Button for clear the (canvas).
			document.querySelector(`#${this.$id}buttonReset`).onclick = function(){
				context.save();
				context.clearRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
				context.restore();
			};

			// Execute the functions for draw in computer and smartphone.
			drawPainterComputer();
			drawPainterSmartphone();
			return false;
		};
		
		drawPainter();
	}

	// Convert to image the draw of the (canvas).
	getDataURL(settings = ["image/png", 0.5]){
		return document.querySelector(("#" + this.$id + "canvas")).toDataURL(
			settings[0], settings[1]
		);
	}

	getImage = function(){
		let img = document.createElement("img");

		img.setAttribute("src", this.getDataURL());
		img.setAttribute("width", 300);
		img.setAttribute("height", 300);
		return img;
	};
}