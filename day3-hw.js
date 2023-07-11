const findMinimum = (listOfNumbers) => {
    //if no numbers in list return -1;

    if (listOfNumbers.length === 0) {
        return -1;
    }
    //otherwise return the smallest number
    let min = 0;

    for (let i = 0; i < listOfNumbers.length;i++) { //check each number in list,  //is current number less than the minimum
        const currentOne = listOfNumbers[i];
        console.log(currentOne);
        if (currentOne < min) {
            min = currentOne;    //yes: update minimum,    //no: do nothing}
        }
    }
    return min;
}

    

   
   
 

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
    let result = false;



    //check every combination of numbers to see if the add up to x
    //hint: need two loops, start one at the first element and the other at the second element in list

    //loop 1 - start at first element in list
    const currentValueA = ?;//first item in list
    //loop 2 - start at second in list
    const currentValueB = ?;//second item in list

    //if current value A plus current value B equal x return true otherwise keep going


    return result;
}

//returns the number of words in the sentence
//input: "happy birthday jane"
//output: 3
const countNumberOfWords = (sentence) => {
    //how do you determine where one word starts and the other ends?
    //hint: you will have to check every character in the sentence

}
//Bonus: Try and solve: https://leetcode.com/problems/length-of-last-word/
//hints:
//1 - use what you know from countNumberOfWords problem
//2 - keep track of length of each would
//3 - to track length use a new variable that is a counter, rest counter once you hit the next word,
//at end of the sentence your count will be the length of the last word



//Extra Credit: https://leetcode.com/problems/roman-to-integer/
//hints: use lots of if statements