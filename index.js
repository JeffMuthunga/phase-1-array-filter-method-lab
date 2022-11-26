// // Code your solution here


// findMatching- This function takes an array of drivers' names and a string as
//  arguments, and returns the matching list of drivers. The function should be case insensitive.

// fuzzyMatch - This function takes an array of drivers' 
// names and a string as arguments for querying the array, and returns all 
// drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a
//  string as arguments. Each driver object has two properties: name and hometown. 
//  The function should return each element whose name property matches the provided string 
//  argument.

const findMatching = (arr, str) => {
    return arr.filter(arr => {
        return arr.toLowerCase() == str.toLowerCase()
    })
}
const fuzzyMatch = (arr, str) => {
    for(let driver of str){
        return arr.filter(arr => arr[0].toLowerCase() == driver.toLowerCase())
    }
}
const matchName = (arr, str) => {
    return arr.filter(arr=> arr.name == str)
}

