/**
 * @class CosmicStorage
 * @classdesc Clase para manejar el LocalStorage.
 */
var CosmicStorage = (function(){

	function CosmicStorage(){}

	/**
	 * Agrega un nuevo objeto en el LocalStorage.
	 * @memberof CosmicStorage
	 * @param {object} data - Objeto a almacenar.
	 */
	CosmicStorage.add = function(data = new Object({})){

		let keyNow = window.localStorage.getItem("keyNow");
		data = JSON.stringify(data);

		if(keyNow === null){
			window.localStorage.setItem(1, data);
			window.localStorage.setItem("keyNow", 1);
		}else{
			let key = (parseInt(window.localStorage.getItem("keyNow")) + 1);
			window.localStorage.setItem(key, data);
			window.localStorage.setItem("keyNow", key);
		}
	};

	/**
	 * Obtiene un registro específico del LocalStorage.
	 * @memberof CosmicStorage
	 * @param {number} keyNow - Llave del registro a obtener.
	 * @returns {object} - Objeto que contiene la llave del registro y el objeto almacenado.
	 */
	CosmicStorage.get = function(keyNow = 1){
		return new Object({
			key: keyNow, 
			register: JSON.parse(window.localStorage.getItem(keyNow))
		});
	};

	/**
	 * Verifica si un registro existe en el LocalStorage.
	 * @memberof CosmicStorage
	 * @param {number} key - Llave del registro a verificar.
	 * @returns {boolean} - Valor booleano que indica si el registro existe o no.
	 */
	CosmicStorage.has = function(key = 1){
		return window.localStorage.hasOwnProperty(key);
	};

	/**
	 * Elimina todos los registros del LocalStorage.
	 * @memberof CosmicStorage
	 */
	CosmicStorage.clear = function(){
		window.localStorage.clear();
	};

	/**
	 * Elimina un registro específico del LocalStorage.
	 * @memberof CosmicStorage
	 * @param {number} key - Llave del registro a eliminar.
	 */
	CosmicStorage.delete = function(key = 1){
		if(CosmicStorage.has(key)){
			window.localStorage.removeItem(key);
		}
	};

	/**
	 * Actualiza un registro específico del LocalStorage.
	 * @memberof CosmicStorage
	 * @param {number} key - Llave del registro a actualizar.
	 * @param {object} newData - Objeto con los nuevos datos a almacenar en el registro.
	 */
	CosmicStorage.put = function(key = 1, data = new Object({})){
		if(CosmicStorage.has(key)){
			data = JSON.stringify(data);
			window.localStorage.setItem(key, data);
		}
	};

	/**
	 * Obtiene todos los registros del LocalStorage.
	 * @memberof CosmicStorage
	 * @returns {array} - Arreglo que contiene todos los objetos almacenados en el LocalStorage.
	 */
	CosmicStorage.getAll = function(){
		let key = parseInt(window.localStorage.getItem("keyNow")), 
			arrData = new Array();

		if(key !== null){
			for(let i = 1; i <= key; i++){
				if(this.get(i).register !== null) arrData.push(this.get(i));
			}
		}

		return arrData;
	};

	/**
	 * Obtiene los datos del LocalStorage.
	 * @memberof CosmicStorage
	 * @returns {object} - Objeto que contiene los registros en diferentes formatos.
	 * @returns {array} data - Arreglo que contiene los registros en forma de arrays anidados.
	 * @returns {string} toTextXML - Cadena que contiene los registros en formato XML.
	 * @returns {object} toDocumentXML - Objeto DOM XML que contiene los registros.
	 * @returns {void} toFileXML - Abre un documento XML con todos los registros en una nueva ventana.
	 */
	CosmicStorage.getData = function(){
		const toArray = data => {
			return [
				Object.keys(data), 
				Object.values(data)
			];
		};

		var dataString = new Array(), 
			arrRegisters = CosmicStorage.getAll();

		arrRegisters.forEach(reg => {
			dataString.push([
				reg.key, 
				toArray(reg.register)
			]);
		});

		return new Object({
			data: dataString, 
			toTextXML: function(){
				let textXML = "";
				let textRegister = "";

				this.data.forEach(data => {
					textRegister += (`
						<register key="${data[0]}">
					`);
					for(let i in data[1][0]){
						textRegister += (`
							<${data[1][0][i]} value="${data[1][1][i]}"/>
						`);
					}
					textRegister += (`
						</register>
					`);
				});

				textXML += (`
					<registers>
							${textRegister}
					</registers>
				`);

				return textXML;
			}, 
			toDocumentXML: function(){
				const domParser = new DOMParser();
				return domParser.parseFromString(this.toTextXML(), "text/xml");
			}, 
			toFileXML: function(){
				let fileXML = new Blob(
					[this.toTextXML()], 
					{type: "text/xml"}
				);

				window.open(
					URL.createObjectURL(fileXML)
				);
			}
		});
	};

	return CosmicStorage;
}());