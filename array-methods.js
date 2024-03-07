
const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 50000, brand: 'apple', color: 'Green'},
    {name: 'watch', price: 10000, brand: 'Casio', color: 'Black'},
    {name: 'camera', price: 70000, brand: 'Canon', color: 'gray'},

]


// Find the brands name from the array of object and show them into a array
const brands = products.map(product => product.brand)
// console.log(brands)

const price = products.map(abc => abc.price)
// console.log(price)

// products.forEach(product => console.log(product.color))

products.forEach(product => {

})


// 3. Filter (Will return the matches in a array)

const cheap = products.filter(product => product.price <= 50000)
// console.log(cheap)


const specificName = products.filter(product => product.name.includes('c'));
console.log(specificName)

// 4. Find (will return only the first match & it will return as an object)

const special = products.find(product => product.name.includes('c'));
console.log(special)