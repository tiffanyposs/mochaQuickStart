exports.reduce = function(string) {
	while(/([\s\S])\1/.test(string)) {
	  string = string.replace(/([\s\S])\1/, '');
    }
    var newString = string ? string : "Empty String";
    return newString;
}
