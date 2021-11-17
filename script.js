//Preliminaries
/* Write an if statement that prints "is greater than" if 5 is greater than 3
Write an if statement that prints "is the length" if the length of "cat" is 3
Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
*/
if (5 > 3) {
    console.log("is greater than")
} 
var animal1 = 'cat'
if (animal1.length === 3) {
    console.log("is the length")
}
var animal1 = 'cat'
var animal2 = 'dog'
if (animal1 === animal2){
    console.log("is the same")
} else if (animal1 !== animal2){
    console.log("not the same")
}

//Bronze Medal
var person = {
    name: "Bobby",
    age: 12
  }
if (person.age > 18){
    console.log("Bobby is allowed to go to the movie")
}else if (person.age < 18){
    console.log("Bobby is not allowed to go to the movie")
}

if (person.name[0] === 'B'){
    console.log("Bobby is allowed to go to the movie")
}else if(person.name[0] !== 'B'){
    console.log("Bobby is not allowed to go to the movie")
}

if (person.name[0] === 'B' && person.age > 18){
    console.log("They are allowed to go to the movie")
}else if(person.name[0] !== 'B' || person.age <18 ){
    console.log("They are not allowed to go to the movie")
}

//Silver Medal
/*Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", 
prints "loose" or "abstract" if 1 == "1" , 
and prints "not equal at all" if it doesn't print the other stuff.*/

if (1 === "1"){
    console.log("strict")
} else if (1 == "1"){
    console.log("abstract")
} else if (1 !== "1"){
    console.log("does not equal at all")
}
/* Write an if statement 
that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4*/

if (1 <= 2 && 2 === 4){
    console.log("yes")
} else if (1 > 2 || 2 !== 4){
    console.log("no")
}

// Gold Medal
//Write an if statement that checks to see if "dog" is a string
var myVar = 'dog' 
if (typeof myVar === 'string' || myVar instanceof String){
    console.log("It is a string variable")
} else if (typeof myVar !== 'string' && myVar instanceof String){
    console.log("It is not a string variable")
}
//Write an if statement that checks to see if "true" is a boolean
var myVar2 = true
if (typeof myVar2 === 'boolean' || myVar2 instanceof boolean){
    console.log("It is a boolean variable")
} else if (typeof myVar2 !== 'boolean' && myVar2 instanceof boolean){
    console.log("It is not a boolean variable")
}
//Write an if statement that checks to see if a variable has been defined or not
var declared;
try {
  myVar;
  declared = true;
} catch(e) {
  declared = false;
}

if (declared) {
  console.log("My Variable is defined; now has the value: " + myVar);
} else {
  console.log("My variable is not defined");
}

//Write an if statement asking if "s" is greater than 12?
if ('s' > 12){
    console.log("s is greater than 12")
} else if ('s' <= 12 || 's' !== 12){
    console.log("s is not greater than 12")
}

var myNum = 10;
// Write your ternary here to log if `myNum` is odd or even.
if(myNum % 2 == 0) {
    console.log('Number is even!');
 } else {
    console.log('Number is odd!');
 }