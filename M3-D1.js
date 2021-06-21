/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const calculareSum = function(n1, n2){
    if (n1 !== n2){
        let normalResult = n1 + n2
        console.log("Ex 1: ", normalResult)
    } else {
        let tripleResult = (n1+n2)*3
        console.log("Ex 1: ", tripleResult)
    }
}

calculareSum(5,8)
calculareSum(3,3)

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const isItFifty = function(n1, n2){
    if((n1 === 50) || (n2 === 50)){
        console.log("Ex 2: ", true)
    } else if ((n1+n2) === 50){
        console.log("Ex 2: ", true)
    } else {
        console.log("Ex 2: ", false)
    }
}

isItFifty(60,45)
isItFifty(25,25)
isItFifty(50,36)

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeCharacter = function(string, n){
    let arrString = string.split("")
    delete arrString[n-1]
    let newString = arrString.join("")
    console.log("Ex 3: ", newString)
}

removeCharacter("string", 3)

/*
4)
 Create a function to find the largest of three given integers.
*/

const biggerOfThree = function(n1, n2, n3){
    if((n1 > n2) && (n1 > n3)){
        console.log("Ex 4: n1 is the biggest")
    } else if ((n2 > n1) && (n2 > n3)){
        console.log("Ex 4: n2 is the biggest")
    } else {
        console.log("Ex 4: n3 is the biggest")
    }
}

biggerOfThree(3, 5, 15)
biggerOfThree(35, 89, 10)

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const whatIsRange = function(n1, n2){
    if(((n1 >= 40) && (n1 <= 60)) && ((n2 >= 40) && (n2 <= 60))){
        console.log("Ex 5: ", true , " range 40-60")
    } else if(((n1 >= 70) && (n1 <= 100)) && ((n2 >= 70) && (n2 <= 100))){
        console.log("Ex 5: ", true, " range 70-100")
    } else {
        console.log("Ex 5: ", false)
    }
}

whatIsRange(46, 55)
whatIsRange(85, 100)
whatIsRange(20, 45)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const copyString = function(string, n){
    let i = 0
    while(i < n){
        console.log("Ex 6: ", string)
        i++
    }
}

copyString("Strive School", 5)

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName = function(string){
    let stringArr = string.toLowerCase().split("")
    if((stringArr[0] == "l") && (stringArr[1] == "o") && (stringArr[2] == "s")){
        console.log("Ex 7: Los Angeles")
    } else if((stringArr[0] == "n") && (stringArr[1] == "e") && (stringArr[2] == "w")){
        console.log("Ex 7: New York")
    } else {
        console.log("Ex 7: ")
    }   
}

cityName("Lost")
cityName("Newspaper")
cityName("Strive")

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
let arrEx8 = []
const sumOfThreeArr = function(){
    if (arrEx8.length === 3){
        let result = arrEx8[0] + arrEx8[1] + arrEx8[2]
        console.log("Ex 8: ", result)
    } else {
        console.log("Ex 8: This array doesn't have 3 numbers")
    }
}

arrEx8 = [2, 6, 8]
sumOfThreeArr()

arrEx8 = [5, 30]
sumOfThreeArr()

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
let arrEx9 = []
const arrTesting = function(){
    if(arrEx9.length === 2){
        if((arrEx9[0] === 1) || (arrEx9[1] === 1)){
            console.log("Ex 9: This array contains 1")
        } else if ((arrEx9[0] === 3) || (arrEx9[1] === 3)){
            console.log("Ex 9: This array contains 3")
        } else {
            console.log("Ex 9: This array doesen't contain neither 1 or 3")
        }
    }
}

arrEx9 = [1,9]
arrTesting()
arrEx9 = [6,3]
arrTesting()
arrEx9 = [8,10]
arrTesting()

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

let arrEx10 = []

const arrTestEx10  = function(){
    if (arrEx10.length === 2){
        if((arrEx10[0] === 1) || (arrEx10[1] === 1)){
            console.log("Ex 10: This array contains a 1 or a 3")
        } else if ((arrEx10[0] === 3) || (arrEx10[1] === 3)){
            console.log("Ex 10: This array contains a 1 or a 3")
        } else {
            console.log("Ex 10: This array doesen't contain neither 1 or 3")
        }
    }
}

arrEx10 = [2,10]
arrTestEx10()
arrEx10 = [1,6]
arrTestEx10()

/* 11)
Create a function to find the longest string from a given array of strings.
*/

let arrOfStrings11 = []
let longest = ""
const longestString = function(){
    let arrLength = arrOfStrings11.length
    for (let i = 0 ; i< arrLength ; i++){
        if(arrOfStrings11[i].length > longest.length){
            longest = arrOfStrings11[i]
        }
    }
  console.log("Ex 11: The longest word is", longest)
} 

arrOfStrings11 = ["Sun", "Moon", "Jupiter"]
longestString()

/* 12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

const typeOfAngle = function(deg){
    if ((deg > 0) && (deg < 90)){
        console.log("Ex 12: This is an Acute Angle")
    } else if (deg === 90){
        console.log("Ex 12: This is a Right Angle")
    } else if ((deg > 90) && (deg < 180)){
        console.log("Ex 12: This is a Obtuse Angle")
    } else if (deg === 180){
        console.log("Ex 12: This is a Straight Angle")
    }
}

typeOfAngle(45)
typeOfAngle(90)
typeOfAngle(126)

/* 13)
Create a function to find the index of the greatest element of a given array of integers
*/

let arrEx13 = []
const indexGratestElement = function(){
    let biggest = ""
    let index
    for (let i=0; i< arrEx13.length; i++){
        if(arrEx13[i] > biggest){
            biggest = arrEx13[i]
            index = arrEx13.indexOf(biggest)
            
        }
    }
    console.log("Ex 13: The index of the greatest number is", index)
}

arrEx13 = [25,30,4,15]
indexGratestElement()

/* 14)
Create a function to get the largest even number from an array of integers.
*/

let arrEx14 = []
let largestEx14 = 0
const largestEvenNumber = function(){
    for (let i=0; i<arrEx14.length; i++){
        if ((arrEx14[i] % 2) === 0){
            if(arrEx14[i] > largestEx14){
                largestEx14 = arrEx14[i]
            }
        }
    }
    console.log("Ex 14: The largest even number is", largestEx14)
}

arrEx14 = [3,15,80,20,99]
largestEvenNumber()

/* 15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/

const positiveOrNegative = function(n1,n2){
    if ((n1 < 0) && (n2 < 0)){
        console.log("Ex 15: Both numbers are negative")
    }else if (n2 < 0){
        console.log("Ex 15: n2 is negative")
    } else if (n1 < 0){
        console.log("Ex 15: n1 is negative")
    } else {
        console.log("Ex 15: Both numbers are positive")
    }
}

positiveOrNegative(-6,4)
positiveOrNegative(8,45)
positiveOrNegative(-52,-12)
positiveOrNegative(23,-78)

/* 16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/

const lowerAndUpper = function(string){
    let arrString = string.split("")
    if(arrString.length <= 3){
        string = arrString.join("")
        console.log("Ex 16:", string.toUpperCase())
    } else {
        let upper = arrString.slice(3, arrString.length).join("")
        let lower = arrString.slice(0,3).join("")
        string = lower.toLowerCase() + upper.toUpperCase()
        console.log("Ex 16:", string)
    }
}

lowerAndUpper("Colorado")
lowerAndUpper("Sun")

/* 17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */

const sumEx17 = function(n1,n2){
    let sum = n1 + n2
    if((sum > 50) && (sum < 80)){
        return 65
    } else {
        return 80
    }
}

console.log("Ex 17: ",sumEx17(35,40))
console.log("Ex 17: ",sumEx17(40,70))

/* 18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */

const numbToString = function(n){
    for(let i=1; i<=n; i++){
        if(n % i === 0){
            if (i === 3){
                console.log("Diego")
            } if (i === 5){
                console.log("Riccardo")
            } if (i === 7){
                console.log("Stefano")
            }
        }
    }
}
console.log("Ex 18:")
console.log("30 ->"), numbToString(30)
console.log("49 ->"), numbToString(49)

/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

let arrAcronym = [] 
const findAcronym = function(phrase){
    let arrPhrase = phrase.split(" ")
    for(let i=0; i< arrPhrase.length; i++){
        let firstLetter = arrPhrase[i].split("")[0]
        arrAcronym.push(firstLetter)
    }
    let acronym = arrAcronym.join("")
    console.log("Ex 19:", acronym)
}

findAcronym("Strive School Student")
