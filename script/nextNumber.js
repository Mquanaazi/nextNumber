const array = [1, 2, 3, 4, 5];
let index = 0;

const arrayDisplay = document.getElementById('arrayDisplay');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
  if (index < array.length) {
    arrayDisplay.textContent += `,${array[index]}`;
    index++;
  } else {
    arrayDisplay.textContent = "Go home you're done for the day";
  }
});

arrayDisplay.textContent = `Current number: ${array[index]}`;



































// let j= -1
// let numbers= [1,2,3,4,5,6]
// function number() {
//     let nextNumber=j++
//     return nextNumber
// num= numbers.index 
// }


// number()
// console.log(nextNumber)
// console.log(numbers[0])++
// console.log(numbers[1])
// console.log(numbers[2])
// console.log(numbers[3])
// console.log(numbers[4])
// console.log(numbers[5])

// let j = 1;
// function nextNumber() {
//   return ++j;
// }
// console.log(nextNumber());
