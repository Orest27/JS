let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
console.log(hello + " " + owu + '.' + com + ua)
let firstName = 'Orest';
let middleName = 'Romanovuch';
let lastName = 'Voitovych';
console.log(firstName + " " + middleName + ' ' + lastName)
let a = 100; 
let b = '100'; 
let c = true;
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
function foo() {
    var userAnswer = prompt("What is your name?");
    return userAnswer;
}
function foo1() {
    var userAnswer = prompt("What is your middlename?");
    return userAnswer;
}
function foo2() {
    var userAnswer = prompt("What is your lastname?");
    return userAnswer;
}
console.log(foo() + " " + foo1() + " " + foo2());
