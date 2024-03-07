// 1. Array destructuring
const nmbers = [42,65]
// const x = number[0]
// const y = number[1]

// You can write this same thing as like
const [x, y] = [42,65]
console.log(x,y)

// this is a normal function
function boxify(num1, num2) {
    const nums = [num1, num2]

    return nums
}
console.log(boxify(12,20))

// but this can be done by destructuting 
 const [a, b] = [12,20]


// object destructuring
 const student = {
    name: 'Riyal',
    age: '24',
    learned: ['C', 'C++','Java', 'Python', 'JavaScript', 'ShellScript']

}
// object property value destructuring
const [first, second, third, fourth] = student.learned
console.log(fourth)

const {name , age} = {name: 'ashikur', age: 24}




const employee = {
    ide: 'vsCode',
    designation: 'developer',
    device: 'mac',
    specification: {
        height: 66,
        weight: 70,
        address: 'dhaka',
        drink: 'water', 
        watch: {
            color: 'black',
            brand: 'honor'
        }
    }

}

const {device, ide} = employee
const {height, weight} = employee.specification
const {brand} = employee.specification.watch