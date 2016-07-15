var expect = require("chai").expect;

var reverse = require("../app/reverse");
var parentheses = require("../app/parentheses");
var sumThreeFive = require("../app/sumThreeFive");

describe("Solves Code Problems", function() {

  //reverse.js	
  describe("It Reverses Key Value Pairs", function() {
    it("Switches keys to values", function() {
      var one = reverse.reverse({ "a": 1, "b": 2, "c": 1, "d": 3 });
      expect(one).to.deep.equal({"1": ["a", "c"], "2": ["b"], "3": ["d"]});
    });
  });

  //parentheses.js
  describe("It Checks for Matching Brackets", function() {
  	it("Checks Each Brack for Matching Pair", function() {
  		var matched = parentheses.matchBraces("()(){}[[]]");
  		var matchedTwo = parentheses.matchBraces("{{{}}}(({}))[][]");
  		var missMatched = parentheses.matchBraces("(())(){}{}([)]");
  		var missMatchedOdd = parentheses.matchBraces("((())");

  		expect(matched).to.equal(true);
  		expect(matchedTwo).to.equal(true);
  		expect(missMatched).to.equal(false);
  		expect(missMatchedOdd).to.equal(false);

  	});
  });

  //sumThreeFive.js
  describe("It Sums Number Divisible by 3 or 5", function() {
    it("Adds up Numbers Divisible by 3 or 5", function() {
    	var ten = sumThreeFive.sumThreeFive(10);
    	expect(ten).to.equal(23);
    });
  });
  


});




