// Write your code below

// Given a word, return true if that word contains only unique characters. Return false otherwise.


function hasUniqueChars(string){
    // letnewString = string.split('')
    // console.log(newString)
    for( let i =0; i < string.length; i++){
        for( let x = i +1; x < string.length; x++){
            if(string[i] === string[x]){
                return false
            }
        }
    }
 return true
}


// function hasUniqueChars(str){
//     const mySet = new Set(str)
//     console.log(mySet)
//     if(str.length === mySet.size){
//         return true
//     } else {
//         return false
//     }
// }




// For example:

console.log(hasUniqueChars("Monday"))
// returns true
console.log(hasUniqueChars("Moonday"))
// returns false
// Uppercase and lowercase letters should be considered separately:

console.log(hasUniqueChars("Bob"))
// returns true