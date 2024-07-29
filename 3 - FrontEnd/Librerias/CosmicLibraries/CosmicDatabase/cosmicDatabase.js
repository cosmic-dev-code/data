"use strict";

/**
 * @class CosmicDatabase
 */
var CosmicDatabase = (function(){

	function CosmicDatabase(databaseName = "", version = 1, messageVersion = null){
		
		/**
		 * @private properties of the (CosmicDatabase) class.
		 */
		var tablesCreate = new Array(), // Table to create.
			  tablesDelete = new Array(), // Tables to delete.
			  objectStores = new Array(), 
			  indices = new Array(), 
			  DB = null; // The database.

		// Function where exists a change version.
		const getMessageChangeVersion = function(message = null){
			if(empty(message)){
				return (`The database change of version, please refresh your browser.`);
			}else{
				return message;
			}
		};

		// Comprobate if the data is empty.
		function empty(data = ""){
			if(data === undefined || data === null) return true;
			else if(data === "" || data.length <= 0) return true;
			else return false;
		}

		/**
		 * @public properties of the (CosmicDatabase) class.
		 */
		this.hasDatabase = false;
		this.databaseName = databaseName;
		this.version = version;
		this.isExecute = false;
		this.isUse = false;
		this.errorCode = null;
		this.errorCodeDB = null;

		this.getProperties = function(){
			return new Object({
				hasDatabase: this.hasDatabase, 
				databaseName: this.databaseName, 
				version: this.version, 
				isExecute: this.isExecute, 
				isUse: this.isUse, 
				errorCode: this.errorCode, 
				errorCodeDB: this.errorCodeDB, 
			});
		};

		this.createTable = function(tableName = "", settings = {}){
			if(empty(tableName) || empty(settings)) return false;

			tablesCreate.push([
				tableName, 
				settings
			]);
			return true;
		};

		this.createTables = function(arrNames = [], arrKeys = []){
			if(empty(arrNames)) return false;

			arrNames.forEach((name, index) => {
				let settings = new Object({
					autoIncrement: false, 
					keyPath: false
				});

				if(arrKeys[index] === "autoIncrement" || empty(arrKeys[index])){
					settings.autoIncrement = true;
				}else{
					settings.keyPath = arrKeys[index];
				}

				tablesCreate.push([
					name, 
					settings
				]);
			});

			return true;
		};

		this.deleteTable = function(tableName = ""){
			if(empty(tableName)) return false;
			tablesDelete.push(tableName);
			return true;
		};

		this.deleteTables = function(tablesNames = []){
			if(empty(tablesNames)) return false;
			tablesNames.forEach(tableName => tablesDelete.push(tableName));
			return true;
		};

		this.createIndex = index => {
			if(empty(index)) return false;

			if(!Object.hasOwn(index, "settings")){
				Object.defineProperty(index, "settings", {
					value: {
						unique: false, 
						multiEntry: false, 
						locate: null
					}, 
					writable: true
				});
			}

			indices.push(index);
			return true;
		};

		this.createIndices = index => {
			if(empty(index)) return false;
			else if(empty(index.tables)) return false;

			index.tables.forEach(name => {
				if(!empty(index.indicesProperties[name])){
					index.indicesProperties[name].forEach(indexProperty => {
						let newIndex = {
							table: name, 
							indexName: indexProperty[0], 
							property: indexProperty[1], 
							settings: {
								unique: false, 
								multiEntry: false, 
								locate: null
							}
						};

						indices.push(newIndex);
					});
				}
			});
			return true;
		};

		this.createIndicess = index => {
			if(empty(index)) return false;
			else if(empty(index.indeces)) return false;

			let properties = Object.keys(index.indices);

			console.log(properties);
		};

		this.Table = function(tableName = ""){

			this.tableName = tableName;
			this.indexProperty = null;
			this.autoIncrement = null;
			this.keyPath = null;

			const getInfo = () => {
				let objectStore = DB.transaction([this.tableName], "readonly")
					.objectStore(this.tableName);
				let arrIndices = [];
				this.autoIncrement = objectStore.autoIncrement;
				this.keyPath = objectStore.keyPath;

				indices.forEach(index => {
					if(index.table === this.tableName){
						arrIndices.push({
							indexName: index.indexName, 
							property: index.property
						});
					}
				});

				this.indexProperty = arrIndices;

			}; getInfo();

			const checkIndices = object => {
				if(!empty(this.indexProperty)){
					let hasValues = true;
					for(let indexName of this.indexProperty){
						// ...
					}
				}
			};

			this.add = function(object = {}){
				return new Promise((resolve, reject) => {

					let proccess = DB.transaction(this.tableName, "readwrite")
						.objectStore(this.tableName)
							.add(object);

					proccess.onsuccess = () => resolve(true);

					proccess.onerror = event => reject(event.target.error.message);
				});
			};

			this.has = function(key = 1){
				return new Promise((resolve, reject) => {
					(async function(){
						try{
							let register = await this.get(key);
							resolve(true);
						}catch(error){
							reject(false);
						}
					}());
				});
			};

			this.getAll = function(){
				return new Promise((resolve, reject) => {
					let proccess = DB.transaction([this.tableName], "readonly")
						.objectStore(this.tableName)
							.openCursor(), 
						arrRegisters = new Array();

					proccess.onsuccess = function(event){
						let cursor = event.target.result;

						if(cursor){
							let register = cursor.value;
							Object.defineProperty(register, "key", {
								value: cursor.key, 
								writable: true
							});
							arrRegisters.push(register);
							cursor.continue();
						}else{
							resolve(arrRegisters);
						}
					};

					proccess.onerror = event => reject(event.target.error.message);
				});
			};

			this.get = function(key = 1){
				return new Promise((resolve, reject) => {
					let proccess = DB.transaction([this.tableName], "readonly")
						.objectStore(this.tableName)
							.get(key);

					proccess.onsuccess = function(event){
						let register = event.target.result;
						if(!empty(register)){
							Object.defineProperty(register, "key", {
								value: key, 
								writable: true
							});
						}

						resolve(register);
					};

					proccess.onerror = event => reject(event.target.error.message);
				});
			};

			this.update = function(object = {}, key = 1){
				return new Promise((resolve, reject) => {
					let proccess = DB.transaction([this.tableName], "readwrite")
						.objectStore(this.tableName)
							.put(object, key);

					proccess.onsuccess = event => resolve(true);

					proccess.onerror = event => reject(event.target.error.message);
				});
			};

			this.delete = function(key = 1){
				return new Promise((resolve, reject) => {
					let proccess = DB.transaction([this.tableName], "readwrite")
						.objectStore(this.tableName)
							.delete(key);

					proccess.onsuccess = event => resolve(true);

					proccess.onerror = event => reject(event.target.error.message);
				});
			};

			this.clear = function(){
				return new Promise((resolve, reject) => {
					let proccess = DB.transaction([this.tableName], "readwrite")
						.objectStore(this.tableName)
							.clear();

					proccess.onsuccess = event => resolve(true);

					proccess.onerror = event => reject(event.target.error.message);
				});
			};

			this.indexWhere = function(index = "", where = ""){
				return new Promise((resolve, reject) => {
					let indexResult = DB.transaction([this.tableName], "readonly")
						.objectStore(this.tableName)
							.index(index);

					let proccessWhere = indexResult.get(where);

					proccessWhere.onsuccess = event => {
						resolve({
							value: event.returnValue, 
							result: event.target.result, 
							table: event.target.source.objectStore.name
						});
					};

					proccessWhere.onerror = event => {
						reject({
							value: event.target.error.message, 
							result: null, 
							table: null
						});
					};
				});
			};

		};

		const haveDatabase = () => {
			if(('indexedDB' in window) || window.indexedDB){
				this.hasDatabase = true;
			}else{
				this.hasDatabase = false;
			}
		}; haveDatabase();

		const createDatabase = () => {
			return new Promise((resolve, reject) => {

				if(!this.hasDatabase) reject("Database is not support.");

				const requestDB = window.indexedDB.open(databaseName, version);

				requestDB.onupgradeneeded = event => {
					const database = event.target.result;

					verifyVersion(database);
					database.onerror = () => {
						this.errorCodeDB = event.target.errorCode;
						reject(event.target.errorCode);
					};

					let tablesNames = database.objectStoreNames;

					const browserTable = tableName => {
						for(let i = 0; i < tablesNames.length; i++){
							if(tablesNames[i] === tableName){
								return true;
							}
						}

						return false;
					};

					tablesCreate.forEach(table => {
						if(!browserTable(table[0])){
							if(table[1].autoIncrement){
								objectStores.push(
									database.createObjectStore(table[0], {autoIncrement: true})
								);
							}else if(table[1].keyPath){
								objectStores.push(
									database.createObjectStore(table[0], {keyPath: table[1].keyPath})
								);
							}
						}
					});

					tablesDelete.forEach((table, index) => {
						let newStores = new Array();

						objectStores.forEach(store => {
							if(store.name !== table) newStores.push(store);
						});

						objectStores = newStores;
						database.deleteObjectStore(table);
					});

					objectStores.forEach(store => {
						for(let i in indices){
							if(indices[i].table === store.name){
								store.createIndex(
									indices[i].indexName, 
									indices[i].property, 
									indices[i].settings
								);
								store.oncomplete = () => {/* ... */};
							}
						}
					});

					DB = database;
					resolve(true);
				};

				requestDB.onsuccess = event => {
					let database = event.target.result;
					verifyVersion(database);

					database.onerror = event => {
						this.errorCodeDB = event.target.errorCode;
						reject(event.target.errorCode);
					};

					DB = database;
					resolve(true);
				};

				requestDB.onerror = event => {
					this.errorCode = event.target.errorCode;
					reject(event.target.errorCode);
				};

				requestDB.onblocked = event => {
					window.alert(getMessageChangeVersion(messageVersion));
				};

				function verifyVersion(database){
					database.onversionchange = function(event){
						database.close();
						window.alert(getMessageChangeVersion(messageVersion));
						reject("Close database, change a version.");
					};
				}
			});
		};

		this.use = callback => {
			if(typeof(callback) !== "function") return false;

			createDatabase()
				.then(result => {
					this.isUse = true;
					callback();
				})
				.catch(error => {
					console.error(error);
				});
		};

		this.execute = function(){
			this.isExecute = true;
			return createDatabase();
		};

	}

	CosmicDatabase.isSupport = function(){
		if('indexedDB' in window || window.indexedDB) return true;
		else return false;
	};

	return CosmicDatabase;

}());