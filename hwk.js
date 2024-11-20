// Question 1
var ages =[3, 9, 23, 64, 2, 8, 28, 93]; // declaring the array variable

console.log("Ages:", ages);

// programmatical substaction
let minusAge = ages[ages.length-1]-ages[0];
console.log("minusAge",minusAge);

// pushing a new item in the array and dynamic programmatical substaction
ages.push(100);
console.log(" Ages after adding 100",ages);
let minusAgePush = ages[ages.length-1]-ages[0];
console.log("minusAgePush",minusAgePush);

// calculate average using looop

let sumOfAges = 0;
for(let i = 0;i<ages.length; i++){
    //console.log("test",i);
    sumOfAges +=ages[i];
    console.log("sum equals",sumOfAges);
}
let average = sumOfAges/ages.length;
console.log("Average", average);

// Question 2
// create the name array
let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChars = 0;

//loop to iterate through the array and calculate the average number of letters per name
for (let i=0; i<names.length; i++){
    //console.log(i, "test");
totalChars += names[i].length;
console.log("index",i,"name", names[i],"totalChars",totalChars);   
}
let averageNames = totalChars/names.length;

console.log( "average of names", averageNames);

let concatNames =" "
// loop to iterate through the array again and concatenate all the names together, separated by spaces.
for(let i=0; i<names.length; i++ ){
    //console.log(i);
concatNames = concatNames.concat(names[i]+ " ");
console.log(i,"string names concatenated",concatNames );
}

// Question 3 
// accessing the last element of any array
console.log("last element of the array ",ages[ages.length-1]);

// Question 4
// accessing the first element of any array
console.log("first element of the array ",ages[0]);

//Question 5
// Create a new array called nameLengths. Write a loop to iterate over the previously created
// names array and add the length of each name to the nameLengths array.
 let nameLengths =[];
 for (let i=0; i<names.length; i++){
    nameLengths.push(names[i].length)
    console.log("NameLength array ",nameLengths);
 }
 // Question 6
//  calculate the sum of all the elements in the NameLength array
 let charTotal = 0
 for (let i =0; i<nameLengths.length; i++){
    //console.log(i);
    charTotal += nameLengths[i];
    console.log("for index", i, "character totals eaqual",charTotal);
 }

 // Question 7
 // creating a function with word and n, as arguments and returns the word concatenated to itself n number of times.
function concatWords(word,n){
    console.log("Hello par:",word,"n par:", n);
    let concat = word.repeat(n);
    console.log(concat);
}
concatWords("Hello",3);

// Question 8
// creating a function with two parameters, firstName and lastName, and returns a full name.
function addNames(firstName,lastName){
    console.log(firstName," ", lastName);
}
addNames("Rosmine","Ishimwe");

// Question 9
// function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
 numbers1 = [ 1,4,7,99,100,200]
 numbers2 = [1,12,3,4]
 function sumOfNumbers(array){
    let total =0;
    for(let i =0;i<array.length; i++){
        total += array[i];
        //console.log("Total equals",total);  
    } 
    if(total >100){
        console.log( total, "true");
        return true;
    }    
        else { 
            console.log(total,"false");
            return false;
        }
    

 }
 sumOfNumbers(numbers1);
 sumOfNumbers(numbers2);


// Question 9
//function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(array){
    let total =0;
    for(i=0; i<array.length;i++){
        total +=array[i];
        //console.log(total)
    }
let Average = total/array.length;
console.log("average of numbers",Average);
}
calculateAverage(numbers1);

// Question 10
// Write a function that takes two arrays of numbers and returns true if the average of the elements 
//in the first array is greater than the average of the elements in the second array.
let number3 = [100,100,100];
let number4 = [100,100,99];
function twoAverage(array1,array2){
    let total1 = 0;
    let total2 = 0;
    // console.log(array1,array2);
    for(const number of array1){
        total1 += number;
        //console.log(total1)
    }
    for(const number of array2){
        total2 += number;
        //console.log(total2)
    }
    let average1= total1/array1.length;
    let average2= total2/array2.length;
    console.log("average 1:",average1,"average 2:",average2);
    if(average1>average2){
        console.log(true);
        return true;
    } else{
        console.log(false);
        return false;

    }
}

twoAverage(number3,number4);

// Question 12
// fWrite a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket,
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside,moneyInPocket){
    //console.log(isHotOutside,moneyInPocket)
    let buyDrink = isHotOutside === true && moneyInPocket>10.5;
    console.log("buy a drink?", buyDrink)
    return buyDrink

}
willBuyDrink(false,11);
willBuyDrink(true,11);

// Question 13
// ffunction to add numbers and return sum
// Function to add two numbers
function addNumbers(num1, num2) {
    // Calculate the sum of num1 and num2
    let sum = num1 + num2;
    
    // Return the sum
    return sum;
}

// Example usage
let result = addNumbers(5, 3);
console.log(result); 




    


