// Local Strorage and Session Storage are 100% same



const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id')
    const id = idInput.value
    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value

    // 
    if(id && value){
        localStorage.setItem(id, value)
    }
    idInput.value = ''
    valueInput.value = ''

}

// you are setting an array but it will still be an string
localStorage.setItem('friends', [12,23,45])

// to convert it from string to exact array
localStorage.setItem('friends' ,JSON.stringify([12,23,45]))

// if you want to set an obj
const pen = {price: 10, color:black}
localStorage.setItem('pen', JSON.stringify(pen))

// if you want to read as Object

// this will return as string
const storedPen = localStorage.getItem('pen')

// for make it the actual object
const penObj = JSON.parse(storedPen)

// penObj will return the exact Pen Object
