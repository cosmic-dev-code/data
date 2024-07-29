/**
 * @class CosmicIterator
 */
var CosmicIterator = (function(){
	function CosmicIterator(arrItems = []){
		var countNow = -1;

		this.has = function(){
			if(arrItems.length > 0) return true;
			else return false;
		};

		this.next = function(){
			if(countNow < (arrItems.length - 1)){
				countNow++;
				return new Object({
					value: arrItems[countNow], 
					done: false
				});
			}else{
				return new Object({
					value: void(0), 
					done: true
				});
			}
		};

		this.toArray = function(){
			return arrItems;
		};

		this.forEach = function(callback = function(){}){
			while(true){
				let value = this.next();

				if(value.done){
					break;
				}else{
					callback(value);
				}
			}
		};

		this.first = function(){
			return arrItems[0];
		}

		this.last = function(){
			return arrItems[(arrItems.length - 1)];
		};
	}

	return CosmicIterator;
}());