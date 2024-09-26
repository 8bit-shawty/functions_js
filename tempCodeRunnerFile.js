let personObject = {
    name: "Jon Doe",
    age: 40
}

// increment age
function incrementAge(personObject, n){
    let incrementedAge = personObject.age + n
    personObject.age = incrementedAge
    return personObject
}

//increment age and return copy 
let clonePerson = {...personObject}
// console.log(clonePerson)

console.log(incrementAge(clonePerson, 6))

console.log(incrementAge(personObject, 5));