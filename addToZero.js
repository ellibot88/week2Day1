let arr = [-1, 1, 2, 3, 4, 5];
let newArr = arr.slice(0, 1);
console.log(newArr);
let addToZero = false;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);

    if (i === j) {
    } else if (arr[i] + arr[j] === 0) {
      console.log(arr[j]);
      addToZero = true;
    }
  }
}

console.log(addToZero);
