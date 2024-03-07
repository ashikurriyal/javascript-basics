const numbers = [12,54,64,45]

const student = {
    name: 'Riyal',
    age: '24',
    learned: ['C', 'C++','Java', 'Python', 'JavaScript', 'ShellScript']

}


// 1. Template string

const about = `My name is ${student.name} & my age is ${student.age}. My birthdate is ${numbers[0]}th July. I have learned a lot of programming language. Currently I'm Learing ${student.learned[4]}`
console.log(about)


// 2. Arrow Function

// Without any parameter & just returning
const getFiftyFive = () => 55; 

//Single Parameter(if one parameter, you can ignore the braces), add a number
const addSixtyFive = num => num +65;

// if the number is even or not
const isEven = x => x%2 == 0;

// Multiple Parameter
const addThree = (x,y,z) => x + y + z;

// Multiline Arrow funciton
const doMath = (num1, num2) => {

    const sum = num1 + num2

    // this will not automatically retun, if you want to return then you have to write it

    return sum;
}


// 3. Spread Operator

// const newNumbers = numbers;
// numbers.push(99)

// console.log(newNumbers)

const newNumbers2 = [...numbers];
numbers.push(78)


// console.log(numbers)
// console.log(newNumbers2)

// Create a new array from an older array and add an element

const currentNumbers = [...numbers, 55]

console.log(numbers)
console.log(newNumbers2)
console.log(currentNumbers)