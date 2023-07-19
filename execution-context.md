https://ui.dev/javascript-visualizer

example code:

var events = [1,2,3];
var randomValue = 'xxx';

var test = function(parameterA){
  var temp = 'xyz';
  var name = 'test1:' + parameterA;
  console.log(name);//test1:abc
  console.log(events);//[1,2,3]
};

test('abc');
console.log(events);//[1,2,3]
console.log(test);//[function]
console.log(name);//undefined
console.log(parameterA);//undefined