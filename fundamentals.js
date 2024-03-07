// 1. How to declare a variable using let and const

const fatherName = 'Alexender'

let season = 'rainy'
season = 'winter'


// 2. Conditions
// 6 basic Condition (>,<,===,!==,>=,<=)
// Multiple Conditions: && , || 

if(fatherName === 'alexender' || season === 'rainy'){

}
else if(fatherName === 'Alexender'){

}

else{

}


// 3. Array declare
// index, length, push

const numbers = [12,54,64,45]
numbers[0] = 67

// 4. for loop , While Loop

for(let i = 0; i<numbers.length; i++){
    const number = numbers[i]
    console.log(number)
}

// 5. Function

function multiply(num1, num2){
    const result = num1 * num2
    return result
}

const output = multiply(12,2)
console.log(output)


// 6. Object
// Access property by name
// 3 ways to access property by name
const student = {
    name: 'Riyal',
    age: '24'

}

const accessObjProperty = 'age'

console.log(student.age) //direct by property
console.log(student['age']) //access via property name string
console.log(student[accessObjProperty]) //access via property name in a variable





