//Part1
const numArray = [1, 2, 3, 4, 5]
const arrayOfStrings = ["abc", "ab", 'a']


function sumArray(numArray){
    let sum = 0
    numArray.forEach((num) => {
        sum += num
    })
    return sum 
}


function average(numArray){
    if(numArray === 0) return 0;
    let sum = sumArray(numArray)
    return sum / numArray.length
}

function longestString(arrayOfStrings){
    let newLongestString = ''
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(arrayOfStrings[i].length > newLongestString.length){
            newLongestString = arrayOfStrings[i]
        }
    }
    return newLongestString
}
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(strings, num){
    return strings.filter(string => string.length > num)
}

function recursiveNumber(n){
    if(n < 1){
        return;
    }
    console.log(n)
    recursiveNumber(--n);
}
recursiveNumber(5)

// console.log(sumArray(numArray))
// console.log(average(numArray))
// console.log(longestString(arrayOfStrings))
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

//PART 2
const csvString = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//.sort
// console.log(csvString.sort((a, b) => Number(a.age) - Number(b.age)));

//.filter
// let filter = csvString.filter((person) => Number(person.age) > 50);
// for(let i = 0; i < csvString.length; i++){
//     console.log(Number(filter[i].age))
// }
// console.log(csvString.filter((person) => Number(person.age) > 50))

//.map
// const newData = csvString.map(person => ({
//     id: person.id,
//     name: person.name,
//     job: person.occupation,
//     age: (Number(person.age) + 1).toString()
//     // age: (parseInt(person.age) +1 ).toString()
// }))
// console.log(newData)

//.reduce
// console.log(csvString.reduce((n, {age}) => n + Number(age), 0))
const sumOfAges = csvString.reduce((n, {age}) => n + Number(age), 0)
console.log(sumOfAges)

function calculateAvgAge(sumOfAges, csvString){
    let numOfPeople = csvString.length
    return sumOfAges / numOfPeople
} 

console.log(calculateAvgAge(sumOfAges, csvString))