let noAgePersonObject = {
    name: "Jeff Bezoz",
}

// increment age
function incrementAge(personObject, n){
    let incrementedAge = personObject.age + n
    personObject.age = incrementedAge
    return personObject
}

function incrementAgeWhenZero(noAgePersonObject, n){
    let incrementedAge = age + n
    noAgePersonObject.age = incrementedAge;
    return noAgePersonObject
}

console.log(incrementAgeWhenZero(noAgePersonObject, 10, age = 0))