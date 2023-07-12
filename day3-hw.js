const findMinimum = (listOfNumbers) => {
    //if no numbers in list return -1;

    if (listOfNumbers.length === 0) {
        return -1;
    }
    //otherwise return the smallest number
    let min = Number.MAX_SAFE_INTEGER; //max allowed number is js //There is also a Number.MIN_SAFE_INTEGER

    for (let i = 0; i < listOfNumbers.length; i++) { //check each number in list,  //is current number less than the minimum
        const currentOne = listOfNumbers[i];
        if (currentOne < min) {
            min = currentOne;    //yes: update minimum,    //no: do nothing}
        }
    }
    return min;
}

const result = findMinimum([41, 8, 21, 34]);

console.log (result);


/*
example 1:
input: []
output: -1

example 2:
input: [3]
output: 3

example 3:
input: [4,1,7,2]
output: 1
*/


//Paste your solution into here to test it: https://leetcode.com/problems/two-sum/
//Given a list are there 2 numbers that add to x; if there is two numbers that add to x return true, otherwise false
const twoSum = (listOfNumbers, x) => {


    // for (let i = 0; i < listOfNumbers.length - 1; i++) {
    //     for (let j = 1; j < listOfNumbers.length; j++) {
    //         if (listOfNumbers[i] + listOfNumbers[j] === x)
    //         result.push(i);
    //         result.push(j);
    //         // console.log(result);
    //     }
    // }

    for (let i = 0; i < listOfNumbers.length - 1; i++) {
        for (let j = i+1; j < listOfNumbers.length; j++) {
            if ((listOfNumbers[i] + listOfNumbers[j]) === x)
                return true;

        }
    }
    return false;


    //leetcode solution
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            const temp = nums[i] + nums[j];
            if (temp === target){
                return [i,j];
            }
        }
    }



    //check every combination of numbers to see if the add up to x
    //hint: need two loops, start one at the first element and the other at the second element in list

    //loop 1 - start at first element in list
    // const currentValueA = "?";//first item in list


    //loop 2 - start at second in list
    // const currentValueB = "?";//second item in list

    //if current value A plus current value B equal x return true otherwise keep going


}






//returns the number of words in the sentence
//input: "happy birthday jane" - think of it as an array ['h','a','p','p','y', ' ', ...]
//output: 3

//input: "" - hint length of array is 0
//output: 0

//input: "jane"
//output: 1
const countNumberOfWords = (sentence) => {
    //how do you determine where one word starts and the other ends? with a space " "
    //hint: you will have to check every character in the sentence

   
    if (sentence.length === 0){ 
        return 0;
    }
    
    let count = 1;         // current value set to 1                          // create a variable is trying to keep count
    for (let i = 0; i < sentence.length;i++) { //start at index 0, if i is less than the length of sentence which is 0
       
        const currentValue = sentence.substr(i,1);
        if (currentValue === " "){
            //currentValue is a space - counting spaces
            count = count + 1; 
        }
     
    }
    return count;

}




const lengthOfLastWord = (sentence) => {
   //write bonus code here

}





//Bonus: Return the length of the last word: Try and solve: https://leetcode.com/problems/length-of-last-word/
//hints:
//1 - use what you know from countNumberOfWords problem
//2 - keep track of length of each word
//3 - to track length use a new variable that is a counter, rest counter once you hit the next word,
//at end of the sentence your count will be the length of the last word
//Return the length of the last word

//Bonus 2: print out (console log) length of each word



///////////////////////////////

//Extra Credit: https://leetcode.com/problems/roman-to-integer/
//hints: use lots of if statements

//estimate:  less than 20 if statements

//goal - return 2023