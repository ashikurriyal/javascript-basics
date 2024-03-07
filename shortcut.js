// which are falsy values ==> '', 0, false, null, undefined
// which are truthy values ==> 'name', 5, true, {}, []



// check truthy
let myVar = 5

if(myVar){
    myVar = myVar*100 //if truthy
}
else{
    myVar = 0 //if falsy
}

// check falsy

let myMoney = 50

if(!myMoney){

}


const money = 80
let food;
if(money > 100){
    food = 'biriyani'
}
else{
    food = 'cha biscuit'
}

// ternary - the simple if else you can write using the ternary operator
let food1 = money>100 ? 'biriyani' : 'cha biscuit'
// console.log(food1)

let drink = (money > 100 && myVar > 100) ? 'lacchi' : 'coke'
// console.log(drink)



// number to string

const num1 = 52;
// console.log(num1);
const numString = num1 + ''
// console.log(numString)



// string to number

const input = '500'
const inputNum = +input
// console.log(inputNum)


// 

let isActive = true;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
// isActive ? showUser() : hideUser() 


// when is active is false that will not show anything in terminal because your first condition is already false so no need to check what is after the &&
isActive && showUser(); 

// use || if the left side is false then right side will be executed 
isActive || hideUser()


// toggle ==> if true then make it false , if false then make it true
isActive = !isActive