// 1. JSON (Stringify, Parse)


// this is js object
const student = {
    name: 'Riyal',
    age: '24',
    learned: ['C', 'C++','Java', 'Python', 'JavaScript', 'ShellScript']
}

// convert to js object notation
const studentJSON = JSON.stringify(student)

// console.log(student)
// console.log(studentJSON)

// convert object notation to regular object
const studentObj = JSON.parse(studentJSON)
// console.log(studentObj)


// 2. Fetch

// fetch('url')
// .then(res => resizeTo.json())
// .then(data => console.log(data))


// keys, values

const keys = Object.keys(student)
console.log(keys)
const values = Object.values(student)
console.log(values)


// loop in array

const random = [23, 54, 98]
random.forEach(num => console.log(num));
random.map(num => num*2);

// for of loop on array like object
// for in loop on an object

// add or remove for an array

const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 50000, brand: 'apple', color: 'Green'},
    {name: 'watch', price: 10000, brand: 'Casio', color: 'Black'},
    {name: 'camera', price: 70000, brand: 'Canon', color: 'gray'},

]

const newProduct = {name: 'webcam' , price: '15000', brand: 'sony'}

// copy products array and then add new prodcuts
const newProducts = [...products, newProduct]
console.log(newProducts)

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = newProducts.filter(product => product.name !== 'phone')
console.log(remaining)