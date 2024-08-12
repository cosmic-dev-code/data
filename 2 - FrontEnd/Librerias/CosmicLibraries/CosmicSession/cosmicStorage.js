/**
 * @class CosmicSession
 */
var CosmicSession = (function(){

	function CosmicSession(){}

	CosmicSession.add = function(data = new Object({})){

		let keyNow = window.sessionStorage.getItem("keyNow");
		data = JSON.stringify(data);

		if(keyNow === null){
			window.sessionStorage.setItem(1, data);
			window.sessionStorage.setItem("keyNow", 1);
		}else{
			let key = (parseInt(window.sessionStorage.getItem("keyNow")) + 1);
			window.sessionStorage.setItem(key, data);
			window.sessionStorage.setItem("keyNow", key);
		}
	};

	CosmicSession.get = function(keyNow = 1){
		return new Object({
			key: keyNow, 
			register: JSON.parse(window.sessionStorage.getItem(keyNow))
		});
	};

	CosmicSession.has = function(key = 1){
		return window.sessionStorage.hasOwnProperty(key);
	};

	CosmicSession.clear = function(){
		window.sessionStorage.clear();
	};

	CosmicSession.delete = function(key = 1){
		if(CosmicSession.has(key)){
			window.sessionStorage.removeItem(key);
		}
	};

	CosmicSession.getAll = function(){
		let key = parseInt(window.sessionStorage.getItem("keyNow")), 
			arrData = new Array();

		if(key !== null){
			for(let i = 1; i <= key; i++){
				if(this.get(i).register !== null) arrData.push(this.get(i));
			}
		}

		return arrData;
	};

	CosmicSession.getData = function(){
		const toArray = data => {
			return [
				Object.keys(data), 
				Object.values(data)
			];
		};

		var dataString = new Array(), 
			arrRegisters = CosmicSession.getAll();

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

	return CosmicSession;
}());