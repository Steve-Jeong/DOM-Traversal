// callback function
function tryMe (param1, param2) { 
  console.log (param1 + " and " + param2); 
} 

// callback executer 
function callbackTester (callback) { 
  callback(); 
} 

// test function
callbackTester (function() {
  tryMe("hello", "goodbye"); 
}); 