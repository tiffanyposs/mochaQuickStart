exports.sumThreeFive = function(num) {
  var counter = 0;
  for(var i = 0; i < num; i++) {
  	if(i % 3 === 0 || i % 5 === 0) {
  		counter+=i;
  	}
  }
  return counter;
}
