//Function syntax

function myFunction(param1, param2) {
  let answer = param1 + param2;
  return answer;
}

//Arrow function syntax

const myFunction1 = (param3, param4) => {
  let nextAnswer = param3 - param4;
  return nextAnswer;
};

//single line arrow function
const singleLine = (var4) => "test " + var4;
console.log(singleLine(10));

console.log(myFunction(5, 4));
console.log(myFunction1(5, 8));
console.log(myFunction(5, 5) + myFunction1(4, 1));

console.log("test"[0].toUpperCase());
