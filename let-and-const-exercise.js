// # *****let* and *const* Exercise**

// In this exercise, you’ll refactor some ES5 code into ES2015.

// ## ****ES5 Global Constants****

// jsx
var PI = 3.14;
PI = 42; // stop me from doing this!


// ## ****ES2015 Global Constants****

// jsx

const PI = 3.14;
/* Write an ES2015 Version */


// ## **Quiz**

// - What is the difference between var and let?
// Var is hoisted, can have multiple variables with the same name, while let cannot be redeclared, is not hoisted, and let has a block scope.
// - What is the difference between var and const?
// Var is hoisted, can have multiple variables with the same name that can be redeclared and reassigned, while const cannot be redeclared, cannot be reassigned, is not hoisted, and has a block scope.
// - What is the difference between let and const?
// let can be reassigned while const cannot.
// - What is hoisting?
//var variables are run at the top of their scope in js while let and const are within their scope.