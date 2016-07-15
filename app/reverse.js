exports.reverse = function(obj) {
	var reversed = {};
	for(key in obj) {
		var value = obj[key];
		if( reversed[value] ) {
			reversed[value].push(key);			
		}else {
			reversed[value] = [key];
		}
	}
	return reversed
}
