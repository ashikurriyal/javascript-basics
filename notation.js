const person = {
    name: 'akash',
    prefession: 'police',
    age: 38,
    address: 'baridhara',
    'son-name': 'sunny',
    25: summer
}

// dot Notation

const prof1 = person.prefession

// bracket notation

const prof2 = person['age']

const pName = 'profession'
const prof3 = person[pName]


// you cannt access the 25 directly, for that bracket is mandatory 
const season = person[25]

// also for access the son-name
const son = person['son-name']